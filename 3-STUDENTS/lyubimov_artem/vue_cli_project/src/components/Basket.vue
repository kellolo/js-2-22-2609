<template>
    <div class="header__bucket">
        <div class="header__count" id="basket-count"></div>
        <button id="basket-toggler" @click="shown = !shown">
            <img class="header__cart" src="../../src/assets/imgs/cart.png" alt="cart">
        </button>
        <!-- DROP CART -->
        <div class="drop" id="basket" v-show="shown">
            <div id="basket-items">
                <Item v-for="item of items" :key="item.productId" :item="item" type="basket"/>
            </div>
            <div class="drop__total">
                <div>TOTAL</div>
                <div id="total-sum"></div>
            </div>
            <router-link :to="{name: 'Checkout'}">
                <a href="checkout.html" class="drop__link">Checkout</a>
            </router-link>
            <router-link :to="{name: 'ShoppingCart'}">
            <a href="#" class="drop__link">Go to cart</a>
            </router-link>
        </div>
        </div>
</template>

<script>
import Item from './Item.vue'
export default {
    components: { Item },
    data() {
        return {
            items: [],
            shown: false,
            url: '/api/basket' // for Dev
            // url: '/basket' // for Build // когда перенесем на сервер
        }
    },
    mounted() {
        this.get(this.url)
            .then(items => 
                {this.items = items.content})
    },
    methods: {
        get(url) {
            return fetch(url)
                .then(data => data.json())
        },
        add(item) {
            let find = this.items.find(el => el.productId == item.productId);
            if (!find) {
                this.items.push(Object.assign({}, item, { amount: 1 }));
            } else {
                find.amount++;
            }
        },
        remove(id) {
            let find = this.items.find(el => el.productId == id);
            if (find.amount > 1) {
                find.amount--;
            } else {
                this.items.splice(this.items.indexOf(find), 1);
            }
        }
    }
}
</script>

<style>

</style>