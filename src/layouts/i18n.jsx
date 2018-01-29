// @flow

import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';


const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: 'urlDetector',
  lookup: () => (window.location.pathname.startsWith('/de') ? 'de' : 'en'),
});

i18n
  .use(Backend)
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    saveMissing: true,
    detection: { order: ['urlDetector', 'querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'] },

    // have a common namespace used around the full app
    ns: ['translation'],
    defaultNS: 'translation',

    debug: true,

    interpolation: { escapeValue: false },

    react: { wait: true },
  });

export default i18n;
