// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../locales/en/translation.json';
import translationPT from '../locales/pt/translation.json';

// Configuração dos recursos de tradução
const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
};

i18n
  .use(initReactI18next) // Passando a instância do i18n para o react-i18next
  .init({
    resources,
    lng: 'en', // Idioma padrão
    fallbackLng: 'en', // Idioma de fallback
    interpolation: {
      escapeValue: false, // React já faz a escapagem dos valores
    },
  });

export default i18n;
