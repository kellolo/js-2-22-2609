<template>
    <div>
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

            <Catalog />

            <!-- ./CATALOG__MAIN -->
            <div class="catalog__button">
                <router-link to="ProductCat" class="catalog__link">Browse All Product<i class="fas fa-long-arrow-alt-right"></i></router-link>
            </div>
        </section>
        <!-- OFFER -->
        <Offer />
    </div>
</template>

<script>
import Products from './UIcomp/Products.vue'
import Offer from './UIcomp/Offer.vue'
import Catalog from './Catalog.vue'
export default {
    components: {
        Products,
        Offer,
        Catalog
    }
}
</script>

<style>

</style>