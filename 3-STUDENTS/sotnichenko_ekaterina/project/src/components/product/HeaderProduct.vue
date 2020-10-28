<template>
    <div>
        <header class="container px-0 my-4">
            <div class="row col-12 d-flex px-0 mx-0">
                <div class="logo d-flex justify-content-center px-0
                                    col-7
                                    col-xl-2 offset-xl-0
                                    col-lg-2 offset-lg-0
                                    col-md-3 offset-md-4
                                    col-sm-4 offset-sm-4">
                    <router-link :to="{name: 'Index'}">
                        <div class="pr-2"><img src="../../../src/assets/imgs/logo.png" alt="logo"></div>
                        <div class="pr-3 pr-xl-3 pr-lg-0 pr-md-2 pr-sm-2 brand">bran<span>d</span></div>
                    </router-link>
                </div>
                <div class="d-flex align-items-center
                                    col-12 pt-3
                                    col-xl-5 pl-xl-4 px-xl-0
                                    col-lg-5 pl-lg-5 pr-lg-0 px-lg-0 pt-lg-0
                                    col-md-7 px-md-0
                                    pt-sm-3 ">
                <div class="dropdown">
                    <button class=" btn-lg btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Browse
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <div class="dropdown-item">woman</div>
                        <a href="#" class="dropdown-item" type="button">Dresses</a>
                        <a href="#" class="dropdown-item" type="button">Tops</a>
                        <a href="#" class="dropdown-item" type="button">Sweaters/Knits</a>
                        <a href="#" class="dropdown-item" type="button">Jackets/Coats</a>
                        <a href="#" class="dropdown-item" type="button">Blazers</a>
                        <a href="#" class="dropdown-item" type="button">Denim</a>
                        <a href="#" class="dropdown-item" type="button">Leggings/Pants</a>
                        <a href="#" class="dropdown-item" type="button">Skirts/Shorts</a>
                        <a href="#" class="dropdown-item" type="button">Accessories</a>
                        <div class="dropdown-item">men</div>
                        <a href="#" class="dropdown-item" type="button">Tees/Tank tops</a>
                        <a href="#" class="dropdown-item" type="button">Shirts/Polos</a>
                        <a href="#" class="dropdown-item" type="button">Sweaters</a>
                        <a href="#" class="dropdown-item" type="button">Sweatshirts/Hoodies</a>
                        <a href="#" class="dropdown-item" type="button">Blazers</a>
                        <a href="#" class="dropdown-item" type="button">Jackets/vests</a>
                    </div>
                </div>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for Item..." aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
            <div class="row headerAccountAndCart d-none  align-items-center
                                        col-12 offset-0 px-0 pt-3 mx-auto justify-content-center
                                        col-xl-2 offset-xl-3 mt-xl-0
                                        col-lg-3 offset-lg-2 pt-lg-0
                                        col-md-3 offset-md-2 mt-md-0 mr-md-0 d-md-flex
                                        col-sm-4 offset-sm-4 pt-sm-3 justify-content-sm-end ">
                <div class="headerCart pr-4" >
                <label for="cart_checkbox" class="label_cart_checkbox"></label>
                    <router-link :to="{name: 'Index'}">
                        <div><img src="../../../src/assets/imgs/cart.png" alt="headerCart"></div>
                    </router-link>
                    <input type="checkbox" id="cart_checkbox">
                    <div class="headerCartWrap">
                        <div class="headerCartWrapBlock"></div>
                        <div class="headerCartWrapInAll">
                            <div id="basket" class="d-flex flex-column"></div>
                        </div>
                    </div>

                </div>
                <div class="dropdown">
                    <button class="btn-lg btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        My Account
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button>
                    </div>
                </div>
            </div>
            </div>
            <div class="row mx-0 d-md-none pt-3 justify-content-between">
                <div class="burgermenu justify-content-between align-items-center
                                        col-2 pt-1
                                        col-sm-6">
                    <div class="dropdown">
                        <button class="btn btn-secondary px-4 pt-2" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="burgerMenu fas fa-bars"></i></button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <a href="#" class="dropdown-item" type="button">home</a>
                            <a href="#" class="dropdown-item" type="button">man</a>
                            <a href="#" class="dropdown-item" type="button">women</a>
                            <a href="#" class="dropdown-item" type="button">kids</a>
                            <a href="#" class="dropdown-item" type="button">accessories</a>
                            <a href="#" class="dropdown-item" type="button">featured</a>
                            <a href="#" class="dropdown-item" type="button">hot deals</a>
                        </div>
                    </div>
                </div>
                <div class="headerAccountAndCart d-flex align-items-center justify-content-end
                                        col-2 pt-1
                                        col-sm-6">
                    <div class="headerCart pr-4" >
                        <a href="#"><img src="../../../src/assets/imgs/cart.png" alt="headerCart"></a>
                        <div class="headerCartWrap">
                            <div class="headerCartWrapBlock"></div>
                            <div class="headerCartWrapInAll">
                                <div class="d-flex headerCartWrapIn">
                                    <a href="#" class="d-flex ">
                                        <img src="../../../src/assets/imgs/myAccount1.jpg" alt="">
                                        <div>
                                            <div>Rebox Zane</div>
                                            <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></span>
                                            <div class="headerCartWrapPrice">1 <span>x</span> $250</div>
                                        </div>
                                    </a>
                                    <a href="#"><i class="fas fa-times-circle"></i></a>
                                </div>
                                <div class="d-flex">
                                    <a href="#" class="d-flex headerCartWrapIn">
                                        <img src="../../../src/assets/imgs/myAccount2.jpg" alt="">
                                        <div>
                                            <div>Rebox Zane</div>
                                            <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></span>
                                            <div class="headerCartWrapPrice">1 <span>x</span> $250</div>
                                        </div>
                                    </a>
                                    <a href="#"><i class="fas fa-times-circle"></i></a>
                                </div>
                                <div class="headerCartWrapTotalPrice">
                                    <div>total</div>
                                    <div>$500.00</div>
                                </div>
                                <button type="button" class="productsButtonIndex">Checkout</button>
                                <button type="button" class="productsButtonIndex">Go to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="btn-lg btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            My Account
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Action</button>
                            <button class="dropdown-item" type="button">Another action</button>
                            <button class="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>