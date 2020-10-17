<template>
  <div>
    <div class="page" id="page">
        <!-- HEADER -->
        <header class="header center">
            <div class="header__left">
                <a href="" class="logo">
                    <img class="logo__img" src="../../src/assets/imgs/logo.png" alt="logo"><span class="logo__text">BRAN<span class="logo__text--last_letter">D</span></span>
                </a>
                <div class="header__form">
                    <button class="header__browse" onclick="displayMenu()">Browse</button>
                    <input class="header__input" type="text" name="name" placeholder="Search for Item...">
                    <button class="header__search"><img src="../../src/assets/imgs/search.png" alt="search"></button>
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
            <div class="header__right">
                <div class="header__bucket">
                    <div class="header__count" id="basket-count"></div>
                    <button id="basket-toggler" @click="showBasket = !showBasket">
                        <img class="header__cart" src="../../src/assets/imgs/cart.png" alt="cart">
                    </button>
                    <!-- DROP CART -->
                    <div class="drop" id="basket" v-show="showBasket">
                        <div id="basket-items">

                            <div class="drop__box" v-for="item of basketItems" :key="item.productId">
                                <a class="drop__img" href="single.html">
                                    <img :src="item.productImg" alt="#" width="72" height="85"></a>
                                <div class="drop__info">
                                    <a href="single.html" class="drop__title">{{item.productName}}</a>
                                    <img src="../../src/assets/imgs/drop_cart/stars.png" alt="#">
                                    <div class="drop__price">
                                        <span class="drop__count">
                                            {{ item.amount }}
                                        </span>
                                        <span class="drop__span">x</span>
                                        $ {{ item.productPrice }}
                                    </div>
                                </div>
                                <button 
                                    @click="remove(item.productId)" 
                                    class="drop__cancel fas fa-times-circle" 
                                    name="remove"
                                ></button>
                            </div>

                        </div>
                        <div class="drop__total">
                            <div>TOTAL</div>
                            <div id="total-sum"></div>
                        </div>
                        <a href="checkout.html" class="drop__link">Checkout</a>
                        <a href="#" class="drop__link">Go to cart</a>
                    </div>
                </div>
                <a class="header__link" href="#">My Account</a>
            </div>
        </header>
        <!-- NAV -->
        <nav class="nav center">
            <ul class="menu">
                <li class="menu__list"><a href="index.html" class="menu__link active">Home</a></li>
                <li class="menu__list"><a href="product.html" class="menu__link">Man</a>
                    <div class="mega_menu">
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
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Accessories </a></li>
                            </ul>
                        </div>
                        <div class="mega_menu__column">
                            <h6 class="mega_menu__title">Women</h6>
                            <ul class="mega_menu__ul">
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Dresses</a></li>
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Tops</a></li>
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Sweaters/Knits</a></li>
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Jackets/Coats</a></li>
                            </ul>
                            <h6 class="mega_menu__title mega_menu__title--middle">Women</h6>
                            <ul class="mega_menu__ul">
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Dresses</a></li>
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Tops</a></li>
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Sweaters/Knits</a></li>
                            </ul>
                        </div>
                        <div class="mega_menu__column">
                            <h6 class="mega_menu__title">Women</h6>
                            <ul class="mega_menu__ul">
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Dresses</a></li>
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Tops</a></li>
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Sweaters/Knits</a></li>
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Jackets/Coats</a></li>
                            </ul>
                            <img src="../../src/assets/imgs/mega_menu.png" alt="#">
                        </div>
                    </div>
                </li>
                <li class="menu__list"><a href="shoping_cart.html" class="menu__link">Women</a></li>
                <li class="menu__list"><a href="product.html" class="menu__link">Kids</a></li>
                <li class="menu__list"><a href="product.html" class="menu__link">Accoseriese</a></li>
                <li class="menu__list"><a href="product.html" class="menu__link">Featured</a></li>
                <li class="menu__list"><a href="product.html" class="menu__link">Hot Deals</a>
                    <div class="mega_menu mega_menu--left">
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
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Accessories </a></li>
                            </ul>
                        </div>
                        <div class="mega_menu__column">
                            <h6 class="mega_menu__title">Women</h6>
                            <ul class="mega_menu__ul">
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Dresses</a></li>
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Tops</a></li>
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Sweaters/Knits</a></li>
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Jackets/Coats</a></li>
                            </ul>
                            <h6 class="mega_menu__title mega_menu__title--middle">Women</h6>
                            <ul class="mega_menu__ul">
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Dresses</a></li>
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Tops</a></li>
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Sweaters/Knits</a></li>
                            </ul>
                        </div>
                        <div class="mega_menu__column">
                            <h6 class="mega_menu__title">Women</h6>
                            <ul class="mega_menu__ul">
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Dresses</a></li>
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Tops</a></li>
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Sweaters/Knits</a></li>
                                <li class="mega_menu__list"><a href="" class="mega_menu__link">Jackets/Coats</a></li>
                            </ul>
                            <img src="../../src/assets/imgs/mega_menu.png" alt="#">
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
        <!-- PROMO -->
        <section class="promo center">
            <div class="promo__content">
                <h1 class="promo__suptitle">THE BRAND</h1>
                <h2 class="promo__title">OF LUXERIOUS <span class="promo__title--last_letter">FASHION</span></h2>
            </div>
        </section>
        <!-- PRODUCTS -->
        <section class="products center">
            <div class="products__left">
                <a class="products__item" href="#">
                    <img class="products__img" src="https://raw.githubusercontent.com/Eliseev88/geekbrains/master/products/products_1.png" alt="#">
                    <div class="products__content">
                        <h4 class="products__subtitle">hOT dEAl</h4>
                        <h3 class="products__title">FOR MEN</h3>
                    </div>
                </a>
                <a class="products__item" href="#">
                    <img class="products__img" src="https://raw.githubusercontent.com/Eliseev88/geekbrains/master/products/products_3.png" alt="#">
                    <div class="products__content">
                        <h4 class="products__subtitle">LUXIROUS &amp; trendy</h4>
                        <h3 class="products__title">ACCESORIES</h3>
                    </div>
                </a>
            </div>
            <div class="products__right">
                <a class="products__item" href="#">
                    <img class="products__img" src="https://raw.githubusercontent.com/Eliseev88/geekbrains/master/products/products_2.png" alt="#">
                    <div class="products__content">
                        <h4 class="products__subtitle">30% offer</h4>
                        <h3 class="products__title">women</h3>
                    </div>
                </a>
                <a class="products__item" href="#">
                    <img class="products__img" src="https://raw.githubusercontent.com/Eliseev88/geekbrains/master/products/products_4.png" alt="#">
                    <div class="products__content">
                        <h4 class="products__subtitle">new arrivals</h4>
                        <h3 class="products__title">FOR kids</h3>
                    </div>
                </a>
            </div>
        </section>
        <!-- CATALOG -->
        <section class="catalog center">
            <h3 class="catalog__header">Featured Items</h3>
            <p class="catalog__header_text">Shop for items based on what we featured in this week</p>
            
            <Catalog />

             <!-- ./CATALOG__MAIN -->
            <div class="catalog__button">
                <a class="catalog__link" href="product.html">Browse All Product<i class="fas fa-long-arrow-alt-right"></i></a>
            </div>
        </section>
        <!-- OFFER -->
        <section class="offer center">
            <div class="offer__left">
                <img src="../../src/assets/imgs/offer/offer_main.png" alt="#">
                <div class="offer__content">
                    <h2 class="offer_title">30% <span class="offer__last_word">OFFER</span></h2>
                    <h3 class="offer__subtitle">FOR WOMEN</h3>
                </div>
            </div>
            <div class="offer__right">
                <article class="offer__services">
                    <div class="offer__icon"><img src="../../src/assets/imgs/offer/offer_icon_1.svg" alt="#"></div>
                    <div class="offer__text">
                        <div class="offer__sevrice_name">Free Delivery</div>
                        <div class="offer__service_descript">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
                    </div>
                </article>
                <article class="offer__services">
                    <div class="offer__icon"><img src="../../src/assets/imgs/offer/offer_icon_2.svg" alt="#"></div>
                    <div class="offer__text">
                        <div class="offer__sevrice_name">Sales &amp; discounts</div>
                        <div class="offer__service_descript">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
                    </div>
                </article>
                <article class="offer__services">
                    <div class="offer__icon"><img src="../../src/assets/imgs/offer/offer_icon_3.svg" alt="#"></div>
                    <div class="offer__text">
                        <div class="offer__sevrice_name">Quality assurance</div>
                        <div class="offer__service_descript">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
                    </div>
                </article>
            </div>
        </section>
        <!-- SUBSCRIBE -->
        <div class="subscribe">
            <div class="subscribe__inner center">
                <div class="subscribe__left">
                    <img class="subscribe__avatar" src="../../src/assets/imgs/subscribe/avatar.png" alt="#">
                    <div class="subscribe__content">
                        <div class="subscribe__text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</div>
                        <div class="subscribe__author"><span>Bin Burhan</span> <br>Dhaka, Bd</div>
                    </div>
                    <div class="subscribe__slider">
                        <div class="subscribe__slider_element"></div>
                        <div class="subscribe__slider_element active"></div>
                        <div class="subscribe__slider_element"></div>
                    </div>
                </div>
                <div class="subscribe__right">
                    <div class="subscribe__title">Subscribe</div>
                    <div class="subscribe__subtitle"> FOR OUR NEWLETTER AND PROMOTION</div>
                    <form action="post" class="subscribe__form">
                        <input class="subscribe__input" type="email" name="subscribe" placeholder="Enter Your Email">
                        <button class="subscribe__btn">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
        <!-- CONTACTS -->
        <div class="contacts center">
            <div class="contacts__item contacts__item--brand">
                <a href="index.html" class="logo">
                    <img class="logo__img" src="../../src/assets/imgs/logo.png" alt="logo"><span class="logo__text">BRAN<span class="logo__text--last_letter">D</span></span>
                </a>
                <div class="contacts__text">
                    <p class="contacts__paragraph">Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.</p>
                    <p class="contacts__paragraph">Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
                </div>
            </div>
            <nav class="contacts__item">
                <div class="contacts__title">Company</div>
                <ul class="contacts__list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">How It Works</a></li>
                    <li><a href="#">Brows All</a></li>
                </ul>
            </nav>
            <nav class="contacts__item">
                <div class="contacts__title">INFORMATION</div>
                <ul class="contacts__list">
                    <li><a href="#">Tearms &amp; Condition</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">How to Buy</a></li>
                    <li><a href="#">How to Sell</a></li>
                    <li><a href="#">Promotion</a></li>
                </ul>
            </nav>
            <nav class="contacts__item">
                <div class="contacts__title">SHOP CATEGORY</div>
                <ul class="contacts__list">
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Child</a></li>
                    <li><a href="#">Apparel</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
        <!-- FOOTER -->
        <footer class="footer">
            <div class="footer__box center">
                <div class="footer__copyright">&copy;2020 Brand All Rights Reserved.</div>
                <div class="footer__social">
                    <a href="#" class="social__item"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social__item"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social__item"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="social__item"><i class="fab fa-pinterest-p"></i></a>
                    <a href="#" class="social__item"><i class="fab fa-google-plus-g"></i></a>
                </div>
            </div>
        </footer>
    </div> <!-- ./PAGE -->
    <!-- POP-UP -->
    <div class="popup" id="popup">
        <button class="popup__close" id="close"><i class="fa fa-close"></i></button>
        <div class="popup__wrapper">
            <button id="prev" class="popup__prev"><i class="fas fa-chevron-left"></i></button>
            <img src="" alt="#" id="main-pic" class="popup__main">
            <button id="next" class="popup__next"><i class="fas fa-chevron-right"></i></button>
        </div>  
        <div id="carousel" class="popup__carousel" name="carousel">
            <!-- Сюда рендерятся картинки -->
        </div>
    </div>
</div>
</template>

<script>
import Catalog from '../components/Catalog.vue'
export default {
  name: 'Home',
  components: {
    Catalog
  }
}
</script>
