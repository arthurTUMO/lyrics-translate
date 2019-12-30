import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Artists from '../views/Artists.vue'
import Songs from '../views/Songs.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import Display from '../views/Display.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/artists',
    name: 'artists',
    component: Artists
  },
  {
    path: '/songs',
    name: 'songs',
    component: Songs
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/display/:id',
    name: 'display',
    component: Display
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
