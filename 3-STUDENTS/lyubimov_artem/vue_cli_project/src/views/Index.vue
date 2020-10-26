<template>
  <div>
      <div class="page" id="page">
          <!-- HEADER -->
          <header class="header center">
                <HeaderLeft />
              <div class="header__right">
                <Basket ref="basket"/>
                <a class="header__link" href="#">My Account</a>
              </div>
          </header>
          <!-- NAV -->
            <Nav />
          <!-- PROMO -->
            <Promo />
          <!-- PRODUCTS -->
            <Products />
          <!-- CATALOG -->
          <section class="catalog center">
              <h3 class="catalog__header">Featured Items</h3>
              <p class="catalog__header_text">Shop for items based on what we featured in this week</p>
              <Catalog @add="_add"/>
              <!-- ./CATALOG__MAIN -->
              <div class="catalog__button">
                  <a class="catalog__link" href="product.html">Browse All Product<i class="fas fa-long-arrow-alt-right"></i></a>
              </div>
          </section>
          <!-- OFFER -->
            <Offer />
          <!-- SUBSCRIBE -->
            <Subscribe />
          <!-- CONTACTS -->
            <Contacts />
          <!-- FOOTER -->
            <Footer />
      </div> <!-- ./PAGE -->
      <!-- POP-UP -->
        <Popup />
  </div>
</template>

<script>
import Catalog from '../components/Catalog.vue'
import Basket from '../components/Basket.vue'
import Popup from '../components/blocks/Popup.vue'
import Footer from '../components/blocks/Footer.vue'
import Contacts from '../components/blocks/Contacts.vue'
import Subscribe from '../components/blocks/Subscribe'
import Offer from '../components/blocks/Offer'
import Products from '../components/blocks/Products'
import Nav from '../components/blocks/Nav'
import HeaderLeft from '../components/blocks/HeaderLeft'
import Promo from '../components/blocks/Promo'

export default {
  name: 'Home',
  components: {
    Catalog,
    Basket,
    Popup,
    Footer,
    Contacts,
    Subscribe,
    Offer,
    Products,
    Nav,
    HeaderLeft,
    Promo,
  },
  methods: {
    _add (pl) {
      this.$refs.basket.add(pl)
    }
  }
}
</script>