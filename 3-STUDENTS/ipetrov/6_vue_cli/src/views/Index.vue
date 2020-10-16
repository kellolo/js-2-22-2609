<template>
<div>
    <div class="page" id="page">
        <!-- HEADER -->
        <header class="header center">
            <HeaderLeft />
            <HeaderRight />
        </header>
        <!-- NAV -->
          <Nav />
        <!-- PROMO -->
        <section class="promo center">
            <div class="promo__content">
                <h1 class="promo__suptitle">THE BRAND</h1>
                <h2 class="promo__title">OF LUXERIOUS <span class="promo__title--last_letter">FASHION</span></h2>
            </div>
        </section>
        <!-- PRODUCTS -->

        <Products />

        <!-- CATALOG -->
        <section class="catalog center">
            <h3 class="catalog__header">Featured Items</h3>
            <p class="catalog__header_text">Shop for items based on what we featured in this week</p>

            <Catalog @add='add'/>

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

import Catalog from '../components/Catalog.vue'
import HeaderLeft from '../components/UIcomp/HeaderLeft.vue'
import Nav from '../components/UIcomp/Nav.vue'
import Products from '../components/UIcomp/Products.vue'
import Offer from '../components/UIcomp/Offer.vue'
import Contacts from '../components/UIcomp/Contacts.vue'
import Subscribe from '../components/UIcomp/Subscribe.vue'
import Footer from '../components/UIcomp/Footer.vue'
import HeaderRight from '../components/Basket.vue'
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
    HeaderRight
  }
}
</script>
