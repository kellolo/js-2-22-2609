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
import HeaderProduct from '../components/blocks/product/HeaderProduct.vue';
import NavProduct from '../components/blocks/product/NavProduct.vue';
import NewArrivalsBg from '../components/blocks/product/NewArrivalsBg.vue';
import FooterContainer from '../components/blocks/product/FooterContainer.vue';
import BgCopyrights from '../components/blocks/product/BgCopyrights.vue';
import Navigation from '../components/blocks/product/Navigation.vue';
import ProductsFeaturesBg from '../components/blocks/product/ProductsFeaturesBg.vue';
import SubscribeBg from '../components/blocks/product/SubscribeBg.vue';

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