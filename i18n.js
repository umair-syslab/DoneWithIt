import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationBM from './locales/bm/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    bm: {
        translation: translationBM
    }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    fallbackLng: 'en'
  });


export default i18n;