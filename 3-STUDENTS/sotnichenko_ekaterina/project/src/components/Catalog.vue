<template>
  <div class="catalog__main" id="catalog">
      <ItemCatalog 
        v-for="item of items" 
        :key="item.productId" 
        :item="item" 
        @add="add(item)" />
  </div>
</template>

<script>
import ItemCatalog from './ItemCatalog'
import Basket from './Basket'

export default {
    components: { ItemCatalog },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
        }
    },
    mounted() {
        this.get(this.url).then(items => this.items = items)
    },
    methods: {
        get(url) {
            return fetch(url)
                .then(data => data.json())
        },
    add(item) {
            return console.log('я не знаю как отправить данные в корзину   ' + item.productId);
        }
    }
}
</script>