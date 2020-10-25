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
import HeaderLeft from '../components/blocks/HeaderLeft'
import Basket from '../components/Basket.vue'
import NavProduct from '../components/blocks/product/NavProduct.vue';
import NewArrivalsBg from '../components/blocks/product/NewArrivalsBg.vue';
import ShippingAdress from '../components/blocks/checkout/ShippingAdress.vue';
import SubscribeBg from '../components/blocks/product/SubscribeBg.vue';
import FooterContainer from '../components/blocks/product/FooterContainer.vue';
import BgCopyrights from '../components/blocks/product/BgCopyrights.vue';

export default {
    components: {
        HeaderLeft,
        Basket,
        NavProduct,
        NewArrivalsBg,
        ShippingAdress,
        SubscribeBg,
        FooterContainer,
        BgCopyrights
    }
}
</script>

<style scoped>
    @import '../../src/layout/styles/styles.css';
</style>