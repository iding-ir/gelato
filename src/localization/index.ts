import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enTranslations } from "./languages/en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
