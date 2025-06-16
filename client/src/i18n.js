// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Deine Sprachdateien importieren
import translationDE from './locales/de/translation.json';
import translationEN from './locales/en/translation.json';
import translationSR from './locales/sr/translation.json';
import translationFR from './locales/fr/translation.json';

const resources = {
    de: { translation: translationDE },
    en: { translation: translationEN },
    sr: { translation: translationSR },
    fr: { translation: translationFR },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'de', // Standardsprache
        fallbackLng: 'de',
        interpolation: {
            escapeValue: false, // React schützt automatisch
        },
    });

export default i18n;
