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


  
  // js
  { path: '/learnJs', name: 'learnJs', component: () => import('../views/learnJs') },
  { path: '/learnJs/1_1', name: 'tryCatch用法', component: () => import('../views/learnJs/pages/1_1.vue')},
  { path: '/learnJs/1_2', name: 'promise', component: () => import('../views/learnJs/pages/1_2.vue')},
  { path: '/learnJs/2_1', name: 'prototype原型', component: () => import('../views/learnJs/pages/2_1.vue')},
  { path: '/learnJs/2_2', name: 'eventLoop', component: () => import('../views/learnJs/pages/2_2.vue')},
  { path: '/learnJs/2_3', name: '继承', component: () => import('../views/learnJs/pages/2_3.vue')},
  { path: '/learnJs/2_4', name: 'max和min', component: () => import('../views/learnJs/pages/2_4.vue')},
  { path: '/learnJs/3_1', name: 'canvas', component: () => import('../views/learnJs/pages/3_1.vue')},
  { path: '/learnJs/3_2', name: 'canvas自由绘图', component: () => import('../views/learnJs/pages/3_2.vue')},
  { path: '/learnJs/4_1', name: '算法algorithm', component: () => import('../views/learnJs/pages/4_1.vue')},
  // es6
  { path: '/learnES6', name: 'learnES6', component: () => import(/* webpackChunkName: "about" */ '../views/learnES6')},
  { path: '/learnES6/1_1', name: 'class用法', component: () => import('../views/learnES6/pages/1_1.vue')},
  { path: '/learnES6/1_2', name: 'class用法', component: () => import('../views/learnES6/pages/1_2.vue')},



  { path: '/learnElement', name: 'learnElement', component: () => import(/* webpackChunkName: "about" */ '../views/learnElement')},
  { path: '/learnElement/1_1', name: 'class用法', component: () => import('../views/learnElement/pages/1_1.vue')},
  { path: '/learnElement/1_2', name: 'class用法', component: () => import('../views/learnElement/pages/1_2.vue')}
]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
export default router
