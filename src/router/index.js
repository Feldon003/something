import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '../views/AboutView.vue'
import DigitalJourney from '@/views/DigitalJourney.vue'
import CircularWorldVue from '@/views/CircularWorld.vue'
import ElectricFutureVue from '@/views/ElectricFuture.vue'
import freudeVue from '@/views/freude.vue'
import ModelsVue from '@/views/Models.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutViewVue
    },
    {
      path: '/digitaljourney',
      name: 'Digital Journey',
      component: DigitalJourney
    },
    {
      path: '/circularworld',
      name: 'Circular World',
      component: CircularWorldVue
    },
    {
      path: '/electricfuture',
      name: 'Electric Future',
      component: ElectricFutureVue
    },
    {
      path: '/freude',
      name: 'Freude',
      component: freudeVue
    },
    {
      path: '/models',
      name: 'Models',
      component: ModelsVue
    }
  ]
})

export default router
