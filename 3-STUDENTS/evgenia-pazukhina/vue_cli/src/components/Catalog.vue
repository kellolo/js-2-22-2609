<template>
    <div class="catalog__main" id="catalog">
        <Item v-for="item of items" :key="item.productId" :item="item" />
    </div>
</template>

<script>
import Item from './Item.vue'
import Basket from './Basket.vue'
export default {
    components: { Item },
    data() {
        return {
            items: [],
            // url: 'https://raw.githubusercontent.com/kpe4et/static/master/JSON/catalog.json'
            // url: '/api/catalog' //for Dev
            url: '/catalog' //for Build
        }
    },
    mounted() {
        this.get(this.url)
        .then(items => 
            {this.items = items;})
    },
    methods: {
        get(url) {
            return fetch(url)
                .then(data => data.json())
        }
        // проброшу клик еще выше
        
    },
}
</script>

<style>

</style>