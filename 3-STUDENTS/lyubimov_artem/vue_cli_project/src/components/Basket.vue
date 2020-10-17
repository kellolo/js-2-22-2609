<template>
    <div class="header__bucket">
        <div class="header__count" id="basket-count"></div>
        <button id="basket-toggler" @click="shown = !shown">
            <img class="header__cart" src="../../src/assets/imgs/cart.png" alt="cart">
        </button>
        <!-- DROP CART -->
        <div class="drop" id="basket" v-show="shown">
            <div id="basket-items">
                <div class="drop__box" v-for="item of items" :key="item.productId">
                    <a class="drop__img" href="single.html">
                        <img :src="item.productImg" alt="#" width="72" height="85">
                    </a>
                    <div class="drop__info">
                        <a href="single.html" class="drop__title">{{ item.productName}}</a>
                        <img src="../../src/assets/imgs/drop_cart/stars.png" alt="#">
                        <div class="drop__price">
                            <span class="drop__count">{{ item.amount }}</span>
                            <span class="drop__span">x</span>
                            ${{ item.productPrice }}
                        </div>
                    </div>
                    <button @click="remove(item.productId)"
                    class="drop__cancel fas fa-times-circle"
                    name="remove">x</button>
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
export default {
    data() {
        return {
            items: [],
            shown: false,
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
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
                this.items.push(Object.assign(item, { amount: 1 }));
            } else {
                find.amount++;
            }
        },
        remove(item) {
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