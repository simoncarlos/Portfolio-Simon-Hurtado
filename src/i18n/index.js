import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import es from "./locals/es.json";
import en from "./locals/en.json";
import ko from "./locals/ko.json";

const resources = {
  es: { translation: es },
  en: { translation: en },
  ko: { translation: ko }
};

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["es", "en", "ko"],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"]
    }
  });
  
export default i18next;