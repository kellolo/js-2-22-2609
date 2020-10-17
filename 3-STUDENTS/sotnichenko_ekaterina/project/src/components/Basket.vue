<template>
<div class="drop" v-show="show" id="basket">
    <ItemBasket 
        v-for="item of items" 
        :key="item.productId" 
        :item="item"
        @remove="remove" />
    <div class="drop__total"  v-if="sum()">
        <div>TOTAL</div>
        <div id="total-sum">{{ '$' + sum() }}</div>
    </div>
    <a href="checkout.html" class="drop__link">Checkout</a>
    <a href="#" class="drop__link">Go to cart</a>
</div>
</template>

<script>
import ItemBasket from './ItemBasket'

export default {
    components: { ItemBasket },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
            totalSum: 0
        }
    },
    mounted() {
        this.get(this.url)
            .then(items => this.items = items.content)
    },
    methods: {
        get(url) {
            return fetch(url)
                .then(data => data.json())
        },
         add (product) { 
             //как связать это с ItemCatalog, так чтобы он видел корзину 
            // let find = this.items.find(el => el.productId == product.productId);
            // if (!find) {
            //     this.items.push(Object.assign(product, { amount: 1 }));
            // } else {
            //     find.amount++;
            // };
        },
        remove(id) {
            let find = this.items.find(el => el.productId == id);
            if (find.amount > 1) {
                find.amount--;
            } else {
                this.items.splice(this.items.indexOf(find), 1);
            }
        },
        sum() {
            return this.$data.items.reduce( (total, value) =>{
                return (total + value.amount * value.productPrice)
            }, 0);
        }
    },
    props: ['show']
}
</script>