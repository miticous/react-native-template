import i18n from 'i18next';
import en from './lang/en.json';
import pt from './lang/pt.json';

i18n.init({
  fallbackLng: 'pt',
  lng: 'en, pt',
  debug: true,
  resources: {
    pt,
    // es,
    en
  },
  interpolation: {
    escapeValue: false
  },
  react: {
    wait: false,
    nsMode: 'default'
  }
});

export default i18n;
