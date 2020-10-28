<template>
  <div>
        <Header ref="header"/>
        <Nav />
        <NewArrivals />
        <main>

            <div class="container my-5 pb-0 pb-lg-5 px-0">
                <div class="row">

                    <div class="col-10 offset-1
                                col-sm-12 offset-sm-0
                                col-md-12 d-sm-flex justify-sm-content-between
                                col-lg-3 pr-lg-4 d-lg-block ">

                        <details class="pl-0 pr-0
                                        col-sm-4 pr-sm-4
                                        col-lg-12 pr-lg-3 ">
                            <summary class="d-flex justify-content-between align-items-center py-2 pl-2">
                                <span>Category</span>
                                <i class="fas fa-caret-down"></i>
                                <i class="fas fa-caret-up"></i>
                            </summary>
                            <div class="d-flex flex-column">
                                <a href="#">Accessories</a>
                                <a href="#">Bags</a>
                                <a href="#">Denim</a>
                                <a href="#">Hoodies &amp; Sweatshirts</a>
                                <a href="#">Jackets &amp; Coats</a>
                                <a href="#">Pants</a>
                                <a href="#">Polos</a>
                                <a href="#">Shirts</a>
                                <a href="#">Shoes</a>
                                <a href="#">Shorts</a>
                                <a href="#">Sweaters &amp; Knits</a>
                                <a href="#">T-Shirts</a>
                                <a href="#">Tanks</a>
                            </div>
                        </details>

                        <details class="pl-0 pr-0 mt-4
                                        col-sm-4 pr-sm-4 mt-sm-0
                                        col-lg-12 pt-lg-4 pl-lg-0 pr-lg-3 ">
                            <summary class="d-flex justify-content-between align-items-center py-2 pl-2">
                                <span>Brand</span>
                                <i class="fas fa-caret-down"></i>
                                <i class="fas fa-caret-up"></i>
                            </summary>
                            <div class="d-flex flex-column">
                                <a href="#">Accessories</a>
                                <a href="#">Bags</a>
                                <a href="#">Denim</a>
                                <a href="#">Hoodies &amp; Sweatshirts</a>
                                <a href="#">Jackets &amp; Coats</a>
                                <a href="#">Pants</a>
                                <a href="#">Polos</a>
                                <a href="#">Shirts</a>
                                <a href="#">Shoes</a>
                                <a href="#">Shorts</a>
                                <a href="#">Sweaters &amp; Knits</a>
                                <a href="#">T-Shirts</a>
                                <a href="#">Tanks</a>
                            </div>
                        </details>

                        <details class="pl-0 pr-0 mt-4
                                        col-sm-4 mt-sm-0
                                        col-lg-12 pt-lg-4 pl-lg-0 pr-lg-3">
                            <summary class="d-flex justify-content-between align-items-center py-2 pl-2">
                                <span>Designer</span>
                                <i class="fas fa-caret-down"></i>
                                <i class="fas fa-caret-up"></i>
                            </summary>
                            <div class="d-flex flex-column">
                                <a href="#">Accessories</a>
                                <a href="#">Bags</a>
                                <a href="#">Denim</a>
                                <a href="#">Hoodies &amp; Sweatshirts</a>
                                <a href="#">Jackets &amp; Coats</a>
                                <a href="#">Pants</a>
                                <a href="#">Polos</a>
                                <a href="#">Shirts</a>
                                <a href="#">Shoes</a>
                                <a href="#">Shorts</a>
                                <a href="#">Sweaters &amp; Knits</a>
                                <a href="#">T-Shirts</a>
                                <a href="#">Tanks</a>
                            </div>
                        </details>
                    </div>

                    <div class="col-10 offset-1 col-sm-12 offset-sm-0
                                col-md-12 offset-md-0
                                col-lg-9">
                        <div class="row no-gutters d-flex justify-content-around justify-content-md-between">
                            <div class="no-gutters
                                        col-8 mt-5
                                        col-sm-6 offset-sm-0 pr-sm-4
                                        col-md-3 pr-md-0
                                        mt-lg-0">
                                <div class="productFeaturesTitle">Trending now</div>

                                <div class="productFeatures row col-12 no-gutters pt-2">
                                    <a href="#" class="col-5 border-right">Bohemian</a>
                                    <a href="#" class="col-4 border-right pl-3">Floral</a>
                                    <a href="#" class="col-3 pl-3">Lace</a>
                                    <a href="#" class="col-3 border-right">Floral </a>
                                    <a href="#" class="col-4 border-right pl-3">Lace</a>
                                    <a href="#" class="col-5 pl-3">Bohemian</a>
                                </div>
                            </div>

                            <div class="no-gutters
                                        col-8 mt-5
                                        col-sm-6
                                        col-md-4 pl-md-3
                                        pl-lg-0 mt-lg-0">
                                <div class="productFeaturesTitle">Size</div>

                                <form class="productSizes row col-12 no-gutters pt-2">
                                    <div class="col-3 productFeatures">
                                        <input type="checkbox" id="xxs" name="xxs">
                                        <label for="xxs">xxs</label>
                                    </div>
                                    <div class="col-3 productFeatures pl-lg-2">
                                        <input type="checkbox" id="xs" name="xs">
                                        <label for="xs">xs</label>
                                    </div>
                                    <div class="col-3 productFeatures pl-lg-2">
                                        <input type="checkbox" id="s" name="s">
                                        <label for="s">s</label>
                                    </div>
                                    <div class="col-3 productFeatures">
                                        <input type="checkbox" id="m" name="m">
                                        <label for="m">m</label>
                                    </div>
                                    <div class="col-3 productFeatures">
                                        <input type="checkbox" id="l" name="l">
                                        <label for="l">l</label>
                                    </div>
                                    <div class="col-3 productFeatures pl-lg-2">
                                        <input type="checkbox" id="xl" name="xl">
                                        <label for="xl">xl</label>
                                    </div>
                                    <div class="col-3 productFeatures ml-lg-2">
                                        <input type="checkbox" id="xxl" name="xxl">
                                        <label for="xxl">xxl</label>
                                    </div>
                                </form>
                            </div>

                            <div class="col-10 mt-5 offset-0
                                        col-sm-10
                                        col-md-4
                                        mt-lg-0">
                                <div>
                                    <form>
                                        <div class="form-group productFeaturesTitle mb-0">
                                            <label for="formControlRange">Price</label>
                                            <input type="range" class="form-control-range" id="formControlRange">
                                        </div>
                                    </form>
                                </div>
                                <div class="productFeatures d-flex justify-content-between">
                                    <div class="">&#36;52</div>
                                    <div class="">&#36;400</div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4 sortBy d-flex justify-content-around justify-content-md-start">
                            <form class="py-3">
                                <label class="px-2 ml-3 mb-0" for="sortBy">Sort By</label>
                                <select class="" id="sortBy">
                                    <option selected>Name</option>
                                    <option value="1">Price</option>
                                </select>
                            </form>
                            <form class="py-3">
                                <label class="px-2 ml-3 mb-0" for="sortBy1">Show</label>
                                <select class="" id="sortBy1">
                                    <option selected>09</option>
                                    <option value="1">18</option>
                                    <option value="2">36</option>
                                    <option value="3">All</option>
                                </select>
                            </form>
                        </div>

                        <!-------------------------------FETURED ST----------------------------->

                        
                            <Catalog @add="_add"/>
                        

                        <div class="d-flex flex-column align-items-center justify-content-around mt-5 flex-sm-row justify-content-sm-between">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true"><i class="fas fa-angle-left"></i></span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                                    <li class="page-item"><a class="page-link" href="#">6</a></li>
                                    <li class="page-item"><a class="page-link" href="#">...</a></li>
                                    <li class="page-item"><a class="page-link" href="#">20</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true"><i class="fas fa-angle-right"></i></span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <button type="button" class="productsButton mt-4 mt-sm-0">View all</button>
                        </div>

                    </div>
                </div>
            </div>
            <!-------------------------------FETURED END----------------------------->

                <div class="productsFeaturesBg py-5 ">
                    <div class="container py-3 px-0">

                            <div class="d-flex justify-content-between align-items-center row
                                            justify-content-lg-around ">

                                <div class="productsFeaturesText
                                            col-10 offset-1
                                            col-sm-8 offset-sm-2
                                            col-md-6 offset-md-0
                                            col-lg-4">
                                    <img src="../../src/assets/imgs/Truck.png" alt="Truck">
                                    <div>Free Delivery</div>
                                    <div>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
                                </div>
                                <div class="productsFeaturesText
                                            col-10 offset-1 pt-5
                                            col-sm-8 offset-sm-2
                                            col-md-6 offset-md-0 pt-md-0
                                            col-lg-4">
                                    <img src="../../src/assets/imgs/percent.png" alt="percent">
                                    <div>Sales &amp; discounts</div>
                                    <div>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
                                </div>
                                <div class="productsFeaturesText
                                            col-10 offset-1 pt-5
                                            col-sm-8 offset-sm-2
                                            col-md-12 mt-md-5 offset-md-0 pt-md-0
                                            col-lg-4 mt-lg-0">
                                    <img src="../../src/assets/imgs/Crown.png" alt="crown">
                                    <div>Quality assurance</div>
                                    <div>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
                                </div>

                            </div>

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
name: "Home",
  components: {
    Header,
    Basket,
    Nav,
    NewArrivals,
    Catalog,
    Subscribe,
    Contacts,
    Footer
    },
     methods: {
      _add(pl) {
          this.$refs.header.$refs.basket.add(pl);
      }
  },
}
</script>

<style>
.newArrivalsBg {
  background-color: #f8f3f4; }

.newArrivals {
  color: #f16d7f;
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase; }

.newArrivalsPath a {
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: #636363;
  font-weight: 300;
  text-decoration: none; }
  .newArrivalsPath a:after {
    content: "/"; }
  .newArrivalsPath a:last-child:after {
    content: ""; }
  .newArrivalsPath a:last-child {
    font-weight: 700;
    color: #f16d7f; }
details div a {
  text-decoration: none;
  color: #6f6e6e;
  font-size: 14px;
  font-weight: 400;
  line-height: 33px;
  padding-left: calc(1rem - 5px); }
  @media (max-width: 768px) {
    details div a {
      font-size: 20px; } }
  details div a:first-child {
    padding-top: 1rem; }
  details div a:hover {
    text-decoration: none;
    color: #f16d7f; }
details:focus {
  outline: 0; }
details summary {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  border-left: 5px solid #f16d7f;
  border-bottom: 1px solid #ebebeb;
  color: #6f6e6e;
  line-height: 20px; }
  @media (max-width: 768px) {
    details summary {
      font-size: 16px; } }
  details summary:focus {
    outline: 0; }
  details summary::-webkit-details-marker {
    display: none; }
  details summary i:last-child {
    display: none; }

details[open] summary {
  color: #ef5b70; }

details[open] summary .fa-caret-down {
  display: none; }

details[open] summary .fa-caret-up {
  display: block; }

.productFeatures a, .productFeatures input, .productFeatures label, .productFeatures div {
  text-decoration: none;
  color: #6f6e6e;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px; }
  @media (max-width: 768px) {
    .productFeatures a, .productFeatures input, .productFeatures label, .productFeatures div {
      font-size: 16px; } }
.productFeatures a:hover {
  color: #f16d7f; }

.productFeaturesTitle {
  color: #6f6e6e;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase; }
  @media (max-width: 768px) {
    .productFeaturesTitle {
      font-size: 16px; } }

.productSizes div label {
  color: #6f6e6e;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-transform: uppercase;
  margin-bottom: 0; }
  @media (max-width: 768px) {
    .productSizes div label {
      font-size: 16px; } }

.sortBy {
  background-color: #f3f3f3; }
  .sortBy form {
    color: #6f6e6e;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px; }
    @media (max-width: 768px) {
      .sortBy form {
        font-size: 16px; } }
    .sortBy form label {
      background-color: #ffffff; }
      @media (max-width: 355px) {
        .sortBy form label {
          padding: 0 1.2rem !important; } }
    .sortBy form select {
      outline: none;
      border: 1px solid #ebebeb;
      -webkit-appearance: none;
      background: url("../assets/imgs/caret.jpg") no-repeat;
      background-position: 90% 50%;
      padding-left: 0.8rem;
      padding-right: 2rem;
      color: #6f6e6e;
      background-color: #ffffff; }
      @media (max-width: 355px) {
        .sortBy form select {
          margin-left: 1rem; } }

.feturedItems {
  padding-top: 2rem; }
  @media (max-width: 450px) {
    .feturedItems {
      flex: 0 0 100%;
      max-width: 100%;
      margin-left: 0;
      padding-top: 0; } }
  @media (min-width: 767.98px) {
    .feturedItems {
      padding-top: 0; } }

@media (min-width: 1199.98px) {
  .feturedItem {
    margin-top: 2rem; } }
.feturedItem:hover {
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16); }
.feturedItem .feturedImgWrap {
  height: 280px;
  position: relative; }
  .feturedItem .feturedImgWrap img {
    width: 100%;
    display: block;
    height: inherit;
    object-fit: contain;
    object-position: center center; }
    @media (max-width: 450px) {
      .feturedItem .feturedImgWrap img {
        object-fit: contain;
        margin-top: 2rem; } }
  .feturedItem .feturedImgWrap .feturedBuy {
    height: inherit;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: none;
    position: absolute; }
    .feturedItem .feturedImgWrap .feturedBuy button {
      padding: 15px;
      border: 1px solid #ffffff;
      background: none;
      color: white;
      font-size: 13px;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer; }
      .feturedItem .feturedImgWrap .feturedBuy button div {
        margin-right: 10px; }
      .feturedItem .feturedImgWrap .feturedBuy button i {
        padding-right: 10px; }
.feturedItem .feturedItemName {
  color: #222222;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  overflow: hidden;
  padding-top: 0.8rem;
  padding-left: 0.8rem; }
  @media (max-width: 768px) {
    .feturedItem .feturedItemName {
      font-size: 16px;
      padding-top: 0.4rem; } }
  @media (min-width: 768px) and (max-width: 1199.98px) {
    .feturedItem .feturedItemName {
      padding-top: 0; } }
.feturedItem .feturedItemPrice {
  color: #f16d7f;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.4rem 0 0.5rem 0.8rem; }
  @media (max-width: 768px) {
    .feturedItem .feturedItemPrice {
      font-size: 16px;
      padding-left: 0;
      padding-top: 0.4rem; } }
  @media (min-width: 768px) and (max-width: 1199.98px) {
    .feturedItem .feturedItemPrice {
      padding-top: 0.2rem; } }

@media (min-width: 768px) {
  .feturedItem:hover .feturedBuy {
    display: flex;
    justify-content: center;
    align-items: center; } }
.feturedBuySm button {
  border-radius: 3px;
  border: 1px solid #ef5b70;
  background-color: #ffffff;
  color: #ef5b70;
  font-size: 16px;
  font-weight: bold;
  line-height: 26px;
  padding: 0.5rem; }
  .feturedBuySm button:hover {
    background-color: #f16d7f;
    color: #ffffff; }

.pagination {
  border-radius: 3px;
  border: 1px solid #ebebeb;
  background-color: #ffffff;
  margin: 0 !important; }
  .pagination .page-link {
    color: #c4c4c4;
    font-size: 16px;
    font-weight: bold;
    line-height: 26px;
    border: none;
    padding: .545rem .489rem; }
    @media (max-width: 768px) {
      .pagination .page-link {
        font-size: 20px; } }
    .pagination .page-link:hover {
      color: #f16d7f;
      background-color: #ffffff; }

.productsButton, .productsButtonIndex {
  border-radius: 3px;
  border: 1px solid #ef5b70;
  background-color: #ffffff;
  color: #ef5b70;
  font-size: 16px;
  font-weight: bold;
  line-height: 26px;
  padding: 0.5rem 3rem; }
  @media (max-width: 768px) {
    .productsButton, .productsButtonIndex {
      font-size: 20px; } }
  .productsButton:hover, .productsButtonIndex:hover {
    background-color: #f16d7f;
    color: #ffffff; }

.productsFeaturesBg {
  background-color: #222224; }
  .productsFeaturesBg .productsFeaturesText {
    color: #fbfbfb;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; }
    .productsFeaturesBg .productsFeaturesText div {
      margin-top: 1.5rem;
      margin-bottom: 0.5rem; }
      .productsFeaturesBg .productsFeaturesText div:last-child {
        font-size: 14px;
        font-weight: 300;
        line-height: 23.95px;
        margin: 0 1.5rem 0 1.5rem; }
        @media (max-width: 768px) {
          .productsFeaturesBg .productsFeaturesText div:last-child {
            font-size: 16px; } }
        @media (max-width: 1199.98px) {
          .productsFeaturesBg .productsFeaturesText div:last-child {
            margin: 0; } }
        @media (max-width: 991.98px) {
          .productsFeaturesBg .productsFeaturesText div:last-child {
            padding: 0 1rem 0 1rem; } }
</style>
