const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const benutzerRoutes = require('./routes/benutzer');
const contentRoutes = require('./routes/content');
const menuRoutes = require('./routes/menu');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5002;

//Middleware

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routen registrieren
app.use('/api/benutzer', benutzerRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/menu', menuRoutes);

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});