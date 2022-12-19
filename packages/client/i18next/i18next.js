import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./lng/en.json";
import jp from "./lng/ja.json";

const getLocale = () => {
    const DEFAULT_LNG = "en";
    console.log({ WINDOW: typeof window })
    if (typeof window === 'undefined') return DEFAULT_LNG;
    // Perform localStorage action
    return localStorage.getItem("lng") || DEFAULT_LNG
}

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        jp: {
            translation: jp,
        },
    },
    lng: getLocale()
});

export default i18next;