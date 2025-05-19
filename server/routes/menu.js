const express = require('express');
const router = express.Router();
const db = require('../db/connection'); //Verbindung zur MySQL-Datenbank

// Menüpunkte abrufen
router.get('/list', (req, res) => {
    const query = 'SELECT * FROM menu_items';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Fehler beim Abrufen der Menüpinkte:', err);
            return res.status(500).json({ error: 'Fehler beim Abrufen der Menüpunkte.' });
        }
        res.json(results);
    });
});


// Menüpunkt hinzufügen
router.post('/add', (req, res) => {
    const { name, url } = req.body;
    if(!name || !url){
        return res.status(400).json({ error: 'Name und URL sind erforderlich.' });
    }

    const query = 'INSERT INTO menu_items (name, url) VALUES (?,?)';
    db.query(query, [name, url], (err, result) => {
        if (err) {
            console.error('Fehler beim Hinzufügen des Menüpunktes:', err);
            return res.status(500).json({ error: 'Fehler beim Hinzufügen des Menüpunktes.'});
        }
        res.status(201).json({message: 'Menüpunkt erfolgreich hinzugefügt.', id: result.insertId});
    });
});

//Menüpunkt löschen
router.delete('/delete/:id', (req, res) => {
    const {id} = req.params;

    const query = 'DELETE FROM menu_items WHERE id = ?';
    db.query(query, [id], (err) => {
        if(err){
            console.error('Fehler beim Löschen des Menüpunktes:', err);
            return res.status(500).json({ error: 'Fehler beim Löschen des Menüpunktes.'});
        }
        res.json({message: 'Menüpunkt erfolgreich gelöscht.'});
    });
});

//Menüpunkt bearbeiten
router.put('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { name, url } = req.body;
  
    if (!name || !url) {
      return res.status(400).json({ error: 'Name und URL sind erforderlich.' });
    }
  
    const query = 'UPDATE menu_items SET name = ?, url = ? WHERE id = ?';
    db.query(query, [name, url, id], (err) => {
      if (err) {
        console.error('Fehler beim Bearbeiten des Menüpunktes:', err);
        return res.status(500).json({ error: 'Fehler beim Bearbeiten des Menüpunktes.' });
      }
      res.json({ message: 'Menüpunkt erfolgreich bearbeitet.' });
    });
  });

module.exports = router;