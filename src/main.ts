
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assuming you have a router instance
import { createPinia } from 'pinia';
import "@/index.css"

const app = createApp(App);
 
// Create Pinia instance and register it with Vue app before using any Pinia store
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount('#app');
