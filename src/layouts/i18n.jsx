// @flow

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

import en from '../locales/en/translation.json';
import layoutEn from '../locales/en/layout.json';
import de from '../locales/de/translation.json';
import layoutDe from '../locales/de/layout.json';

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    preload: ['de', 'en'],
    fallbackLng: 'en',
    resources: {
      de: { translation: de, layout: layoutDe },
      en: { translation: en, layout: layoutEn },
    },

    // have a common namespace used around the full app
    ns: ['translation'],
    defaultNS: 'translation',

    debug: true,

    interpolation: { escapeValue: false },

    // react: { wait: true },
  });

export default i18n;
