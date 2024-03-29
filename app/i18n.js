// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Welcome": "Welcome",
          // Autres traductions en anglais...
        }
      },
      fr: {
        translation: {
          "Welcome": "Bienvenue",
          // Autres traductions en français...
        }
      }
    },
    lng: 'en', // Langue par défaut
    fallbackLng: 'en', // Langue de repli
    interpolation: {
      escapeValue: false // Ne pas échapper les valeurs
    }
  });

export default i18n;
