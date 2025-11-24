import React from 'react';
import { useTranslation } from 'react-i18next';
import './ImpressumModal.css';

/**
 * ImpressumModal
 *
 * Dieses Modal zeigt die gesetzlich vorgeschriebenen Impressumsangaben.
 * Es wird über die Prop `onClose` geschlossen.
 *
 * Klickt der Nutzer auf den halbtransparenten Hintergrund:
 *  → Modal wird geschlossen.
 *
 * Klickt der Nutzer INS Modal:
 *  → stopPropagation() verhindert Schließen.
 */
const ImpressumModal = ({ onClose }) => {
    const { t } = useTranslation(); // Zugriff auf Übersetzungen

    return (
        <div className="imprint-backdrop" onClick={onClose}>
            {/* Klicks im Inneren dürfen das Schließen NICHT auslösen */}
            <div className="imprint-modal" onClick={e => e.stopPropagation()}>

                {/* Überschrift */}
                <h3>{t('imprintTitle')}</h3>

                {/* Impressumsangaben – statisch, aber mit i18n Labels */}
                <p><strong>{t('name')}:</strong> Daniel Nedic</p>
                <p><strong>{t('address')}:</strong> Kirchgasse 8, 74831 Gundelsheim</p>
                <p><strong>{t('email')}:</strong> daniel-nedic@hotmail.de</p>
                <p><strong>{t('responsible')}:</strong> Daniel Nedic</p>

                {/* Schließen-Button */}
                <button onClick={onClose}>{t('close')}</button>
            </div>
        </div>
    );
};

export default ImpressumModal;
