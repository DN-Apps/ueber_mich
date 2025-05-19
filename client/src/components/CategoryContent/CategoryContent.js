import React, { useEffect, useState } from 'react';

function CategoryContent({ category, contentUpdateKey }) {
  const [contentList, setContentList] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');

  const fetchContentByCategory = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/content/category/${category}`);
      if (!response.ok) {
        throw new Error('Fehler beim Abrufen der Inhalte');
      }
      const data = await response.json();
      setContentList(data);
    } catch (error) {
      console.error(error);
      setStatusMessage(`❌ Fehler: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchContentByCategory();
  }, [category, contentUpdateKey]); // Neu laden, wenn die Kategorie oder die Callback-Prop sich ändert

  return (
    <div>
      
      {statusMessage && <p>{statusMessage}</p>}
      {contentList.length > 0 ? (
        contentList.map((item) => (
          <div key={item.id} dangerouslySetInnerHTML={{ __html: item.html_content }} />
        ))
      ) : (
        <p>Keine Inhalte verfügbar.</p>
      )}
    </div>
  );
}

export default CategoryContent;
