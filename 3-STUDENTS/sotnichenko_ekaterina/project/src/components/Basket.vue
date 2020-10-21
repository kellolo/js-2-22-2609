<template>
<div class="drop" v-show="show" id="basket">
    <div id="basket-items">
        <Item 
            v-for="item of allItems" 
            :key="item.productId" 
            :item="item"
            type="basket" />
        </div>
    <div class="drop__total" v-if="sum" >
        <div>TOTAL</div>
        <div id="total-sum">{{ '$' + sum }}</div>
    </div>
    <router-link :to="{name: 'Checkout'}">
        <span class="drop__link">Checkout</span>
    </router-link>
    <a href="#" class="drop__link">Go to cart</a>
</div>
</template>

<script>
import Item from './Item';
import {mapGetters, mapActions} from 'vuex';
export default {
    components: { Item },
    computed: mapGetters(['allItems', 'sum']),
    mounted() {this.fetchItems()},
    methods: mapActions(['fetchItems']),
    props: ['show']
}
</script>