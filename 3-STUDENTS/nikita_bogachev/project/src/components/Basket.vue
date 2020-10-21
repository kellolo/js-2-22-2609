<template>
    <div class="drop" id="basket">
        <Item v-for="item of ITEMS" :key="item.productId" :item="item" type="basket"/>
        <div class="drop__total">
            <div v-if="SUM > 0">TOTAL</div>
            <div id="total-sum">{{ SUM == 0 ? "Корзина пуста" : "$" + SUM }}</div>
        </div>
        <router-link to="checkout" class="drop__link">Checkout</router-link>
        <router-link to="Cart" class="drop__link">Go to cart</router-link>
    </div>
</template>

<script>
import Item from './additional/Item.vue';
import { mapActions, mapGetters } from 'vuex'
export default {
    components: { Item },
    mounted() {
           this.GET_BASKET_ITEM()
    },
    methods: {
        ...mapActions([
            'GET_BASKET_ITEM'
        ]),
    },
    
    computed: {
            ...mapGetters([
                'ITEMS', 'SUM'
            ])
        } 
}
</script>

<style>

</style>