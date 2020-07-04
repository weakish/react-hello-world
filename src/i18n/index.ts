import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

const resources: Resource = {
    en: {
        translation: {
            "world": "World",
            "hello": "<0>Hello， {{name}}</0>"
        }
    },
    zh: {
        translation: {
            "world": "世界",
            "hello": "<0>你好， {{name}}</0>"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "zh",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
