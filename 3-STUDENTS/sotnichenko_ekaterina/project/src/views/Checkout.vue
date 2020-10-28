<template>
    <div>
        <HeaderProduct />
        <div class="headerLine"></div>
        <NavProduct />
        <NewArrivalsBg />
        <main>
            <ShippingAdress item="01." type="Shipping Adress"/>
            <ShippingAdress item="02." type="BILLING INFORMATION"/>
            <ShippingAdress item="03." type="SHIPPING INFORMATION"/>
            <ShippingAdress item="04." type="SHIPPING METHOD"/>
            <ShippingAdress item="05." type="PAYMENT METHOD"/>
            <ShippingAdress item="06." type="ORDER REVIEW"/>
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
import ShippingAdress from '../components/product/ShippingAdress.vue';
import SubscribeBg from '../components/product/SubscribeBg.vue';
import FooterContainer from '../components/product/FooterContainer.vue';
import BgCopyrights from '../components/product/BgCopyrights.vue';

export default {
    components: {
        HeaderProduct,
        NavProduct,
        NewArrivalsBg,
        ShippingAdress,
        SubscribeBg,
        FooterContainer,
        BgCopyrights
    }
}
</script>

<style>

</style>