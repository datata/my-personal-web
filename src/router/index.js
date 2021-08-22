import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import CvApp from '../views/CvApp.vue'
import CoinGecko from '../views/CoinGecko.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },  
  // {
  //   path: '/cv-app',
  //   name: 'CvApp',
  //   component: CvApp
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/coingecko',
    name: 'CoinGecko',
    component: CoinGecko
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
