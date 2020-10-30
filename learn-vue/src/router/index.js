import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/page1',
    name: 'page1',
    component: () => import(/* webpackChunkName: "about" */ '../views/learnStore/page1.vue')
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import(/* webpackChunkName: "about" */ '../views/learnStore/page2.vue')
  },
  {
    path: '/learnJavascript',
    name: 'learnJavascript',
    component: () => import(/* webpackChunkName: "about" */ '../views/learnJs')
  },
  {
    path: '/learnES',
    name: 'learnES',
    component: () => import(/* webpackChunkName: "about" */ '../views/learnES')
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
