/**
 * инициализация VUE приложения
 */
import { createApp } from "vue";
import App from './src/App.vue';
import Router from "./src/router/router";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:80/api/';

createApp(App)
    .use(Router)
    .mount('#app');
