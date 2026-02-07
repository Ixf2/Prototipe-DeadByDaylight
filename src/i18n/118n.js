
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'es',
        resources: {
            es: {
                translation: {
                    welcome: "Bienvenido a Prototipo Dead by Daylight",
                    news_title: "Últimas Noticias",
                    Article1_title: "Nuevo DLC Disponible",
                    Article1_desc: "COLECCIÓN STRANGER THINGS CAPÍTULO 2",
                    Article2_title: "Nuevos Complementos",
                    Article2_desc: "NUEVAS SKINS DE COMPLEMENTOS"
                }
            },
            en: {
                translation: {
                    welcome: "Welcome to Prototype Dead by Daylight",
                    news_title: "Latest News",
                    Article1_title: "New DLC Available",
                    Article1_desc: "STRANGER THINGS CHAPTER 2 COLLECTION",
                    Article2_title: "New Complements",
                    Article2_desc: "NEW COMPLEMENTS SKINS"
                }
            }
        }
    });

export default i18n;