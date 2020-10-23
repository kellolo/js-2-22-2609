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
import $axXios from '../utils/axios' // PSEUDO-axios

export default {
    components: { Item },
    data() {
        return {
            items: [],
            show: false,
            url: '/api/basket',
            // url: '/basket',
        }
    },
    methods: {
        add(item) {
            console.log(item)
            let find = this.items.find(el => el.productId == item.productId);
            if (!find) {
                let newItem = Object.assign({}, item, { amount: 1 });

                $axXios.post(`${this.url}`, newItem)
                .then(status => {
                    if(status) {
                        this.items.push(newItem);
                    }
                })
                .catch(e => {
                    console.log(e);
                })
            } else {
                $axXios.put(`${this.url}/${find.productId}`, 1)
                .then(status => {
                    if(status) {
                        find.amount++;
                    }
                })
                .catch(e => {
                    console.log(e);
                })
            }
        },
        remove(id) {
            let find = this.items.find(el => el.productId == id);
            if (find.amount > 1) {
                $axXios.put(`${this.url}/${find.productId}`, -1)
                .then(status => {
                    if(status) {
                        find.amount--;
                    }
                })
                .catch(e => {
                    console.log(e);
                })
            } else {
                $axXios.delete(`${this.url}/${find.productId}`)
                .then(status => {
                    if(status) {
                        this.items.splice(this.items.indexOf(find), 1);
                    }
                })
                .catch(e => {
                    console.log(e);
                })
            }
        }
    },
    mounted() {
        $axXios.get(this.url)
            .then(items => 
                {this.items = items.content;})
    },
}
</script>

<style>

</style>