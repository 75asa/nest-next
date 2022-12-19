import i18next, { InitOptions } from "i18next";
import LanguageDetector, {
  DetectorOptions,
} from "i18next-browser-languagedetector";
import { defaultLanguage, languages } from "./i18n.config";

const locales = Object.assign(
  {},
  ...Object.keys(languages).map((index: string) => {
    const indexNumber = parseInt(index);
    const key = languages[indexNumber];
    if (!key) return;
    return {
      [key]: {
        translations: require("../public/locales/" +
          languages[indexNumber] +
          "/common.json"),
      },
    };
  })
);

const detection: DetectorOptions = {
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "sessionStorage",
    "navigator",
    "htmlTag",
    "path",
    "subdomain",
  ],
  lookupCookie: "lng",
  lookupLocalStorage: "lng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"],
  cookieOptions: { path: "/", sameSite: "strict" },
};

const options: InitOptions = {
  detection: detection,
  fallbackLng: defaultLanguage,
  resources: locales,
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
};

i18next.use(LanguageDetector).init(options);

export default i18next;
