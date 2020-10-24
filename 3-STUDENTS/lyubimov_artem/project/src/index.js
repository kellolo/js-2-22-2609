// import app from './components'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout/styles/style.css'
import Vue from 'vue'
import App from './App.vue'

// app();

new Vue ({
    render: h => h(App)
}).$mount('#app');