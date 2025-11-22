/**
 * i18n configuration
 * @file i18n.ts
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/lang/en.json';
import ar from '@/lang/ar.json';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

