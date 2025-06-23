import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AboutMe from '../components/AboutMe/AboutMe';
import Career from '../components/Career/Career';
import TechSkills from '../components/TechSkills/TechSkills';
import OtherSkills from '../components/OtherSkills/OtherSkills';
import Portrait from '../components/Portrait/Portrait';
import Languages from '../components/languages/Languages';
import PortfolioDrawer from '../components/PortfolioDrawer/PortfolioDrawer';
import PrivatPortfolioDrawer from '../components/PrivatPortfolioDrawer/PrivatPortfolioDrawer';
import Socials from '../components/Socials/Socials';
import Certs from '../components/Certs/Certs';
import PrivacyNotice from '../components/PrivacyNotice/PrivacyNotice';
import ImpressumModal from '../components/ImpressumModal/ImpressumModal';
import './DefaultLayout.css';

function Defaultlayout() {
  const [activeSection, setActiveSection] = useState('about-me');
  const [showLanguagesMobile, setShowLanguagesMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentLanguage, setCurrentLanguage] = useState('de');
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);
  const { i18n, t } = useTranslation();

  // Datenschutz
  useEffect(() => {
    const accepted = localStorage.getItem('privacyAccepted');
    if (!accepted) {
      setShowPrivacy(true);
    }
  }, []);

  const handleAcceptPrivacy = () => {
    localStorage.setItem('privacyAccepted', 'true');
    setShowPrivacy(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    setShowLanguagesMobile(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;
      setIsMobile(
        window.innerWidth <= 768 ||
        (window.innerWidth <= 1024 && !isPortrait)
      );
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getLanguageLabel = (lng) => {
    switch (lng) {
      case 'de': return { label: 'Deutsch', flag: 'https://flagcdn.com/de.svg' };
      case 'en': return { label: 'English', flag: 'https://flagcdn.com/gb.svg' };
      case 'sr': return { label: 'Српски', flag: 'https://flagcdn.com/rs.svg' };
      case 'fr': return { label: 'Français', flag: 'https://flagcdn.com/fr.svg' };
      default: return { label: 'Sprache', flag: '' };
    }
  };

  const languageList = (
    <ul className={`languages-list ${isMobile ? '' : 'languages-horizontal'}`}>
      {['de', 'en', 'sr', 'fr'].map((lng) => {
        const { label, flag } = getLanguageLabel(lng);
        const isSelected = currentLanguage === lng;
        return (
          <li
            key={lng}
            className={`language-item ${isSelected ? 'selected-language' : ''}`}
            onClick={() => changeLanguage(lng)}
          >
            <img src={flag} alt={label} className="language-flag" />
            <span className="language-name">{label}</span>
          </li>
        );
      })}
    </ul>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'about-me': return <AboutMe />;
      case 'career': return <Career />;
      case 'tech-skills': return <TechSkills />;
      case 'other-skills': return <OtherSkills />;
      case 'languages': return <Languages />;
      default: return <AboutMe />;
    }
  };

  return (
    <div className="page-container animated-background">
      {showPrivacy && <PrivacyNotice onAccept={handleAcceptPrivacy} />}
      {showImpressum && <ImpressumModal onClose={() => setShowImpressum(false)} />}

      <header className="header">
        <Socials />
        <Certs />
        {!isMobile && <div className="languages-fixed">{languageList}</div>}

        <div className="header-inner">
          <div className="portrait-wrapper"><Portrait /></div>
          <section className="intro-text">
            <p className="portfolio-label">{t('layout.portfolioLabel')}</p>
            <h1 className="developer-name">Daniel Nedic</h1>
            <p className="role-description">{t('layout.role')}</p>
          </section>
        </div>

        {isMobile && (
          <div className="languages-mobile-dropdown">
            <button className="dropdown-toggle" onClick={() => setShowLanguagesMobile(!showLanguagesMobile)}>
              <img
                src={getLanguageLabel(currentLanguage).flag}
                alt={getLanguageLabel(currentLanguage).label}
                className="language-flag"
              />
              <span className="language-name">{getLanguageLabel(currentLanguage).label}</span>
              <span className="dropdown-arrow">▼</span>
            </button>
            {showLanguagesMobile && languageList}
          </div>
        )}
      </header>

      <div className="menu-horizontal">
        <div className="menu-item" onClick={() => setActiveSection('career')}>
          {t('menu.career')}
        </div>
        <div className="menu-item" onClick={() => setActiveSection('tech-skills')}>
          {t('menu.techSkills')}
        </div>
        <div className="menu-item" onClick={() => setActiveSection('other-skills')}>
          {t('menu.otherSkills')}
        </div>
        <div className="menu-item" onClick={() => setActiveSection('languages')}>
          {t('menu.languages')}
        </div>
      </div>

      <main className="content">
        <section id="dynamic-content">{renderContent()}</section>
        <PortfolioDrawer />
        <PrivatPortfolioDrawer />
      </main>

      <footer className="footer">
        <p>© 2025 Daniel Nedic | <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => setShowImpressum(true)}>Impressum</span></p>
      </footer>
    </div>
  );
}

export default Defaultlayout;
