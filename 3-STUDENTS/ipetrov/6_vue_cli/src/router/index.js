import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Cart from '../components/CartComp/Cart.vue'
import Checkout from '../components/CheckoutComp/Checkout.vue'
import ProductCat from '../components/ProductComp/ProductCat.vue'
import Single from '../components/ProductComp/Single.vue'
import HomePage from '../components/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [{
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
      path: 'cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: 'checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: 'productCat',
      name: 'ProductCat',
      component: ProductCat
    }, 
    {
      path: 'single',
      name: 'Single',
      component: Single
    }]
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// const app = new Vue ({
//   router
// }).$mount('#app')

export default router