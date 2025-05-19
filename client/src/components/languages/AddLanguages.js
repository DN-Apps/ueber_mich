import React, { useState } from 'react';
import Wysiwyg from '../WysiwygEditor/WysiwygEditorWithLoad';
import CategoryContent from '../CategoryContent/CategoryContent';
import './Languages.css'

function AddLanguages() {
  const [contentUpdateKey, setContentUpdateKey] = useState(0);

  const handleContentUpdate = () => {
    setContentUpdateKey((prevKey) => prevKey + 1); // Update-Trigger erhöhen
  };

  return (
    <div>
      <h1>Languages:</h1>
      <div className='languages-components'>
      <Wysiwyg onContentUpdate={handleContentUpdate} />
      <CategoryContent category="languages" contentUpdateKey={contentUpdateKey} />

      {/* Dieser Button aktualisiert die Daten händisch, im Fall der Fälle
        <button onClick={handleContentUpdate} style={{ marginTop: '10px' }}>
            Inhalte aktualisieren
        </button>
        */}

      </div>
      

    </div>
  );
}

export default AddLanguages;
