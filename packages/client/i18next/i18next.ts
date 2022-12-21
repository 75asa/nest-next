import i18next, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import Backend from "i18next-http-backend";
// import HttpBackend from "i18next-http-backend";
// import resourcesToBackend from "i18next-resources-to-backend";

import en from "./lng/en.json";
import jp from "./lng/ja.json";

const getLocale = () => {
  const DEFAULT_LNG = "en";
  // console.log({ WINDOW: typeof window })
  if (typeof window === "undefined") return DEFAULT_LNG;
  // Perform localStorage action
  return localStorage.getItem("lng") || DEFAULT_LNG;
};

const option: InitOptions = {
  resources: {
    en: {
      translation: en,
    },
    jp: {
      translation: jp,
    },
  },
  lng: getLocale(),
};

// i18next.use(Backend).use(LanguageDetector).use(initReactI18next).init(option);
i18next.use(initReactI18next).init(option);

export default i18next;
