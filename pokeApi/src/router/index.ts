import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TesteViewVue from '@/views/TesteView.vue'
import NotFoundViewVue from '../views/NotFoundView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pokemon/:name',
      name: 'pokemon',
      component: TesteViewVue
    },
    {
      path: '/404',
      name: 'notFound',
      component: NotFoundViewVue
    }
  ]
})

