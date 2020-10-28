<template>
          <header class="header center">
        <div class="header__left">
          <router-link to="/" class="logo">
            <img
              class="logo__img"
              src="../../src/assets/imgs/logo.png"
              alt="logo"/>
            <span class="logo__text">BRAN<span class="logo__text--last_letter">D</span></span>
          </router-link>
          <div class="header__form">
            <button class="header__browse" @click="showMenu = !showMenu">Browse</button>
            <input
              class="header__input"
              type="text"
              name="name"
              placeholder="Search for Item..."
            />
            <button class="header__search">
              <img src="../../src/assets/imgs/search.png" alt="search" />
            </button>
            <div id="mega_menu" class="mega_menu mega_menu--browse" v-show="showMenu">
              <div class="mega_menu__column">
                <MenuWoman />
                <MenuMan />
              </div>
            </div>
          </div>
        </div>
        <div class="header__right">
          <div class="header__bucket">
            <div class="header__count" id="basket-count"></div>
            <button id="basket-toggler" @click="showBasketItems = !showBasketItems">
              <img
                class="header__cart"
                src="../../src/assets/imgs/cart.png"
                alt="cart"
              />
            </button>
            <!-- DROP CART -->
            <Basket v-show="showBasketItems"/>
          </div>
          <a class="header__link" href="#">My Account</a>
        </div>
      </header>
</template>

<script>
import Basket from "../components/Basket.vue";
import MenuWoman from "../components/additional/MenuWoman.vue";
import MenuMan from "../components/additional/MenuMan.vue"
export default {
    components: {
        Basket,
        MenuWoman,
        MenuMan
    },
    data() {
    return {
      showMenu: false,
      showBasketItems: false
    };
  },
}
</script>

<style>

</style>