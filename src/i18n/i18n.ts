import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import translationEN from "./locales/en.json";
// import translationFR from "./locales/fr.json";
import en from "./locales/en";
import fr from "./locales/fr";

// const resources = {
//   fr,
//   en,
// };

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: ["en", "fr"],
  resources,
  lng: "fr",
  interpolation: {
    escapeValue: false,
  },
  react: {
    bindI18n: "loaded languageChanged",
    bindI18nStore: "added",
    useSuspense: true,
  },
});

export default i18n;
