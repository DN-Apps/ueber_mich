const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// Inhalt speichern
router.post('/save', (req, res) => {
  const { content, category } = req.body;

  if (!content || !category) {
    return res.status(400).json({ error: 'Inhalt und Kategorie sind erforderlich.' });
  }

  const query = 'INSERT INTO content (html_content, category) VALUES (?, ?) ON DUPLICATE KEY UPDATE html_content = ?, category = ?';
  db.query(query, [content, category, content, category], (err) => {
    if (err) {
      console.error('Fehler beim Speichern des Inhalts:', err);
      return res.status(500).json({ error: 'Fehler beim Speichern des Inhalts.' });
    }
    res.status(201).json({ message: 'Inhalt erfolgreich gespeichert.' });
  });
});

// Inhalt abrufen
router.get('/get/:id', (req, res) => {
  const { id } = req.params;

  const query = 'SELECT html_content, category FROM content WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Fehler beim Abrufen des Inhalts:', err);
      return res.status(500).json({ error: 'Fehler beim Abrufen des Inhalts.' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Inhalt nicht gefunden.' });
    }
    res.json(results[0]);
  });
});

// Inhalte nach Kategorie abrufen
router.get('/category/:category', (req, res) => {
  const { category } = req.params;

  const query = 'SELECT id, html_content FROM content WHERE category = ? ORDER BY created_at DESC LIMIT 1';
  db.query(query, [category], (err, results) => {
    if (err) {
      console.error('Fehler beim Abrufen der Inhalte:', err);
      return res.status(500).json({ error: 'Fehler beim Abrufen der Inhalte.' });
    }
    res.json(results);
  });
});


module.exports = router;
