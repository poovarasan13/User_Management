import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    'General': 'General',
                    'Dashboards,Widgets': 'Dashboards,Widgets',
                    'Dashboard': 'Dashboard',
                    'Default': 'Default',
                    'Ecommerce': 'Ecommerce',
                    'Widgets': 'Widgets',
                    'Chart': 'Chart',
                    'Applications': 'Applications',
                    'Ready to use Apps': 'Ready to use Apps'
                }
            },
            cn: {
                translations: {
                    'General': '一般',
                    'Dashboards': '仪表板',
                    'Widgets': '小部件',
                    'Dashboard': '仪表板',
                    'Default': '默认',
                    'Ecommerce': '电子商务',
                    'Chart': '图表',
                    'Applications': '应用领域',
                    'Ready to use Apps': '准备使用的应用程序'
                }
            },
            ae: {
                translations: {
                    'General': 'جنرال لواء',
                    'Dashboards': 'لوحات القيادة والحاجيات',
                    'Widgets': 'لوحات القيادة',
                    'Dashboard': 'لوحة القيادة',
                    'Default': 'إفتراضي',
                    'Ecommerce': 'التجارة الإلكترونية',
                    'Chart': 'مخطط',
                    'Applications': 'التطبيقات',
                    'Ready to use Apps': 'جاهز لاستخدام التطبيقات'
                }
            },
            du: {
                translations: {
                    'General': 'Algemeen',
                    'Dashboards': 'Dashboards',
                    'Dashboard': 'Dashboard',
                    'Default': 'Standaard',
                    'Ecommerce': 'E-commerce',
                    'Widgets': 'Widgets',
                    'Chart': 'Grafiek',
                    'Applications': 'Toepassingen',
                    'Ready to use Apps': 'Klaar om apps te gebruiken'
                }
            },
            es: {
                translations: {
                    'General': 'General',
                    'Dashboards,Widgets': 'Cuadros de mando, widgets',
                    'Dashboard': 'Tablero',
                    'Default': 'Defecto',
                    'Ecommerce': 'Comercio electrónico',
                    'Widgets': 'Widgets',
                    'Chart': 'Gráfico',
                    'Applications': 'Aplicaciones',
                    'Ready to use Apps': 'Gereed om programme te gebruik'
                }
            },
            fr: {
                translations: {
                    'General': 'Générale',
                    'Dashboards,Widgets': 'Tableaux de bord, widgets',
                    'Dashboard': 'Tableau de bord',
                    'Default': 'Défaut',
                    'Ecommerce': 'Commerce électronique',
                    'Widgets': 'Widgets',
                    'Chart': 'Graphique',
                    'Applications': 'Applications',
                    'Ready to use Apps': `Applications prêtes à l'emploi`
                }
            },
            pt: {
                translations: {
                    'General': 'Geral',
                    'Dashboards,Widgets': 'Painéis, Widgets',
                    'Dashboard': 'painel de controle',
                    'Default': 'Padrão',
                    'Ecommerce': 'Comércio eletrônico',
                    'Widgets': 'Widgets',
                    'Chart': 'Gráfico',
                    'Applications': 'Formulários',
                    'Ready to use Apps': 'Aplicativos prontos para usar'
                }
            }
        },
        fallbackLng: 'en',
        debug: false,

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
