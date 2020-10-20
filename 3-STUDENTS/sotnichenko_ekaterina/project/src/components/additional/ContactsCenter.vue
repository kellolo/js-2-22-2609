<template>
<div class="contacts center">
    <div class="contacts__item contacts__item--brand">
        <router-link :to="{name: 'Index'}">
            <span class="logo">
                <img class="logo__img" src="../../../src/assets/imgs/logo.png" alt="logo">
                <span class="logo__text">BRAN
                    <span class="logo__text--last_letter">D</span>
                </span>
            </span>
        </router-link>
        
        <div class="contacts__text">
            <p class="contacts__paragraph">Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.</p>
            <p class="contacts__paragraph">Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
        </div>
    </div>
    <nav class="contacts__item">
        <div class="contacts__title">Company</div>
        <ul class="contacts__list">
            <router-link :to="{name: 'Index'}">
                <li><span >Home</span></li>
            </router-link>
            <router-link :to="{name: 'Product'}">
                <li><span >Shop</span></li>
            </router-link>
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
</template>