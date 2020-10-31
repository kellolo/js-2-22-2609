<template>
    <div>
        <header class="header center">
            <HeaderLeft />
            <div class="header__right">
            <Basket ref="basket"/>
            <a class="header__link" href="#">My Account</a>
            </div>
        </header>
        <NavProduct />
        <NewArrivalsBg />
        <main>
            <Navigation />
            <Catalog @add="_add"/>
            <ProductsFeaturesBg />
        </main>
        <SubscribeBg />
        <FooterContainer />
        <BgCopyrights />
    </div>
</template>

<script>
import HeaderLeft from '../components/blocks/HeaderLeft'
import Basket from '../components/Basket.vue'
import NavProduct from '../components/blocks/product/NavProduct.vue';
import NewArrivalsBg from '../components/blocks/product/NewArrivalsBg.vue';
import FooterContainer from '../components/blocks/product/FooterContainer.vue';
import BgCopyrights from '../components/blocks/product/BgCopyrights.vue';
import Navigation from '../components/blocks/product/Navigation.vue';
import ProductsFeaturesBg from '../components/blocks/product/ProductsFeaturesBg.vue';
import SubscribeBg from '../components/blocks/product/SubscribeBg.vue';
import Catalog from '../components/Catalog.vue';

export default {
    components: {
        HeaderLeft,
        Basket,
        NavProduct,
        NewArrivalsBg,
        FooterContainer,
        BgCopyrights,
        Navigation,
        ProductsFeaturesBg,
        SubscribeBg,
        Catalog,
    },
    methods: {
        _add (pl) {
            this.$refs.basket.add(pl)
    }
  }
}
</script>

<style scoped>
    @import '../../src/layout/styles/styles.css';
</style>