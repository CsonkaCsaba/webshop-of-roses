import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Advices from '../views/Advices.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/advices',
      name: 'advices',
      component: Advices
    }
  ]
})

export default router
