import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar/AdminSidebar'

function AdminLayout() {
  return (
    <div>
      <header>
        <h1>Adminbereich</h1>
        <AdminSidebar></AdminSidebar>
      </header>
      <main>
        <Outlet /> {/* Platzhalter für untergeordnete Routen */}
      </main>
    </div>
  );
}

export default AdminLayout;
