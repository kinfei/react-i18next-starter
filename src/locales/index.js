import i18next from "i18next";

import en from "./en.json";
import zh from "./zh.json";

import constants from "../constants";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: constants.language.en, // language to use
  resources: {
    en: {
      translation: en, // 'translation' is our custom namespace
    },
    zh: {
      translation: zh,
    },
  },
});

export default i18next;
