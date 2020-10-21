<template>
        <nav class="nav center">
        <ul class="menu">
          <li class="menu__list">
            <router-link to="/" class="menu__link active">Home</router-link>
          </li>
          <li class="menu__list">
            <a href="product.html" class="menu__link">Man</a>
            <div class="mega_menu">
              <div class="mega_menu__column">
                <MenuWoman />
              </div>
              <div class="mega_menu__column">
                <MenuWomanMini />
                <h6 class="mega_menu__title mega_menu__title--middle">Women</h6>
                <ul class="mega_menu__ul">
                  <li class="mega_menu__list">
                    <a href="" class="mega_menu__link">Dresses</a>
                  </li>
                  <li class="mega_menu__list">
                    <a href="" class="mega_menu__link">Tops</a>
                  </li>
                  <li class="mega_menu__list">
                    <a href="" class="mega_menu__link">Sweaters/Knits</a>
                  </li>
                </ul>
              </div>
              <div class="mega_menu__column">
                <MenuWomanMini />
                <img src="../../src/assets/imgs/mega_menu.png" alt="#" />
              </div>
            </div>
          </li>
          <li class="menu__list">
            <a href="shoping_cart.html" class="menu__link">Women</a>
          </li>
          <li class="menu__list">
            <a href="product.html" class="menu__link">Kids</a>
          </li>
          <li class="menu__list">
            <a href="product.html" class="menu__link">Accoseriese</a>
          </li>
          <li class="menu__list">
            <a href="product.html" class="menu__link">Featured</a>
          </li>
          <li class="menu__list">
            <a href="product.html" class="menu__link">Hot Deals</a>
            <div class="mega_menu mega_menu--left">
              <div class="mega_menu__column">
                <MenuWoman />
              </div>
              <div class="mega_menu__column">
                <MenuWomanMini />
                <h6 class="mega_menu__title mega_menu__title--middle">Women</h6>
                <ul class="mega_menu__ul">
                  <li class="mega_menu__list">
                    <a href="" class="mega_menu__link">Dresses</a>
                  </li>
                  <li class="mega_menu__list">
                    <a href="" class="mega_menu__link">Tops</a>
                  </li>
                  <li class="mega_menu__list">
                    <a href="" class="mega_menu__link">Sweaters/Knits</a>
                  </li>
                </ul>
              </div>
              <div class="mega_menu__column">
                <MenuWomanMini />
                <img src="../../src/assets/imgs/mega_menu.png" alt="#" />
              </div>
            </div>
          </li>
        </ul>
      </nav>
</template>

<script>
import MenuWoman from "../components/additional/MenuWoman.vue";
import MenuWomanMini from "../components/additional/MenuWomanMini.vue";
export default {
  components: {
    MenuWoman,
    MenuWomanMini
  }
}
</script>

<style>

</style>