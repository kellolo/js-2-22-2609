<template>
<div>
    <div class="page" id="page">
        <!-- HEADER -->
        <header class="header center">
            <Header />
            <Basket ref="basket" />
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
    <PopUp />
</div>
</template>

<script>

import Catalog from '../components/Catalog.vue'
import Header from '../components/additional/Header.vue'
import Basket from '../components/Basket.vue'
import Nav from '../components/additional/Nav.vue'
import Products from '../components/additional/Products.vue'
import Offer from '../components/additional/Offer.vue'
import Contacts from '../components/additional/Contacts.vue'
import Subscribe from '../components/additional/Subscribe.vue'
import Footer from '../components/additional/Footer.vue'
import PopUp from '../components/additional/PopUp.vue'

export default {
    name: 'Home',
    components: {
        Catalog,
        Header,
        Basket,
        Nav,
        Products,
        Offer,
        Contacts,
        Subscribe,
        Footer,
        PopUp,
    },
    methods: {
        _add(pl) {
            this.$refs.basket.add(pl);
        }
    },
}
</script>
