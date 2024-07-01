import i18next from 'i18next';
import global_en from './en/global.json';
import global_la from './la/global.json';

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: 'la',
  resources: {
    en: {
      global: global_en,
    },
    la: {
      global: global_la,
    },
  },
});