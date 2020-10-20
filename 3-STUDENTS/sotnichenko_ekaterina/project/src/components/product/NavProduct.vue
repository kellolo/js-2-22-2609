<template>
    <div>
        <nav class="nav container d-none d-md-flex justify-content-center mt-3">
            <div class="navAll">
                <router-link :to="{Index}" >
                    <span class="nav-link">Home</span>
                </router-link>
                <div class="dropNav">
                    <div class="dropNavIn">
                        <div class="dropNavItem">woman</div>
                        <a href="#" class="dropNavItem" type="button">Dresses</a>
                        <a href="#" class="dropNavItem" type="button">Tops</a>
                        <a href="#" class="dropNavItem" type="button">Sweaters/Knits</a>
                        <a href="#" class="dropNavItem" type="button">Jackets/Coats</a>
                        <a href="#" class="dropNavItem" type="button">Blazers</a>
                        <a href="#" class="dropNavItem" type="button">Denim</a>
                        <a href="#" class="dropNavItem" type="button">Leggings/Pants</a>
                        <a href="#" class="dropNavItem" type="button">Skirts/Shorts</a>
                        <a href="#" class="dropNavItem" type="button">Accessories</a>
                    </div>
                    <div class="dropNavIn">
                        <div class="dropNavItem">woman</div>
                        <a href="#" class="dropNavItem" type="button">Dresses</a>
                        <a href="#" class="dropNavItem" type="button">Tops</a>
                        <a href="#" class="dropNavItem" type="button">Sweaters/Knits</a>
                        <a href="#" class="dropNavItem" type="button">Jackets/Coats</a>
                        <a href="#" class="dropNavItem" type="button">Blazers</a>
                        <div class="dropNavItem">woman</div>
                        <a href="#" class="dropNavItem" type="button">Denim</a>
                        <a href="#" class="dropNavItem" type="button">Leggings/Pants</a>
                        <a href="#" class="dropNavItem" type="button">Skirts/Shorts</a>
                    </div>
                    <div class="dropNavIn">
                        <div class="dropNavItem">woman</div>
                        <a href="#" class="dropNavItem" type="button">Dresses</a>
                        <a href="#" class="dropNavItem" type="button">Tops</a>
                        <a href="#" class="dropNavItem" type="button">Sweaters/Knits</a>
                        <a href="#" class="dropNavItem" type="button">Jackets/Coats</a>
                        <a href="">
                            <div>Super sale!</div>
                            <img src="../../../src/assets/imgs/navDrop.jpg" alt="nav img">
                        </a>
                    </div>
                </div>
            </div>
            <a class="nav-link" href="#">Man</a>
            <a class="nav-link" href="#">Women</a>
            <a class="nav-link" href="#">Kids</a>
            <a class="nav-link" href="#">Accoseriese</a>
            <a class="nav-link" href="#">Featured</a>
            <a class="nav-link" href="#">Hot Deals</a>
        </nav>
    </div>
</template>