import React from 'react';
import { Link } from 'react-router-dom';

function UserSidebar() {
  return (
    <nav style={{ width: '200px', background: '#f9f9f9', padding: '20px' }}>
      <h2>Benutzer-Bereich</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <Link to="/user/profile">Profil</Link>
        </li>
        <li>
          <Link to="/user/settings">Einstellungen</Link>
        </li>
      </ul>
    </nav>
  );
}

export default UserSidebar;
