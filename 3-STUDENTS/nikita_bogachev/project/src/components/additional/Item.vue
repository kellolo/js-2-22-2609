<template>
    <div>
        <template v-if="type == 'catalog'">
            <div class="catalog__item">
                <button 
                    class="catalog__bucket" 
                    name="add" 
                    @click="ADD(item)"
                >
                    <img class="catalog__hidden_img" 
                    src="https://raw.githubusercontent.com/Eliseev88/geekbrains/3fdc76c4d5e84b1398b168e6239b8651dce01f6f/products/Forma_1_copy.svg" alt="#">
                    <span class="catalog__hidden_text">Add to Cart</span>
                </button>
                <div class="catalog__photo">
                    <img class="catalog__img" :src="item.productImg" alt="#">
                </div>
                <div class="catalog__content">
                    <router-link class="catalog__name" to="/singlepage">{{item.productName}}</router-link>
                    <div class="catalog__price">${{item.productPrice}}.00</div>
                </div>
            </div>
        </template>

        <template v-if="type == 'basket'">
            <div class="drop__box">
                <router-link class="drop__img" to="/singlepage"><img :src="item.productImg" alt="#" width="72" height="85"></router-link>
                <div class="drop__info">
                    <router-link to="/singlepage" class="drop__title">{{item.productName}}</router-link>
                    <img src="../../../src/assets/imgs/drop_cart/stars.png" alt="#">
                    <div class="drop__price"><span class="drop__count">{{item.amount}}</span><span class="drop__span">
                    x
                    </span>${{item.productPrice}}</div>
                </div>
                <button class="drop__cancel fas fa-times-circle" name="remove" 
                @click="REMOVE(item)">
                </button>
            </div>
        </template>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

    props: {
        item: { type: Object },
        type: { type: String, default: 'catalog' }
    },
    methods: {
        ...mapActions(['ADD']),
        ...mapActions(['REMOVE'])
    }
}
</script>

<style>
</style>