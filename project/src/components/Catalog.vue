<template>
  <div class="catalog__main" id="catalog">
      <Item v-for="item of catalog" :key="item.productId" :item="item" />
  </div>
</template>

<script>
import Item from './additional/Item.vue';
import { mapActions, mapGetters } from 'vuex'
export default {
    components: { Item },
    mounted() {
           this.get_catalog_items()
    },
    methods: {
        ...mapActions([
            'get_catalog_items'
        ]),
    },
    
    computed: {
            ...mapGetters([
                'catalog'
            ])
        } 
}



</script>

<style>

</style>