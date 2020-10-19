<template>
<div class="header__right">
    <div class="header__bucket">
        <div class="header__count" id="basket-count"></div>
        <button @click="show = !show"><img class="header__cart" src="../../src/assets/imgs/cart.png" alt="cart"></button>
        <!-- DROP CART --> 
        <div id="basket" class="drop" v-show="show">
            <div id="basket-items">
                <Item v-for="item of items" :key="item.productId" :item="item" type="basket"/>
            </div>
            <div class="drop__total">
                <div>TOTAL</div>
                <div id="total-sum"></div>
            </div>
            <a href="checkout.html" class="drop__link">Checkout</a>
            <a href="#" class="drop__link">Go to cart</a>
        </div>
    </div>
    <a class="header__link" href="#">My Account</a>
</div>
</template>

<script>
import Item from './Item.vue'
export default {
    components: { Item },
    data() {
        return {
            items: [],
            show: false,
            url: 'https://raw.githubusercontent.com/kpe4et/static/master/JSON/basket.json'
        }
    },
    methods: {
        get(url) {
            return fetch(url)
                .then(data => data.json())
        },
        add(item) {
            console.log(item)
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
    },
    mounted() {
        this.get(this.url)
            .then(items => 
                {this.items = items.content;})
    },
}
</script>

<style>

</style>