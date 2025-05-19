import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './layout/Adminlayout';
import UserLayout from './layout/Userlayout';
import UserProfile from './components/UserProfile/UserProfile';
import Defaultlayout from './layout/Defaultlayout';
import './responsive.css';
import Usermanagement from './components/Formcomponents/getUser/Usermanagement';
import AddAboutMe from './components/AboutMe/AddAboutMe';
import AddCareer from './components/Career/AddCareer';
import AddTechSkills from './components/TechSkills/AddTechSkills';
import AddOtherSkills from './components/OtherSkills/AddOtherSkills';
import AddContact from './components/Contact/AddContact';
import AddLanguages from './components/languages/AddLanguages';

function App() {
  return (
    <Routes>
      {/* Admin-Seiten */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<div>Admin-Dashboard</div>} />
        <Route path="about-me" element={<AddAboutMe />} />
        <Route path="career" element={<AddCareer />} />
        <Route path="tech-skills" element={<AddTechSkills />} />
        <Route path="other-skills" element={<AddOtherSkills />} />
        <Route path="edit-contact" element={<AddContact />} />
        <Route path="usermanagement" element={<Usermanagement />} />
        <Route path="languages" element={<AddLanguages></AddLanguages>} />
      </Route>

      {/* Standard-Layout */}
      <Route path="/" element={<Defaultlayout />} />

      {/* Benutzer-Seiten */}
      <Route path="/user" element={<UserLayout />}>
        <Route path="profile" element={<UserProfile />} />
        <Route path="settings" element={<div>Benutzereinstellungen</div>} />
      </Route>
    </Routes>
  );
}

export default App;
