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
            <ProductDetailsAll />
            <ShippingContainer />
        </main>
        <SubscribeBg />
        <FooterContainer />
        <BgCopyrights />
    </div>
</template>

<script>
import HeaderLeft from '../components/blocks/HeaderLeft';
import Basket from '../components/Basket.vue';
import NavProduct from '../components/blocks/product/NavProduct.vue';
import NewArrivalsBg from '../components/blocks/product/NewArrivalsBg.vue';
import SubscribeBg from '../components/blocks/product/SubscribeBg.vue';
import FooterContainer from '../components/blocks/product/FooterContainer.vue';
import BgCopyrights from '../components/blocks/product/BgCopyrights.vue';
import ProductDetailsAll from '../components/blocks/product/ProductDetailsAll.vue';
import ShippingContainer from '../components/blocks/product/ShippingContainer.vue';

export default {
    components: {
        HeaderLeft,
        Basket,
        NavProduct,
        NewArrivalsBg,
        SubscribeBg,
        FooterContainer,
        BgCopyrights,
        ProductDetailsAll,
        ShippingContainer
    }
}
</script>

<style scoped>
    @import '../../src/layout/styles/styles.css';
</style>