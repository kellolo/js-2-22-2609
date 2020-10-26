<template>
  <div class="catalog__main" id="catalog">
      <Item v-for="item of items" :key="item.productId" :item="item" />
  </div>
</template>

<script>
import Item from './Item.vue'
import $axXios from '../utils/axios'
export default {
    components: { Item },
    data() {
        return {
            items: [],
            url: '/api/catalog' //for Dev
            // url: '/catalog' // for Build // когда перенесем на сервер
        }
    },
    mounted() {
        $axXios.get(this.url)
        .then(items =>
            {this.items = items})
    },
}
</script>

<style>

</style>