import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout/styles/style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faUserSecret)

import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
 
library.add(faFontAwesome)
 
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
 
library.add(faTimesCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)
  
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
