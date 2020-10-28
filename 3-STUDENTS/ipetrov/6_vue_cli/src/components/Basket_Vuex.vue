<template>
    <div class="header__right">
        <div class="header__bucket">
            <div class="header__count" id="basket-count"></div>
            <button @click="show = !show"><img class="header__cart" src="../../src/assets/imgs/cart.png" alt="cart"></button>
            <!-- DROP CART --> 
            <div id="basket" class="drop" v-show="show">
                <div id="basket-items">
                    <Item v-for="item of FILL_BASKET" v-bind:key="item.productId" :item="item" type="basket"/> 
                </div>
                <div class="drop__total">
                    <div>TOTAL</div>
                    <div id="total-sum"></div>
                </div>
                <router-link to="Checkout" class="drop__link">Go to Checkout</router-link>
                <router-link to="Cart" class="drop__link">Go to cart</router-link>
            </div>
        </div>
        <a class="header__link" href="#">My Account</a>
    </div>
</template>

<script>
import Item from "./Item.vue"
import { mapActions, mapGetters } from 'vuex'
export default {
    components: { Item },
    data() {
        return {
            show: false
        }
    },
    mounted() {
        this.GET_BASKET_ITEMS();
    },
    methods: {
        ...mapActions([
            'GET_BASKET_ITEMS'
        ]),
    },
    computed: {
        ...mapGetters([
            'FILL_BASKET'
        ])
    },
}
</script>

<style>

</style>