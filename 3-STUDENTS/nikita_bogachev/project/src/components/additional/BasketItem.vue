<template>
  <div id="basket-items">
            <div  class="drop__box">
                <a class="drop__img" href="single.html"><img :src="item.productImg" alt="#" width="72" height="85"></a>
                <div class="drop__info">
                    <a href="single.html" class="drop__title">{{ item.productName }}</a>
                    <img src="../../../src/assets/imgs/drop_cart/stars.png" alt="#">
                    <div class="drop__price"><span class="drop__count">{{ item.amount }}</span><span class="drop__span">
                    x
                    </span>${{item.productPrice}}<span class="drop__span">${{ item.productPrice*item.amount }} </span></div>
                </div>
                <button @click="remove(item.productId)" class="drop__cancel fas fa-times-circle" :data-id="item.productId" name="remove"></button>
            </div>
        </div>
</template>

<script>

export default {
    props: ['item', 'remove']
}
</script>

<style>

</style>