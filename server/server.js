require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();

// ---- App/Netzwerk-Defaults (NPM/Proxy) ----
app.set('trust proxy', 1); // korrektes Proto/IP hinter Nginx Proxy Manager

// ---- ENV & Konfiguration ----
const PORT = Number(process.env.PORT || 5000);
const APP_ENV = process.env.APP_ENV || 'qa';

// DB-Creds kommen vom Server-Compose (.env auf dem Server)
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// ---- DB-Pool ----
const pool = mysql.createPool(dbConfig);

// ---- Middleware ----
app.use(express.json()); // ersetzt body-parser
// CORS nur für QA-Domain (ggf. erweitern)
const allowedOrigins = [
  'https://qa.ned-it.de',
  'http://localhost:3000' // optional für lokale FE-Tests
];
app.use(
  cors({
    origin(origin, cb) {
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error('Not allowed by CORS'));
    },
    credentials: true
  })
);

// DB-Pool für Routen verfügbar machen (falls deine Router ihn nutzen wollen)
app.use((req, _res, next) => {
  req.db = pool;
  next();
});

// ---- Health Endpoint ----
app.get('/api/health', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 AS ok');
    res.json({ status: 'ok', env: APP_ENV, db: rows[0].ok });
  } catch (err) {
    res.status(500).json({ status: 'error', env: APP_ENV, message: err.message });
  }
});

// ---- Deine bestehenden Routen ----
const benutzerRoutes = require('./routes/benutzer');
const contentRoutes = require('./routes/content');
const menuRoutes = require('./routes/menu');

app.use('/api/benutzer', benutzerRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/menu', menuRoutes);

// ---- 404 & Fehler-Handler (optional, aber hilfreich) ----
app.use((req, res) => res.status(404).json({ message: 'Not found' }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

// ---- Start ----
const server = app.listen(PORT, () => {
  console.log(`API listening on http://0.0.0.0:${PORT} (env=${APP_ENV})`);
});

// ---- Graceful shutdown ----
const shutdown = async () => {
  console.log('Shutting down...');
  try {
    await pool.end();
  } catch (_) {}
  server.close(() => process.exit(0));
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
