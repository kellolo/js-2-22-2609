<template>
    <div>

        <template v-if="type == 'catalog'">
            <div class="catalog__item">
                <button
                    @click="add(item)"
                    class="catalog__bucket" 
                    name="add"
                >
                    <img class="catalog__hidden_img" 
                    src="https://raw.githubusercontent.com/Eliseev88/geekbrains/3fdc76c4d5e84b1398b168e6239b8651dce01f6f/products/Forma_1_copy.svg" alt="#">
                    <span class="catalog__hidden_text">Add to Cart</span>
                </button>
                <div class="catalog__photo">
                    <img :src="item.productImg" class="catalog__img"  alt="#">
                </div>
                <div class="catalog__content">
                    <a class="catalog__name" href="#">{{ item.productName }}</a>
                    <div class="catalog__price">${{ item.productPrice + '.00'}}</div>
                </div>
            </div>
        </template>

        <template v-if="type == 'basket'">
            <div class="drop__box" :data-id="item.productId">
                <a class="drop__img" href="single.html">
                    <img :src="item.productImg" alt="#" width="72" height="85">
                </a>
                <div class="drop__info">
                    <a href="single.html" class="drop__title">{{item.productName}}</a>
                    <img src="../../src/assets/imgs/drop_cart/stars.png" alt="#">
                    <div class="drop__price">
                        <span class="drop__count" :data-id="item.productId">{{ item.amount }}</span>
                        <span class="drop__span">${{item.productPrice}}</span>
                    </div>
                </div>
                <button 
                    class="drop__cancel fas fa-times-circle" 
                    :data-id="item.productId" 
                    name="remove" 
                    @click="remove(item.productId)">x</button>
            </div>
        </template>

    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed: mapGetters(['add','remove']),
    props: {
        item: {
            type: Object
        },
        type: {
            type: String,
            default: 'catalog'
        }
    }
}
</script>