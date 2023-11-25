// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import "@/index.css"

// import { useUIStore } from "@/stores/ui"

// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// const uiStore = useUIStore()

// app.use(createPinia())
// app.use(router)
// router.beforeEach((to, from, next) => {
//     // Call CLOSE_NAVIGATION_MENU() method before each route change
//     uiStore.CLOSE_NAVIGATION_MENU();
//     next();
// });
// app.mount('#app')




import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assuming you have a router instance
import { createPinia } from 'pinia';

const app = createApp(App);
import "@/index.css"

// Create Pinia instance and register it with Vue app before using any Pinia store
const pinia = createPinia();
app.use(pinia);
app.use(router);

app.mount('#app');
