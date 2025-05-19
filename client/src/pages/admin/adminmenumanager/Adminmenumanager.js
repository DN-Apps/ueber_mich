import React, { useState, useEffect } from 'react';
import './Adminmenumanager.css';

function MenuManager({ selectedItem, refreshMenu }) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (selectedItem) {
      setName(selectedItem.name);
      setUrl(selectedItem.url);
    } else {
      setName('');
      setUrl('');
    }
  }, [selectedItem]);

  const handleAdd = async () => {
    const pageId = name.toLowerCase().replace(/\s+/g, '-') + '-page'; // Erstellen einer eindeutigen ID
  
    try {
      const response = await fetch('http://localhost:5000/api/menu/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, url: `/${pageId}`, pageId }),
      });
  
      if (response.ok) {
        alert('Menüpunkt hinzugefügt');
        refreshMenu(); // Aktualisiert die Sidebar
      } else {
        alert('Fehler beim Hinzufügen des Menüpunktes');
      }
    } catch (error) {
      console.error('Fehler:', error);
    }
  };
  

  const handleEdit = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/menu/edit/${selectedItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, url }),
      });

      if (response.ok) {
        alert('Menüpunkt bearbeitet');
        refreshMenu();
      } else {
        alert('Fehler beim Bearbeiten des Menüpunktes');
      }
    } catch (error) {
      console.error('Fehler:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/menu/delete/${selectedItem.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Menüpunkt gelöscht');
        refreshMenu();
      } else {
        alert('Fehler beim Löschen des Menüpunktes');
      }
    } catch (error) {
      console.error('Fehler:', error);
    }
  };

  return (
    <div className="menu-manager">
      <h3>Menüpunkt verwalten</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleAdd}>Hinzufügen</button>
      <button onClick={handleEdit} disabled={!selectedItem}>Bearbeiten</button>
      <button onClick={handleDelete} disabled={!selectedItem}>Löschen</button>
    </div>
  );
}

export default MenuManager;
