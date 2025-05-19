import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill-Editor-Styles

function WysiwygEditor() {
  const [content, setContent] = useState(''); // Zustand für den Editor-Inhalt
  const [statusMessage, setStatusMessage] = useState('');

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/content/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        throw new Error('Fehler beim Speichern des Inhalts');
      }

      const data = await response.json();
      setStatusMessage(`✅ ${data.message}`);
    } catch (error) {
      console.error(error);
      setStatusMessage(`❌ Fehler: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>WYSIWYG-Editor</h2>
      <ReactQuill theme="snow" value={content} onChange={setContent} />
      <button onClick={handleSave} style={{ marginTop: '10px' }}>
        Speichern
      </button>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default WysiwygEditor;
