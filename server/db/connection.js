require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

//Verbindung testen

db.getConnection((err) => {
    if(err) {
        console.error('Fehler bei der Verbindung zur Datenbank:', err);
    } else {
        console.log('Verbindung zur Datenbank erfolgreich!');
    }

});

module.exports = db;