<template>
    <div class="catalog__main" id="catalog">
        <Item v-for="item of FILL_CATALOG" :key="item.productId" :item="item" />
    </div>
</template>

<script>
import Item from './Item.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    components: { Item },
    mounted() {
           this.GET_CATALOG_ITEMS()
    },
    methods: {
        ...mapActions([
            'GET_CATALOG_ITEMS'
        ]),
    },
    
    computed: {
        ...mapGetters([
            'FILL_CATALOG'
        ])
    } 
}
</script>

<style>

</style>