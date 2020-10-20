<template>
    <div>
        <button id="basket-toggler"><img class="header__cart" src="../../src/assets/imgs/cart.png" alt="cart" @click="showBasket = !showBasket"></button>

        <div class="drop" id="basket" v-show="showBasket">
            
            <div id="basket-items">

                <div class="drop__box" v-for="item of this.$store.state.items" :key="item.productId">
                    <a class="drop__img" href="single.html">
                        <img :src="item.productImg" alt="#" width="72" height="85">
                    </a>
                    <div class="drop__info">
                        <a href="single.html" class="drop__title">{{item.productName}}</a>
                        <img src="../assets/imgs/drop_cart/stars.png" alt="#">
                        <div class="drop__price">
                            <span class="drop__count">{{item.amount}}</span>
                            <span class="drop__span">x</span>${{item.productPrice}}
                        </div>
                    </div>
                    <button 
                        class="drop__cancel"
                        name="remove"
                        @click="removeItem(item.productId)"
                        >
                        <font-awesome-icon :icon="['fas', 'times-circle']"/>
                    </button>
                </div>

            </div>

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

import  Item from './Item.vue'
import  Catalog from './Catalog.vue'


export default {

    components: { 
        Item,
        Catalog
    }, 
    data () {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
            showBasket: false,
        }
    },

    mounted () {
        this.get(this.url).then(basket => this.$store.state.items = basket.content)
    },
  
    methods: {
        get(url) {
            return fetch(url)
                .then(data => data.json())
        },

        addItem(product) {
            this.$store.commit("addItem", product);
        },

        removeItem(id) {
            this.$store.commit("removeItem", id);
        },
    }
}
</script>

<style>

</style>