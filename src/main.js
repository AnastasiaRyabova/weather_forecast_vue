import { createApp } from 'vue'
import App from './App'
import router from './i18n';

const app = createApp(App);
app
    .use(router)
    .mount('#app')