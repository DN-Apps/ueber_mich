import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';

function PageEditor() {
  const { pageId } = useParams(); // Dynamische Seiten-ID
  const [content, setContent] = useState('');

  useEffect(() => {
    // Inhalte laden (Simulation)
    setContent(`Inhalte für ${pageId}`);
  }, [pageId]);

  const handleSave = () => {
    console.log(`Speichern: ${content}`);
    alert(`Inhalte von ${pageId} gespeichert!`);
  };

  return (
    <div>
      <h1>Editor: {pageId}</h1>
      <ReactQuill value={content} onChange={setContent} />
      <button onClick={handleSave}>Speichern</button>
    </div>
  );
}

export default PageEditor;
