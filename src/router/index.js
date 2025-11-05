import { createRouter, createWebHistory } from 'vue-router';

// Correctly import components from the 'views' folder
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage  // Use the correct component here
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage  // Use the correct component here
  }
];

const router = createRouter({
  history: createWebHistory('/portfolio-new/'),
  routes
});

export default router;
