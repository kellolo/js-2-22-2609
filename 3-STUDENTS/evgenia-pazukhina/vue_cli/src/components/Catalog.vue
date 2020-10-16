<template>
    <div class="catalog__main" id="catalog">
        <Item v-for="item of items" :key="item.productId" :item="item"/>
    </div>
</template>


<script>
import Item from "./Item.vue";

export default {
    components: { Item },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
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
    }
};
</script>

<style>
</style>