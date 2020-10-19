<template>
<div id="basket-items">
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
</div>
</template>

<script>
export default {
    props: ['item'],
    methods:{
        remove(id) {
            this.$emit('remove', id);
        }
    }
}
</script>