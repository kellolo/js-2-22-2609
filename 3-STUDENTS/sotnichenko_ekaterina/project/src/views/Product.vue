<template>
    <div>
        <HeaderProduct />
        <div class="headerLine"></div>
        <NavProduct />
        <NewArrivalsBg />
        <main>
            <Navigation />
            <ProductsFeaturesBg />
        </main>
        <SubscribeBg />
        <FooterContainer />
        <BgCopyrights />
    </div>
</template>

<script>
import HeaderProduct from '../components/product/HeaderProduct.vue';
import NavProduct from '../components/product/NavProduct.vue';
import NewArrivalsBg from '../components/product/NewArrivalsBg.vue';
import FooterContainer from '../components/product/FooterContainer.vue';
import BgCopyrights from '../components/product/BgCopyrights.vue';
import Navigation from '../components/product/Navigation.vue';
import ProductsFeaturesBg from '../components/product/ProductsFeaturesBg.vue';
import SubscribeBg from '../components/product/SubscribeBg.vue';

export default {
    components: {
        HeaderProduct,
        NavProduct,
        NewArrivalsBg,
        FooterContainer,
        BgCopyrights,
        Navigation,
        ProductsFeaturesBg,
        SubscribeBg
    }
}
</script>

<style>

</style>