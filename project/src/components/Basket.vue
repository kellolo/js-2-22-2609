<template>
    <div class="drop" id="basket">
        <Item v-for="item of items" :key="item.productId" :item="item" type="basket" />
        <div class="drop__total">
            <div v-if="sum > 0">TOTAL</div>
            <div id="total-sum">{{ sum == 0 ? "Корзина пуста" : "$" + sum }}</div>
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
    mounted () {
           this.get_basket_items()
    },
    methods: {
        ...mapActions ([
            'get_basket_items'
        ]),
    },
    
    computed: {
            ...mapGetters ([
                'items', 'sum'
            ])
        } 
}
</script>

<style>

</style>