import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Product from '../views/Product.vue'
import SinglePage from '../views/SinglePage.vue'
import Chekout from '../views/Checkout.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/Product',
    name: 'Product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
  },
  {
    path: '/singlepage',
    name: 'singlepage',
    component: () => import('../views/SinglePage.vue')
  },
  {
    path: '/checkout',
    name: 'Chekout',
    component: () => import('../views/Checkout.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
