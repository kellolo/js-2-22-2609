<template>
<div class="header__left">
    <router-link :to="{name: 'Index'}">
        <span class="logo">
            <img class="logo__img" src="../../../src/assets/imgs/logo.png" alt="logo">
            <span class="logo__text">BRAN
                <span class="logo__text--last_letter">D</span>
            </span>
        </span>
    </router-link>
    <div class="header__form">
        <button class="header__browse" onclick="displayMenu()">Browse</button>
        <input class="header__input" type="text" name="name" placeholder="Search for Item...">
        <button class="header__search"><img src="../../../src/assets/imgs/search.png" alt="search"></button>
        <div id="mega_menu" class="mega_menu mega_menu--browse">
            <div class="mega_menu__column">
                <h6 class="mega_menu__title">Women</h6>
                <ul class="mega_menu__ul">
                    <li class="mega_menu__list"><a href="" class="mega_menu__link">Dresses</a></li>
                    <li class="mega_menu__list"><a href="" class="mega_menu__link">Tops</a></li>
                    <li class="mega_menu__list"><a href="" class="mega_menu__link">Sweaters/Knits</a></li>
                    <li class="mega_menu__list"><a href="" class="mega_menu__link">Jackets/Coats</a></li>
                    <li class="mega_menu__list"><a href="" class="mega_menu__link">Blazers</a></li>
                    <li class="mega_menu__list"><a href="" class="mega_menu__link">Denim</a></li>
                    <li class="mega_menu__list"><a href="" class="mega_menu__link">Leggings/Pants</a></li>
                    <li class="mega_menu__list"><a href="" class="mega_menu__link">Skirts/Shorts</a></li>
                    <li class="mega_menu__list"><a href="" class="mega_menu__link">Accessories</a></li>
                </ul>
                <h6 class="mega_menu__title mega_menu__title--middle">Men</h6>
                <ul class="mega_menu__ul">
                    <li class="mega_menu__list"><a href="" class="mega_menu__link">Tees/Tank tops</a></li>
                    <li class="mega_menu__list"><a href="" class="mega_menu__link">Shirts/Polos</a></li>
                    <li class="mega_menu__list"><a href="" class="mega_menu__link">Sweaters</a></li>
                    <li class="mega_menu__list"><a href="" class="mega_menu__link">Sweatshirts/Hoodies</a></li>
                    <li class="mega_menu__list"><a href="" class="mega_menu__link">Blazers</a></li>
                    <li class="mega_menu__list"><a href="" class="mega_menu__link">Jackets/vests</a></li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</template>
