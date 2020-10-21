<template>
    <div>
        <HeaderProduct />
        <div class="headerLine"></div>
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
import HeaderProduct from '../components/product/HeaderProduct.vue';
import NavProduct from '../components/product/NavProduct.vue';
import NewArrivalsBg from '../components/product/NewArrivalsBg.vue';
import SubscribeBg from '../components/product/SubscribeBg.vue';
import FooterContainer from '../components/product/FooterContainer.vue';
import BgCopyrights from '../components/product/BgCopyrights.vue';
import ProductDetailsAll from '../components/product/ProductDetailsAll.vue';
import ShippingContainer from '../components/product/ShippingContainer.vue';

export default {
    components: {
        HeaderProduct,
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

<style>

</style>