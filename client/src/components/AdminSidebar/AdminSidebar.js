import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css'

function AdminSidebar() {
  return (
    <nav style={{ width: '200px', background: '#f4f4f4', padding: '20px' }} className='adm-sidebar'>
      <h2>Admin-Bereich</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/about-me">About me</Link>
        </li>
        <li>
          <Link to="/admin/career">Career</Link>
        </li>
        <li>
          <Link to="/admin/tech-skills">Tech-skills</Link>
        </li>
        <li>
          <Link to="/admin/other-skills">Other-skills</Link>
        </li>
        <li>
          <Link to="/admin/languages">Sprachen</Link>
        </li>
        <li>
          <Link to="/admin/edit-contact">Contact</Link>
        </li>
        <li>
          <Link to="/admin/usermanagement">Usermanagement</Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdminSidebar;
