import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Import the router

createApp(App)
  .use(router)  // Add the router to your Vue app
  .mount('#app');
