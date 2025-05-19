const express = require('express');
const db = require('../db/connection');
const router = express.Router();

//Benutzer hinzufügen
router.post('/hinzufuegen', (req, res) => {
    const { name, email, password } = req.body;
    console.log('Empfange Daten:' , { name, email, password});

    if(!name || !email || !password){
        return res.status(400).json({ error: 'Alle Felder sind erforderlich'});
    }
    const query = 'INSERT INTO benutzer (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, password], (err, result) => {
        if(err) {
            console.error('Fehler beim Hinzufügen des Benutzers', err);
            return res.status(500).json({ error: 'Datenbankfehler' });
        } else {
            console.log('Benutzer erfolgreich hinzugefügt');
            res.status(201).json({ message: 'Benutzer erfolgreich hinzugefügt' });
        }
    });
});

//Alle Benutzer abrufen
router.get('/alle', (req, res) => {
    const query = 'SELECT * FROM benutzer';
    db.query(query, (err, results) => {
        if(err) {
            res.status(500).json({ error: 'Fehler beim Abrufen der Benutzer' });
        } else {
            res.json(results);
        }
    });
});

module.exports = router;