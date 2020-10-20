<template>
  <div class="catalog__main" id="catalog">
      <Item
        v-for="item of allItemsCatalog" 
        :key="item.productId" 
        :item="item" />
  </div>
</template>

<script>
import Item from './Item'
import {mapGetters, mapActions} from 'vuex';
export default {
    components: { Item },
    computed: mapGetters(['allItemsCatalog']),
    mounted() {
        this.fetchItemsCatalog();
    },
    methods: mapActions(['fetchItemsCatalog']),
}
</script>