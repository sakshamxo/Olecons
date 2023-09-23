import i18n from "i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    backend:{
        //translation
        loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",

    },
    //default language
    lng: 'en',
    //fallback (if the desired language is not loaded)
    fallbackLng: "en",
    debug : false,
    //namespace
    ns: ["common","home","about"],
    interpolation:{
        escapeValue: false,
        formatSeparator: ",",
    },
    react:{
        wait : true,
    },
})
export default i18n;