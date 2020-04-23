import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/zone',
    name: 'ZoneSurfaceReport',
    component: () =>
      import(/* webpackChunkName: "zoneSurfaceReport" */ '../views/ZoneSurfaceReport.vue')
  },
  {
    path: '/buoy',
    name: 'SingleBuoyReport',
    component: () =>
      import(/* webpackChunkName: "singleBuoyReport" */ '../views/SingleBuoyReport.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () =>
      import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
