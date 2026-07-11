import '@/assets/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useTheme } from '@/stores/theme.js';
import '@fontsource/inter';
import App from './App.vue';
import router from './router';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
// should install pinia before the store function
const app = createApp(App);
app.use(createPinia());
const theme = useTheme();
theme.initTheme();
app.provide('theme', theme);
app.use(router);
app.use(Toast);
app.mount('#app');
