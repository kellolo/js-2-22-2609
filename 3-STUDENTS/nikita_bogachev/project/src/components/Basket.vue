<template>
    <div class="drop" id="basket">
        <BasketItem v-for="item of items" :key="item.productId" :item="item" :remove="remove"/>
        <div class="drop__total">
            <div>TOTAL</div>
            <div id="total-sum">${{ sum }}</div>
        </div>
        <a href="checkout.html" class="drop__link">Checkout</a>
        <a href="#" class="drop__link">Go to cart</a>
    </div>
</template>

<script>
import BasketItem from './additional/BasketItem.vue';
export default {
    components: { BasketItem },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
            
        }
    }, 
    mounted() {
         this.get(this.url)
            .then(item => {this.items = item.content});
    },
    methods: {
         get(url) {
                return fetch(url).then(data => data.json())
            },
       add(product) {
            let find = this.items.find(el => el.productId == product.productId);
                if (!find) {
                    this.items.push(Object.assign({},product, { amount: 1 }));
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
        }, 
    },
    
    computed: {
            sum(){
                let totalSum = this.items.reduce((sum, el) => (sum + el.productPrice*el.amount),0 
                );
                return totalSum
            }
        } 
}
</script>

<style>

</style>