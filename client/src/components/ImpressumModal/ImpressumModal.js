import React from 'react';
import { useTranslation } from 'react-i18next';
import './ImpressumModal.css';

const ImpressumModal = ({ onClose }) => {
    const { t } = useTranslation();

    return (
        <div className="imprint-backdrop" onClick={onClose}>
            <div className="imprint-modal" onClick={e => e.stopPropagation()}>
                <h3>{t('imprintTitle')}</h3>
                <p><strong>{t('name')}:</strong> Daniel Nedic</p>
                <p><strong>{t('address')}:</strong> Kirchgasse 8, 74831 Gundelsheim</p>
                <p><strong>{t('email')}:</strong> daniel-nedic@hotmail.de</p>
                <p><strong>{t('responsible')}:</strong> Daniel Nedic</p>
                <button onClick={onClose}>{t('close')}</button>
            </div>
        </div>
    );
};

export default ImpressumModal;
