<template>
  <div class="catalog__main" id="catalog">
      <Item v-for="item of CATALOG" :key="item.productId" :item="item"/>
  </div>
</template>

<script>
import Item from './additional/Item.vue';
import { mapActions, mapGetters } from 'vuex'
export default {
    components: { Item },
    mounted() {
           this.GET_CATALOG_ITEM()
    },
    methods: {
        ...mapActions([
            'GET_CATALOG_ITEM'
        ]),
    },
    
    computed: {
            ...mapGetters([
                'CATALOG'
            ])
        } 
}



</script>

<style>

</style>