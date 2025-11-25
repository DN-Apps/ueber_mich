import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Inhalts-Sektionen
import Timeline from "../components/Timeline/Timeline";
import TechSkills from "../components/TechSkills/TechSkills";
import OtherSkills from "../components/OtherSkills/OtherSkills";
import Portrait from "../components/Portrait/Portrait";
import Languages from "../components/languages/Languages";

// Portfolio-Bereiche
import PortfolioDrawer from "../components/PortfolioDrawer/PortfolioDrawer";
import PrivatPortfolioDrawer from "../components/PrivatPortfolioDrawer/PrivatPortfolioDrawer";

// Header-Elemente
import Socials from "../components/Socials/Socials";
import Certs from "../components/Certs/Certs";

// Rechtliche Hinweise
import PrivacyNotice from "../components/PrivacyNotice/PrivacyNotice";
import ImpressumModal from "../components/ImpressumModal/ImpressumModal";

import "./DefaultLayout.css";

function Defaultlayout() {
  // Aktive Hauptsektion unter dem Header
  const [activeSection, setActiveSection] = useState("career");

  // Mobile Dropdown Status für Sprachen
  const [showLanguagesMobile, setShowLanguagesMobile] = useState(false);

  // Mobile Erkennung – wird durch die Fenstergröße aktualisiert
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Aktuell ausgewählte Sprache
  const [currentLanguage, setCurrentLanguage] = useState("de");

  // Anzeigen der Datenschutzmitteilung
  const [showPrivacy, setShowPrivacy] = useState(false);

  // Anzeigen des Impressums
  const [showImpressum, setShowImpressum] = useState(false);

  // i18next Hook
  const { i18n, t } = useTranslation();

  // Aktiver Tab im Portfolio-Bereich (Projekte / Privat)
  const [activePortfolioTab, setActivePortfolioTab] = useState("projects");

  /**
   * Prüft beim Laden der Seite, ob der Nutzer der Datenschutzerklärung
   * bereits zugestimmt hat. Falls nicht → Hinweis anzeigen.
   */
  useEffect(() => {
    const accepted = localStorage.getItem("privacyAccepted");
    if (!accepted) {
      setShowPrivacy(true);
    }
  }, []);

  // Benutzer bestätigt die Datenschutzerklärung
  const handleAcceptPrivacy = () => {
    localStorage.setItem("privacyAccepted", "true");
    setShowPrivacy(false);
  };

  /**
   * Ändert die aktuelle Sprache (i18next)
   * und schließt das mobile Sprach-Dropdown.
   */
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    setShowLanguagesMobile(false);
  };

  /**
   * Erkennt dynamisch, ob das Gerät mobil ist.
   * Zusätzlich wird Orientation berücksichtigt,
   * damit Landscape-Tablets korrekt behandelt werden.
   */
  useEffect(() => {
    const handleResize = () => {
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;

      setIsMobile(
        window.innerWidth <= 768 ||
        (window.innerWidth <= 1024 && !isPortrait)
      );
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /**
   * Liefert Label & Flagge einer Sprache zurück.
   * Wird in der Sprachliste genutzt.
   */
  const getLanguageLabel = (lng) => {
    switch (lng) {
      case "de":
        return { label: "Deutsch", flag: "https://flagcdn.com/de.svg" };
      case "en":
        return { label: "English", flag: "https://flagcdn.com/gb.svg" };
      case "sr":
        return { label: "Srpski", flag: "https://flagcdn.com/rs.svg" };
      case "fr":
        return { label: "Français", flag: "https://flagcdn.com/fr.svg" };
      default:
        return { label: "Sprache", flag: "" };
    }
  };

  /**
   * Die horizontale oder vertikale Sprachliste
   * (abhängig von Desktop / Mobile).
   */
  const languageList = (
    <ul className={`languages-list ${isMobile ? "" : "languages-horizontal"}`}>
      {["de", "en", "sr", "fr"].map((lng) => {
        const { label, flag } = getLanguageLabel(lng);
        const isSelected = currentLanguage === lng;

        return (
          <li
            key={lng}
            className={`language-item ${isSelected ? "selected-language" : ""
              }`}
            onClick={() => changeLanguage(lng)}
          >
            <img src={flag} alt={label} className="language-flag" />
            <span className="language-name">{label}</span>
          </li>
        );
      })}
    </ul>
  );

  /**
   * Dynamischer Render für die Unterseiten:
   * Werdegang, Tech-Skills, Sonstige Skills, Sprachen usw.
   */
  const renderContent = () => {
    switch (activeSection) {
      case "career":
        return <Timeline />;
      case "tech-skills":
        return <TechSkills />;
      case "other-skills":
        return <OtherSkills />;
      case "languages":
        return <Languages />;
      default:
        return <Timeline />;
    }
  };

  // Texte aus i18next – als Arrays für Listen
  const experienceList = t("layout.summary.experience", { returnObjects: true });
  const bringList = t("layout.summary.bring", { returnObjects: true });
  const focusList = t("layout.summary.focus", { returnObjects: true });

  return (
    <div className="page-container animated-background">
      {/* Datenschutz-Hinweis */}
      {showPrivacy && <PrivacyNotice onAccept={handleAcceptPrivacy} />}

      {/* Impressum-Modal */}
      {showImpressum && (
        <ImpressumModal onClose={() => setShowImpressum(false)} />
      )}

      <div className="top-wrapper">
        <div className="top-area">
          {/* Social-Media Icons */}
          <Socials />

          {/* Zertifikate (wie Badges) */}
          <Certs />

          {/* Sprache – Desktop rechts oben */}
          {!isMobile && <div className="languages-fixed">{languageList}</div>}
        </div>

        {/* HEADER-BEREICH */}
        <header className="header">
          <div className="header-inner">
            {/* Erste Zeile: Portrait + Intro */}
            <div className="intro-row">
              <div className="portrait-wrapper">
                <Portrait />
              </div>

              {/* Begrüßungstext */}
              <section className="intro-text">
                <p className="portfolio-label">{t("layout.portfolioLabel")}</p>
                <h1 className="developer-name">Daniel Nedic</h1>
                <p className="role-description">{t("layout.role")}</p>
              </section>
            </div>

            {/* Profil-Zusammenfassung unter Intro */}
            <section className="profile-summary">
              <h2 className="profile-summary-title">
                {t("layout.summary.headline")}
              </h2>
              <ul className="profile-summary-list">
                {experienceList.map((item, idx) => (
                  <li key={`exp-${idx}`}>{item}</li>
                ))}
              </ul>

              <h3 className="profile-summary-subtitle">
                {t("layout.summary.bringHeadline")}
              </h3>
              <ul className="profile-summary-list">
                {bringList.map((item, idx) => (
                  <li key={`bring-${idx}`}>{item}</li>
                ))}
              </ul>

              <h3 className="profile-summary-subtitle">
                {t("layout.summary.focusHeadline")}
              </h3>
              <ul className="profile-summary-list">
                {focusList.map((item, idx) => (
                  <li key={`focus-${idx}`}>{item}</li>
                ))}
              </ul>

              <p className="profile-summary-open">
                {t("layout.summary.open")}
              </p>
            </section>
          </div>

          {/* Portfolio-Bereich (Tabs + Inhalte) */}
          <div className="portfolio-content-selection">
            <div className="portfolio-tabs">
              <button
                className={`portfolio-tab ${activePortfolioTab === "projects" ? "active" : ""
                  }`}
                onClick={() => setActivePortfolioTab("projects")}
              >
                {t("portfolio.button")}
              </button>

              <button
                className={`portfolio-tab ${activePortfolioTab === "private" ? "active" : ""
                  }`}
                onClick={() => setActivePortfolioTab("private")}
              >
                {t("privat.button")}
              </button>
            </div>

            <div className="portfolio-tab-content">
              {activePortfolioTab === "projects" ? (
                // ALT:
                // <PortfolioDrawer />
                // NEU:
                <PortfolioDrawer isMobile={isMobile} />
              ) : (
                // ALT:
                // <PrivatPortfolioDrawer />
                // NEU:
                <PrivatPortfolioDrawer isMobile={isMobile} />
              )}
            </div>
          </div>

          {/* Sprach-Dropdown für Mobile */}
          {isMobile && (
            <div className="languages-mobile-dropdown">
              <button
                className="dropdown-toggle"
                onClick={() =>
                  setShowLanguagesMobile(!showLanguagesMobile)
                }
              >
                <img
                  src={getLanguageLabel(currentLanguage).flag}
                  alt={getLanguageLabel(currentLanguage).label}
                  className="language-flag"
                />
                <span className="language-name">
                  {getLanguageLabel(currentLanguage).label}
                </span>
                <span className="dropdown-arrow">▼</span>
              </button>

              {showLanguagesMobile && languageList}
            </div>
          )}
        </header>
      </div>

      {/* Horizontales Menü – Werdegang / Skills / Sprachen */}
      <div className="menu-horizontal">
        <div className="menu-item" onClick={() => setActiveSection("career")}>
          {t("menu.career")}
        </div>
        <div className="menu-item" onClick={() => setActiveSection("tech-skills")}>
          {t("menu.techSkills")}
        </div>
        <div
          className="menu-item"
          onClick={() => setActiveSection("other-skills")}
        >
          {t("menu.otherSkills")}
        </div>
        <div className="menu-item" onClick={() => setActiveSection("languages")}>
          {t("menu.languages")}
        </div>
      </div>

      {/* Dynamischer Content unterhalb des Headers */}
      <main className="content">
        <section id="dynamic-content">{renderContent()}</section>
      </main>

      {/* Footer mit Impressum */}
      <footer className="footer">
        <p>
          © 2025 Daniel Nedic |{" "}
          <span
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => setShowImpressum(true)}
          >
            Impressum
          </span>
        </p>
      </footer>
    </div>
  );
}

export default Defaultlayout;
