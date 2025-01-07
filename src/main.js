import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import App from './App.vue'
import router from './router'
import es from './idiomas/es'
import en from './idiomas/en'

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('idioma') || 'es',
    fallbackLocale: 'en',
    messages: {
        es,
        en,
    },
});

const app = createApp(App);

app.use(i18n);
app.use(router);
app.mount('#app');
