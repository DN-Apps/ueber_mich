// Portrait.js
import React, { useState } from "react";
import "./Portrait.css";
import { useTranslation } from 'react-i18next'; // Zugriff auf Übersetzungen
import portraitLarge from "./portrait_transparent.png"; // Import des großen Portrait-Bildes

function Portrait() {
  const { t } = useTranslation(); // Zugriff auf Übersetzungen
  /**
   * isModalOpen — steuert, ob das Portrait-Modal angezeigt wird
   */
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Öffnet das Modal mit dem großen Portrait
   */
  const openModal = () => setIsModalOpen(true);

  /**
   * Schließt das Modal wieder
   */
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="portrait-container">
      {/* Kleines Vorschaubild — klickbar zum Öffnen des Modals */}
      <img
        src={portraitLarge}
        alt="Portrait"
        className="portrait-thumbnail"
        onClick={openModal}
      />

      {/* Modal wird nur angezeigt, wenn der Zustand true ist */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>

          {/* Modal-Inhalt — stopPropagation verhindert Overlay-Klick */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            {/* Großes Portrait-Bild */}
            <img
              src={portraitLarge}
              alt="Großes Portrait"
              className="portrait-large"
            />

            {/* Schließen-Button — im selben Stil wie der Cert-Modal-Button */}
            <button
              type="button"
              className="portrait-close-button"
              onClick={closeModal}
            >{/* Close button internationalisiert */}
              {t('close')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portrait;
