<template>
<div>
    <section class="products center">
        <div class="products__left">
            <router-link :to="{name: 'Product'}">
                <a class="products__item" >
                    <img class="products__img" src="https://raw.githubusercontent.com/Eliseev88/geekbrains/master/products/products_1.png" alt="#">
                    <div class="products__content">
                        <h4 class="products__subtitle">hOT dEAl</h4>
                        <h3 class="products__title">FOR MEN</h3>
                    </div>
                </a>
            </router-link>
            <router-link :to="{name: 'Product'}">
                <a class="products__item" >
                    <img class="products__img" src="https://raw.githubusercontent.com/Eliseev88/geekbrains/master/products/products_3.png" alt="#">
                    <div class="products__content">
                        <h4 class="products__subtitle">LUXIROUS &amp; trendy</h4>
                        <h3 class="products__title">ACCESORIES</h3>
                    </div>
                </a>
            </router-link>
        </div>
        <div class="products__right">
            <router-link :to="{name: 'Product'}">
                <a class="products__item" >
                    <img class="products__img" src="https://raw.githubusercontent.com/Eliseev88/geekbrains/master/products/products_2.png" alt="#">
                    <div class="products__content">
                        <h4 class="products__subtitle">30% offer</h4>
                        <h3 class="products__title">women</h3>
                    </div>
                </a>
            </router-link>
            <router-link :to="{name: 'Product'}">
                <a class="products__item" >
                    <img class="products__img" src="https://raw.githubusercontent.com/Eliseev88/geekbrains/master/products/products_4.png" alt="#">
                    <div class="products__content">
                        <h4 class="products__subtitle">new arrivals</h4>
                        <h3 class="products__title">FOR kids</h3>
                    </div>
                </a>
            </router-link>
        </div>
    </section>
</div>
</template>