import React from 'react';
import { Outlet } from 'react-router-dom';

function UserLayout() {
  return (
    <div>
      <header>
        <h1>Benutzerbereich</h1>
      </header>
      <main>
        <Outlet /> {/* Platzhalter für untergeordnete Routen */}
      </main>
    </div>
  );
}

export default UserLayout;
