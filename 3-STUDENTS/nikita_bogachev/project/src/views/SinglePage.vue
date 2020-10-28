<template>
  <div>
        <Header ref="header"/>
        <Nav />
        <NewArrivals />
        <main>
            <div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner container">
                        <div class="carousel-item active">
                            <img src="../../src/assets/imgs/slide1.jpg" class="d-block" alt="slide1">
                        </div>
                        <div class="carousel-item">
                            <img src="../../src/assets/imgs/slide1.jpg" class="d-block" alt="slide2">
                        </div>
                        <div class="carousel-item">
                            <img src="../../src/assets/imgs/slide1.jpg" class="d-block" alt="slide3">
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
                    <Catalog />
                    </div>
                </div>
        </main>
        <Subscribe />
        <Contacts />
        <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Basket from "../components/Basket.vue";
import Nav from "../components/Nav.vue";
import NewArrivals from "../components/additional/NewArrivals.vue"
import Subscribe from "../components/Subscribe.vue";
import Contacts from "../components/Contacts.vue";
import Footer from "../components/Footer.vue";
import Catalog from "../components/Catalog.vue"
export default {
    components: {
    Header,
    Basket,
    Nav,
    Catalog,
    NewArrivals,
    Subscribe,
    Contacts,
    Footer
    },
}
</script>

<style>
.carousel {
  background-color: #f7f7f7;
  height: 777px; }
  .carousel .carousel-item img {
    margin: auto; }

.carousel-control-prev, .carousel-control-next {
  width: auto; }
  .carousel-control-prev .carousel-control-prev-icon, .carousel-control-prev .carousel-control-next-icon, .carousel-control-next .carousel-control-prev-icon, .carousel-control-next .carousel-control-next-icon {
    width: 47px;
    height: 47px;
    background-color: #2a2a2a;
    background-size: 24px; }

.womanCollectionContainer {
  position: relative;
  top: -80px;
  background-color: #ffffff; }

.womanCollection button {
  background-color: #ffffff;
  color: #f16d7f;
  border-color: #f16d7f;
  width: -webkit-fill-available; }
  .womanCollection button:hover {
    background-color: #f16d7f;
    color: #ffffff; }
.womanCollection .womanCollectionTop {
  padding-bottom: 3rem;
  margin: 5rem 15rem; }
  @media (max-width: 1199px) {
    .womanCollection .womanCollectionTop {
      margin: 5rem 10rem; } }
  @media (max-width: 991.98px) {
    .womanCollection .womanCollectionTop {
      margin: 5rem; } }
  @media (max-width: 767.98px) {
    .womanCollection .womanCollectionTop {
      margin: 3rem; } }
  .womanCollection .womanCollectionTop .womenCollectionTitle {
    color: #f16d7f;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    text-transform: uppercase; }
    .womanCollection .womanCollectionTop .womenCollectionTitle .womenCollectionTitleBorder {
      display: flex;
      align-items: center; }
      .womanCollection .womanCollectionTop .womenCollectionTitle .womenCollectionTitleBorder div {
        width: -webkit-fill-available;
        height: 1px;
        background-color: #eaeaea;
        margin-top: 0.6rem;
        margin-bottom: 1rem; }
      .womanCollection .womanCollectionTop .womenCollectionTitle .womenCollectionTitleBorder div:nth-child(2) {
        height: 3px;
        background-color: #f16d7f; }
  .womanCollection .womanCollectionTop .womenCollectionTextTitle {
    color: #4d4d4d;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    text-transform: uppercase; }
  .womanCollection .womanCollectionTop .womenCollectionText {
    color: #5e5e5e;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    text-align: center;
    margin-top: 4rem; }
    @media (max-width: 767.98px) {
      .womanCollection .womanCollectionTop .womenCollectionText {
        font-size: 18px;
        margin-top: 2rem; } }
  .womanCollection .womanCollectionTop .womenCollectionFeatures {
    display: flex;
    justify-content: space-between;
    min-width: 335px;
    margin-top: 1.5rem; }
    @media (max-width: 400px) {
      .womanCollection .womanCollectionTop .womenCollectionFeatures {
        flex-direction: column;
        align-items: center; } }
    .womanCollection .womanCollectionTop .womenCollectionFeatures div {
      color: #b9b9b9;
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
      text-transform: uppercase; }
      @media (max-width: 400px) {
        .womanCollection .womanCollectionTop .womenCollectionFeatures div:not(:last-child) {
          padding-bottom: 1rem; } }
      .womanCollection .womanCollectionTop .womenCollectionFeatures div span {
        color: #2f2f2f; }
  .womanCollection .womanCollectionTop .womenCollectionPrice {
    color: #ef5b70;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    margin-top: 2rem; }
.womanCollection .womanCollectionBottom {
  margin: 0 15rem 5rem 15rem; }
  @media (max-width: 1199px) {
    .womanCollection .womanCollectionBottom {
      margin: 5rem 10rem; } }
  @media (max-width: 991.98px) {
    .womanCollection .womanCollectionBottom {
      margin: 5rem; } }
  @media (max-width: 767.98px) {
    .womanCollection .womanCollectionBottom {
      margin: 3rem; } }
  .womanCollection .womanCollectionBottom .womanCollectionBottomChoose {
    display: flex;
    justify-content: space-between; }
    @media (max-width: 575.98px) {
      .womanCollection .womanCollectionBottom .womanCollectionBottomChoose {
        flex-direction: column;
        align-items: center; } }
    @media (max-width: 575.98px) {
      .womanCollection .womanCollectionBottom .womanCollectionBottomChoose .womenCollectionChoose {
        display: flex;
        flex-direction: column;
        align-items: center; }
        .womanCollection .womanCollectionBottom .womanCollectionBottomChoose .womenCollectionChoose:not(:last-child) {
          padding-bottom: 2rem; } }
    .womanCollection .womanCollectionBottom .womanCollectionBottomChoose .womenCollectionChoose div {
      color: #2f2f2f;
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
      text-transform: uppercase;
      padding-bottom: 1rem; }
    .womanCollection .womanCollectionBottom .womanCollectionBottomChoose .womenCollectionChoose select, .womanCollection .womanCollectionBottom .womanCollectionBottomChoose .womenCollectionChoose input {
      color: #bcbcbc;
      font-size: 13px;
      font-weight: 400;
      line-height: 24px;
      text-transform: uppercase;
      border: 1px solid #eaeaea;
      background-color: #ffffff;
      background: none;
      padding: 0.5rem 1rem;
      width: 144px; }
      .womanCollection .womanCollectionBottom .womanCollectionBottomChoose .womenCollectionChoose select:focus, .womanCollection .womanCollectionBottom .womanCollectionBottomChoose .womenCollectionChoose input:focus {
        outline: none;
        border-color: #f16d7f; }
    .womanCollection .womanCollectionBottom .womanCollectionBottomChoose .womenCollectionChoose input {
      padding: 0.3rem 1rem; }

.alsoTitle {
  color: #4d4d4d;
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase; }
.feturedButton {
  background-color: #f16d7f;
  color: #ffffff;
  margin-top: 3rem;
  padding: 1rem 1.5rem;
  border-left: 1px solid #f16d7f; }
  .feturedButton i {
    padding-left: 0.5rem; }
  .feturedButton:hover {
    background-color: #ffffff;
    color: #f16d7f; }

</style>