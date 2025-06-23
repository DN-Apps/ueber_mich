import React from 'react';
import { useTranslation } from 'react-i18next';
import './PrivacyNotice.css';

const PrivacyNotice = ({ onAccept }) => {
    const { t } = useTranslation();

    return (
        <div className="cookie-consent-backdrop">
            <div className="cookie-consent-modal">
                <h3>{t('privacyTitle')}</h3>
                <p>{t('privacyText')}</p>
                <button onClick={onAccept}>{t('understood')}</button>
            </div>
        </div>
    );
};

export default PrivacyNotice;
