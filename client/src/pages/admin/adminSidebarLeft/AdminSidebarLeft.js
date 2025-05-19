import React, { useEffect, useState } from 'react';
import './adminSidebarLeft.css';
import Adminmenumanager from '../adminmenumanager/Adminmenumanager';

function Sidebar() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Menüpunkte laden
    fetch('http://localhost:5000/api/menu/list')
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error('Fehler beim Laden der Menüpunkte:', error));
  }, []);

  const refreshMenu = () => {
    fetch('http://localhost:5000/api/menu/list')
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error('Fehler beim Laden der Menüpunkte:', error));
  };

  return (
    <div className="sidebar">
      <h2>Admin Sidebar</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id} onClick={() => setSelectedItem(item)}>
            {item.name}
          </li>
        ))}
      </ul>
      <Adminmenumanager selectedItem={selectedItem} refreshMenu={refreshMenu} />
    </div>
  );
}

export default Sidebar;
