import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Catalogo from '@/pages/Catalogo.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      component: Catalogo,
    }
  ],
})

export default router
