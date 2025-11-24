import React from 'react';
import { useTranslation } from 'react-i18next';
import './PrivacyNotice.css';

/**
 * PrivacyNotice
 *
 * Dieses kleine Modal erscheint, sobald der Nutzer die Seite zum ersten Mal besucht
 * und noch nicht dem Datenschutz-Hinweis zugestimmt hat.
 *
 * Es wird über die Prop `onAccept` geschlossen – der Parent (DefaultLayout)
 * speichert dann z. B. in localStorage, dass der Nutzer zugestimmt hat.
 */
const PrivacyNotice = ({ onAccept }) => {
    const { t } = useTranslation(); // Zugriff auf Übersetzungen

    return (
        <div className="cookie-consent-backdrop">
            {/* Weißes Modal mit Text und Button */}
            <div className="cookie-consent-modal">
                <h3>{t('privacyTitle')}</h3>
                <p>{t('privacyText')}</p>

                {/* Button zum Bestätigen, löst onAccept aus */}
                <button onClick={onAccept}>
                    {t('understood')}
                </button>
            </div>
        </div>
    );
};

export default PrivacyNotice;
