import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function WysiwygEditorWithLoad({ contentId, onContentUpdate }) {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  // Laden des Inhalts bei der Initialisierung
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/content/get/${contentId}`);
        if (!response.ok) {
          throw new Error('Fehler beim Laden des Inhalts');
        }
        const data = await response.json();
        setContent(data.content); // Setzt den geladenen Inhalt in den Editor
        setCategory(data.category); //Setzt die Kategorie
      } catch (error) {
        console.error(error);
        setStatusMessage(`❌ Fehler: ${error.message}`);
      }
    };

    if (contentId) {
      fetchContent();
    }
  }, [contentId]);

  // Speichern des bearbeiteten Inhalts, 'category' in stringify eingefügt
  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/content/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, category }),
      });

      if (!response.ok) {
        throw new Error('Fehler beim Speichern des Inhalts');
      }

      const data = await response.json();
      setStatusMessage(`✅ ${data.message}`);
      if (onContentUpdate){
        onContentUpdate(); //Aufruf der Funktion
      }
      
    } catch (error) {
      console.error(error);
      setStatusMessage(`❌ Fehler: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>WYSIWYG-Editor mit Kategorie</h2>
      <ReactQuill theme="snow" value={content} onChange={setContent} />
      <div style={{marginTop: '10px'}}>
        <label htmlFor='category'>Kategorie</label>
        <input
          type='text'
          id='category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder='Kategorie einbinden'>
        </input>
      </div>
      <button onClick={handleSave} style={{ marginTop: '10px' }}>
        Speichern
      </button>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default WysiwygEditorWithLoad;
