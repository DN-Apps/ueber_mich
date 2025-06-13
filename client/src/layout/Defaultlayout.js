import React, { useState, useEffect } from 'react';
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
  const [showLanguagesMobile, setShowLanguagesMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const languageList = (
    <ul className={`languages-list ${isMobile ? '' : 'languages-horizontal'}`}>
      <li className="language-item">
        <img src="https://flagcdn.com/de.svg" alt="Deutsch" className="language-flag" />
        <span className="language-name">Deutsch</span>
      </li>
      <li className="language-item">
        <img src="https://flagcdn.com/gb.svg" alt="Englisch" className="language-flag" />
        <span className="language-name">Englisch</span>
      </li>
      <li className="language-item">
        <img src="https://flagcdn.com/rs.svg" alt="Serbisch" className="language-flag" />
        <span className="language-name">Serbisch</span>
      </li>
      <li className="language-item">
        <img src="https://flagcdn.com/fr.svg" alt="Französisch" className="language-flag" />
        <span className="language-name">Französisch</span>
      </li>
    </ul>
  );

  return (
    <div className="page-container animated-background">
      <header className="header">
        {!isMobile && (
          <div className="languages-fixed">
            {languageList}
          </div>
        )}

        <div className="header-inner">
          <div className="portrait-wrapper">
            <Portrait />
          </div>
          <section className="intro-text">
            <p className="portfolio-label">Mein Portfolio</p>
            <h1 className="developer-name">Daniel Nedic</h1>
            <p className="role-description">Fullstack Software-Entwickler</p>
          </section>
        </div>

        {isMobile && (
          <div className="languages-mobile-dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => setShowLanguagesMobile(!showLanguagesMobile)}
            >
              Sprache(n) ▼
            </button>
            {showLanguagesMobile && languageList}
          </div>
        )}
      </header>

      <div className="menu-horizontal">
        <div className="menu-item" onClick={() => setActiveSection('career')}>Werdegang</div>
        <div className="menu-item" onClick={() => setActiveSection('tech-skills')}>Tech-Skills</div>
        <div className="menu-item" onClick={() => setActiveSection('other-skills')}>Sonstige Fähigkeiten</div>
        <div className="menu-item" onClick={() => setActiveSection('languages')}>Sprachen</div>
      </div>

      <main className="content">
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
