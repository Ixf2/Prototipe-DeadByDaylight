
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
                    Article2_desc: "NUEVAS SKINS DE COMPLEMENTOS",
                    nav_home: "Inicio",
                    nav_killers: "Asesinos",
                    nav_survivors: "Supervivientes",
                    footer_text: " © 2026 Prototipo Dead by Daylight. Todos los derechos reservados.",
                    footer_legal: "POLÍTICA DE PRIVACIDAD Y COOKIES",
                    footer_terms: "TÉRMINOS Y CONDICIONES DE VENTA"
                }
            },
            en: {
                translation: {
                    welcome: "Welcome to Prototype Dead by Daylight",
                    news_title: "Latest News",
                    Article1_title: "New DLC Available",
                    Article1_desc: "STRANGER THINGS CHAPTER 2 COLLECTION",
                    Article2_title: "New Complements",
                    Article2_desc: "NEW COMPLEMENTS SKINS",
                    nav_home: "Home",
                    nav_killers: "Killers",
                    nav_survivors: "Survivors",
                    footer_text: " © 2026 Prototipe Dead by Daylight. All rights reserved.",
                    footer_legal: "PRIVACY AND COOKIES POLICY",
                    footer_terms: "TERMS AND CONDITIONS OF SALE"
                }
            }
        }
    });

export default i18n;