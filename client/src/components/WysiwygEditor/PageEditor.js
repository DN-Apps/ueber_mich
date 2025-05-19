import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import WysiwygEditorWithLoad from '../WysiwygEditor/WysiwygEditorWithLoad'


function PageEditor({ pageId }) {
  const [content, setContent] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    // Inhalt laden
    const fetchContent = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/content/get/${pageId}`);
        if (response.ok) {
          const data = await response.json();
          setContent(data.content);
        } else {
          setContent(''); // Falls kein Inhalt gefunden wird
        }
      } catch (error) {
        console.error('Fehler beim Laden des Inhalts:', error);
      }
    };

    fetchContent();
  }, [pageId]);

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/content/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pageId, content }),
      });

      if (response.ok) {
        setStatusMessage('Inhalt erfolgreich gespeichert!');
      } else {
        setStatusMessage('Fehler beim Speichern des Inhalts.');
      }
    } catch (error) {
      console.error('Fehler:', error);
      setStatusMessage('Fehler beim Speichern des Inhalts.');
    }
  };

  return (
    <div>
      <ReactQuill theme="snow" value={content} onChange={setContent} />
      <button onClick={handleSave}>Speichern</button>
      {statusMessage && <p>{statusMessage}</p>}
      <WysiwygEditorWithLoad contentId={1}></WysiwygEditorWithLoad>
    </div>
  );
}

export default PageEditor;
