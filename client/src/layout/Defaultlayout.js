import React, { useState } from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import Career from '../components/Career/Career';
import TechSkills from '../components/TechSkills/TechSkills';
import OtherSkills from '../components/OtherSkills/OtherSkills';
import Portrait from '../components/Portrait/Portrait';
import Languages from '../components/languages/Languages';
import PortfolioDrawer from '../components/PortfolioDrawer/PortfolioDrawer';
import PrivatPortfolioDrawer from '../components/PrivatPortfolioDrawer/PrivatPortfolioDrawer';
import './DefaultLayout.css';

function Defaultlayout() {
  const [activeSection, setActiveSection] = useState('about-me');

  const renderContent = () => {
    switch (activeSection) {
      case 'about-me':
        return <AboutMe />;
      case 'career':
        return <Career />;
      case 'tech-skills':
        return <TechSkills />;
      case 'other-skills':
        return <OtherSkills />;
      case 'languages':
        return <Languages />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="page-container animated-background">
      <header className="header">
        <h1>Mein Portfolio</h1>
        <p>Fullstack Software-Entwickler</p>
      </header>

      <div className="menu">
        <div className="menu-item top-left" onClick={() => setActiveSection('career')}>
          Werdegang
        </div>
        <div className="menu-item top-right" onClick={() => setActiveSection('tech-skills')}>
          Tech-Skills
        </div>
        <div className="menu-item bottom-left" onClick={() => setActiveSection('other-skills')}>
          Sonstige Fähigkeiten
        </div>
        <div className="menu-item bottom-right" onClick={() => setActiveSection('languages')}>
          Sprachen
        </div>
      </div>

      <main className="content">
        <section id="portrait">
          <Portrait />
        </section>
        <section id="dynamic-content">{renderContent()}</section>
        <PortfolioDrawer />
        <PrivatPortfolioDrawer />
      </main>

      <footer className="footer">
        <p>© 2025 Daniel Nedic</p>
      </footer>
    </div>
  );
}

export default Defaultlayout;
