<template>
    <div>
        <div class="page" id="page">
            <header class="header center">
                <HeaderLeft />
                <Basket ref="basket" />
            </header>

            <Nav />

            <router-view @add="_add"/>            

            <!-- SUBSCRIBE -->
            <Subscribe />
            <!-- CONTACTS -->
            <Contacts />
            <!-- FOOTER -->
            <Footer />
        </div> <!-- ./PAGE -->
        <!-- POP-UP -->
        <div class="popup" id="popup">
            <button class="popup__close" id="close"><i class="fa fa-close"></i></button>
            <div class="popup__wrapper">
                <button id="prev" class="popup__prev"><i class="fas fa-chevron-left"></i></button>
                <img src="" alt="#" id="main-pic" class="popup__main">
                <button id="next" class="popup__next"><i class="fas fa-chevron-right"></i></button>
            </div>  
            <div id="carousel" class="popup__carousel" name="carousel">
                <!-- Сюда рендерятся картинки -->
            </div>
        </div>
    </div>
</template>

<script>

import HomePage from '../components/HomePage.vue'
import HeaderLeft from '../components/UIcomp/HeaderLeft.vue'
import Nav from '../components/UIcomp/Nav.vue'
import Contacts from '../components/UIcomp/Contacts.vue'
import Subscribe from '../components/UIcomp/Subscribe.vue'
import Footer from '../components/UIcomp/Footer.vue'
import Basket from '../components/Basket.vue'
export default {
  name: 'Home',
  components: {
    HeaderLeft,
    Nav,
    Contacts,
    Subscribe,
    Footer,
    Basket,
    HomePage
  },
  data() {
        return {
            selected: ''
        }
  },
  methods: {
    _add(pl) {
          this.$refs.basket.add(pl);
      },
      goBack() {
        
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
     }
  },
    computed: {
    username() {
      // Мы скоро разберём что такое `params`
      return this.$route.params.username
    }
  },                
}
</script>
