<template>
    <div id="basket-items">
        <div class="drop__box">
            <a class="drop__img" href="single.html">
            <img
                :src="item.productImg"
                alt="#"
                width="72"
                height="85"
            /></a>
            <div class="drop__info">
                <a href="single.html" class="drop__title">{{ item.productName }}</a>
                <img
                    src="../../src/assets/imgs/drop_cart/stars.png"
                    alt="#"
                />
                <div class="drop__price">
                    <span class="drop__count">
                    {{ item.amount }}
                    </span>
                    <span class="drop__span"> x </span>
                    ${{ item.productPrice }}
                </div>
            </div>
            <button
                @click="remove(item.productId)"
                class="drop__cancel fas fa-times-circle"
                name="remove"
            ></button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        // remove(id) {
        //     let find = this.items.find(el => el.productId == id);
        //     if (find.amount > 1) {
        //         find.amount--;
        //     } else {
        //         this.items.splice(this.items.indexOf(find), 1);
        //     }
        // }
    }
}
</script>

<style>

</style>