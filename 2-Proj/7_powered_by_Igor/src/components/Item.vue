<template>
    <div>
        <template v-if="type == 'catalog'">
            <div class="catalog__item">
                <button 
                    class="catalog__bucket" 
                    name="add" 
                    @click="$parent.$emit('add', item)"
                >
                    <img class="catalog__hidden_img" 
                    src="https://raw.githubusercontent.com/Eliseev88/geekbrains/3fdc76c4d5e84b1398b168e6239b8651dce01f6f/products/Forma_1_copy.svg" alt="#">
                    <span class="catalog__hidden_text">Add to Cart</span>
                </button>
                <div class="catalog__photo">
                    <img class="catalog__img" :src="item.productImg" alt="#">
                </div>
                <div class="catalog__content">
                    <a class="catalog__name" href="#">{{item.productName}}</a>
                    <div class="catalog__price">${{item.productPrice}}.00</div>
                </div>
            </div>
        </template>

        <template v-if="type == 'basket'">
            <div class="drop__box">
                <a class="drop__img" href="single.html"><img :src="item.productImg" alt="#" width="72" height="85"></a>
                <div class="drop__info">
                    <a href="single.html" class="drop__title">{{item.productName}}</a>
                    <img src="../../src/assets/imgs/drop_cart/stars.png" alt="#">
                    <div class="drop__price"><span class="drop__count">{{item.amount}}</span><span class="drop__span">
                    x
                    </span>${{item.productPrice}}</div>
                </div>
                <button class="drop__cancel fas fa-times-circle" name="remove" 
                @click="$parent.remove(item.productId)">
                </button>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    // props: ['item', 'type'],
    props: {
        item: { type: Object },
        type: { type: String, default: 'catalog' }
    }
    // попробую пробросить клик выше
}
</script>

<style>

</style>