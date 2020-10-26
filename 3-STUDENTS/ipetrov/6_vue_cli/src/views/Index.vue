<template>
    <div>
        <div class="page" id="page">
            <!-- HEADER -->
            <header class="header center">
                <HeaderLeft />
                <Basket ref="basket" @change='_changeTab'/>
            </header>
            <!-- NAV -->
            <Nav />
            <!-- PROMO -->
            


            <!-- <template v-if="selected=='main'">
                <Products />
                <section class="catalog center">
                    <h3 class="catalog__header">Featured Items</h3>
                    <p class="catalog__header_text">Shop for items based on what we featured in this week</p>

                    <Catalog @add='_add'/>

                    <div class="catalog__button">
                        <a class="catalog__link" href="product.html">Browse All Product<i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </section>
                <Offer />
            </template> -->

            

            <router-view />
            <!-- <template v-if="selected == 'cart'"><Cart /></template> -->
            


        <!-- Ниже неизменный подвал     -->
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
import Catalog from '../components/Catalog.vue'
import HeaderLeft from '../components/UIcomp/HeaderLeft.vue'
import Nav from '../components/UIcomp/Nav.vue'
import Products from '../components/UIcomp/Products.vue'
import Offer from '../components/UIcomp/Offer.vue'
import Contacts from '../components/UIcomp/Contacts.vue'
import Subscribe from '../components/UIcomp/Subscribe.vue'
import Footer from '../components/UIcomp/Footer.vue'
import Basket from '../components/Basket.vue'
import Cart from '../components/CartComp/Cart.vue'
export default {
  name: 'Home',
  components: {
    Catalog,
    HeaderLeft,
    Nav,
    Products,
    Offer,
    Contacts,
    Subscribe,
    Footer,
    Basket,
    Cart,
    HomePage
  },
  data() {
        return {
            selected: ''
        }
  },
  methods: {
      _add(pl) {
          this.$refs.basket.add(pl)
      },
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
     }
    //   _changeTab(name) {                 кривота
    //       this.selected = name;
    //   }
  },
    computed: {
    username() {
      // Мы скоро разберём что такое `params`
      return this.$route.params.username
    }
  },
//   mounted() {                            кривота
//       this.selected = 'main'
//   }                  
}
</script>
