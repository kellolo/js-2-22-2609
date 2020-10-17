<template>
    <div class="header__bucket">
        <div class="header__count" id="basket-count"></div>
        <button id="basket-toggler" @click="showBasket = !showBasket">
                <img
                class="header__cart"
                src="../../src/assets/imgs/cart.png"
                alt="cart"
                />
        </button>
        <div class="drop" id="basket" v-show="showBasket">

        <BasketItem v-for="item of items" :key="item.productId" :item="item"/>

        <div class="drop__total">
            <div>TOTAL</div>
            <div id="total-sum"></div>
        </div>
        <a href="checkout.html" class="drop__link">Checkout</a>
        <a href="#" class="drop__link">Go to cart</a>
        </div>
    </div>
</template>

<script>
import BasketItem from './BasketItem.vue'

export default {
    components: { BasketItem },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
            showBasket: false,
        };
    },
    mounted() {
        this.get(this.url).then(items => this.items = items);
    },
    methods: {
        get(url) {
            return fetch(url)
                .then(data => data.json())
        },
    }
}
</script>

<style>

</style>