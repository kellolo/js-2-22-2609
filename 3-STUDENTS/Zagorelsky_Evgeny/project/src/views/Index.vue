<template>
  <div>
    <div class="page">
      <!-- HEADER -->
        <Header />
      <!-- NAV -->
        <Nav />
      <!-- PROMO -->
      <section class="promo center">
        <div class="promo__content">
          <h1 class="promo__suptitle">THE BRAND</h1>
          <h2 class="promo__title">
            OF LUXERIOUS <span class="promo__title--last_letter">FASHION</span>
          </h2>
        </div>
      </section>
      <!-- PRODUCTS -->
        <Products />
      <!-- CATALOG -->
      <section class="catalog center">
        <h3 class="catalog__header">Featured Items</h3>
        <p class="catalog__header_text">
          Shop for items based on what we featured in this week
        </p>
        <Catalog />
        <!-- ./CATALOG__MAIN -->
        <div class="catalog__button">
          <router-link class="catalog__link" to="/product"
            >Browse All Product<i class="fas fa-long-arrow-alt-right"></i
          ></router-link>
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
    </div>
    <!-- ./PAGE -->
    <!-- POP-UP -->
    <div class="popup" id="popup">
      <button class="popup__close" id="close">
        <i class="fa fa-close"></i>
      </button>
      <div class="popup__wrapper">
        <button id="prev" class="popup__prev">
          <i class="fas fa-chevron-left"></i>
        </button>
        <img src="" alt="#" id="main-pic" class="popup__main" />
        <button id="next" class="popup__next">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <div id="carousel" class="popup__carousel" name="carousel">
        <!-- Сюда рендерятся картинки -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Basket from "../components/Basket.vue";
import Nav from "../components/Nav.vue";
import Catalog from "../components/Catalog.vue";
import Products from "../components/Products.vue";
import Offer from "../components/Offer.vue";
import Subscribe from "../components/Subscribe.vue";
import Contacts from "../components/Contacts.vue";
import Footer from "../components/Footer.vue"

export default {
  name: "Home",
  components: {
    Header,
    Basket,
    Nav,
    Catalog,
    Products,
    Offer,
    Subscribe,
    Contacts,
    Footer
  },

};
</script>
