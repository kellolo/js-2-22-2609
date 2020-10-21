<template>
    <div>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner container">
                <div class="carousel-item active">
                    <img src="../../../src/assets/imgs/slide1.jpg" class="d-block" alt="slide1">
                </div>
                <div class="carousel-item">
                    <img src="../../../src/assets/imgs/slide1.jpg" class="d-block" alt="slide2">
                </div>
                <div class="carousel-item">
                    <img src="../../../src/assets/imgs/slide1.jpg" class="d-block" alt="slide3">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="womanCollectionContainer container border px-0">
            <div class="womanCollection">
                <div class="womanCollectionTop d-flex flex-column align-items-center border-bottom">
                    <div class="womenCollectionTitle">WOMEN COLLECTION
                        <div class="womenCollectionTitleBorder">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="womenCollectionTextTitle">Moschino Cheap And Chic</div>
                    <div class="womenCollectionText">
                        Compellingly actualize fully researched processes before proactive outsourcing.
                        Progressively syndicate collaborative architectures before cutting-edge services.
                        Completely visualize parallel core competencies rather than exceptional portals.
                    </div>
                    <div class="womenCollectionFeatures">
                        <div>MATERIAL: <span>COTTON</span></div>
                        <div>DESIGNER: <span>BINBURHAN</span></div>
                    </div>
                    <div class="womenCollectionPrice">$561</div>
                </div>
                <div class="womanCollectionBottom">
                    <form class="womanCollectionBottomChoose">
                        <div class="womenCollectionChoose">
                            <div>CHOOSE COLOR</div>
                            <select>
                                <option selected>Red</option>
                                <option value="1">Green</option>
                                <option value="2">Blue</option>
                                <option value="3">Orange</option>
                            </select>
                        </div>
                        <div class="womenCollectionChoose">
                            <div>CHOOSE SIZE</div>
                            <select>
                                <option selected>XXL</option>
                                <option value="1">XL</option>
                                <option value="2">L</option>
                                <option value="3">M</option>
                            </select>
                        </div>
                        <div class="womenCollectionChoose">
                            <div>QUANTITY</div>
                            <input type="text">
                        </div>
                    </form>
                    <button type="button" class="btn btn-outline-secondary feturedButton">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>

            </div>
        </div>
        <div class="container px-0">
            <div class="alsoTitle d-flex justify-content-center">you may like also</div>
            <div class="row" id="catalog"></div> 
        </div>
    </div>
</template>