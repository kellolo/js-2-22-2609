<template>
  <div>
    <Header ref="header"/>
    <Nav />
    <NewArrivals />

    <main>
        <div class="productDetailsAll container" id="basket2">
            <div class="productDetailsTitles">
                <div class="productDetailsTitlesLeft">Product Details</div>
                <div class="productDetailsTitlesRight">
                    <div>unite Price</div>
                    <div>quantity</div>
                    <div>shipping</div>
                    <div>Subtotal</div>
                    <div>Action</div>
                </div>
            </div>

            <CartItems v-for="item of ITEMS" :key="item.productId" :item="item"/>
            <div class="productDetailsButtons">
                <button @click="CLEAR_BASKET">cLEAR SHOPPING CART</button>
                <button>cONTINUE sHOPPING</button>
            </div>
        </div>

        <!-------------------------------PRODUCT DETAILS END----------------------------->

        <div class="shipping container">
            <div class="shippingAdress">
                <div class="shippingTitles">Shipping Adress</div>
                <form>
                    <select name="" id="country">
                        <option value="Imagination">Imaginationland</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                    </select>
                    <input type="text" placeholder="State" pattern = '^[a-zA-Z_ ]*$'>
                    <input type="text" placeholder="Postcode / Zip" pattern = '^[0-9]+$'>
                    <button>get a quote</button>
                </form>
            </div>
            <div class="couponDiscount">
                <div class="shippingTitles">coupon  discount</div>
                <form>
                    <div>Enter your coupon code if you have one</div>
                    <input type="text" placeholder="State" pattern = '^[a-zA-Z_ ]*$'>
                    <button>Apply coupon</button>
                </form>
            </div>
            <div class="proceedToCheckout">
                <div>
                    <div class="subTotal">sub total <span>&#36;{{ SUM }}</span></div>
                    <div class="grandTotal">grand total <span>&#36;{{ SUM }}</span></div>
                    <button>proceed to checkout</button>
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
import CartItems from "../components/additional/CartItems.vue";
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        Header,
        Basket,
        Nav,
        NewArrivals,
        Subscribe,
        Contacts,
        Footer,
        CartItems
        },
    mounted() {
           this.GET_BASKET_ITEM()
    },
    methods: {
        ...mapActions([
            'GET_BASKET_ITEM', 'CLEAR_BASKET'
        ]),
    },
    computed: {
      ...mapGetters([
                'ITEMS', 'SUM'
            ]),
    }

}

</script>

<style>
.productDetailsAll {
  margin-top: 90px;
  display: flex;
  flex-direction: column; }

.productDetailsTitles {
  display: flex;
  justify-content: space-between;
  color: #222222;
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: -0.2px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e3e3e3; }

.productDetailsTitlesLeft {
  width: 40%; }

.productDetailsTitlesRight {
  display: flex;
  width: 60%;
  justify-content: space-between; }

.productDetailsProduct {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  padding-top: 20px;
  padding-bottom: 20px; }
  .productDetailsProduct:last-child {
    padding-bottom: 0; }

.productDetailsDescription {
  display: flex;
  width: 430px; }
  .productDetailsDescription img {
    padding-right: 21px; }

.productDescription {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 15px; }

.productDescriptionTitle {
  color: #222222;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase; }

.productDescriptionFeature {
  font-size: 13px;
  line-height: 20px;
  color: #575757;
  font-weight: 700; }
  .productDescriptionFeature span {
    font-weight: 300; }

.productDetailsRight {
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding-left: 60px;
  padding-right: 15px; }

.productDetailsPrice {
  color: #656565;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px; }

.productDetailsQuantity form input {
  width: 54px;
  height: 30px;
  border: 1px solid #eaeaea;
  outline: none;
  text-align: center;
}


.productDetailsShipping {
  color: #656565;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  text-transform: uppercase; }

.productDetailsSubtotal {
  color: #656565;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px; }

.productDetailsAction {
  color: #c0c0c0;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase; }
  .productDetailsAction:hover {
    color: #f16d7f;
    cursor: pointer; }

.productDetailsButtons {
  display: flex;
  justify-content: space-between; }
  .productDetailsButtons button {
    color: #4a4a4a;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    outline: none;
    border: 1px solid #eaeaea;
    background-color: #ffffff;
    padding: 20px 40px;
    margin-top: 50px; }
    .productDetailsButtons button:hover {
      background-color: #f16d7f;
      color: #ffffff;
      cursor: pointer; }

/*-------------------------------PRODUCT DETAILS END-----------------------------*/
.shipping {
  height: 268px;
  margin-top: 63px;
  display: flex;
  justify-content: space-between; }

.shippingAdress {
  display: flex;
  flex-direction: column; }
  .shippingAdress form {
    display: flex;
    flex-direction: column; }
  .shippingAdress select {
    outline: none;
    border: 1px solid #eaeaea;
    -webkit-appearance: none;
    background: url("../assets/imgs/caret.jpg") no-repeat;
    background-position: 97% 50%;
    width: 355px;
    height: 45px;
    padding-left: 15px;
    color: #b1b1b1;
    font-size: 13px;
    font-weight: 300; }

.shippingAdress form input, .couponDiscount form input {
  outline: none;
  border: 1px solid #eaeaea;
  width: 355px;
  height: 45px; }
  .shippingAdress form input::placeholder, .couponDiscount form input::placeholder {
    color: #b1b1b1;
    font-size: 13px;
    font-weight: 300; }
  .shippingAdress form input[type="text"], .couponDiscount form input[type="text"] {
    text-indent: 15px; }

.shippingAdress form button, .couponDiscount form button {
  color: #4a4a4a;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #eaeaea;
  background-color: #ffffff;
  width: 118px;
  height: 35px; }
  .shippingAdress form button:hover, .couponDiscount form button:hover {
    background-color: #f16d7f;
    color: #ffffff;
    cursor: pointer; }

.shippingAdress form > select, .shippingAdress form > input, .shippingAdress form > button {
  margin-top: 20px; }

.couponDiscount {
  display: flex;
  flex-direction: column; }
  .couponDiscount form {
    display: flex;
    flex-direction: column; }
    .couponDiscount form div {
      color: #000000;
      font-size: 14px;
      font-weight: 300; }

.couponDiscount form > div, .couponDiscount form > input, .couponDiscount form > button {
  margin-top: 20px; }

.proceedToCheckout {
  display: flex;
  flex-direction: column; }

.shippingTitles {
  color: #222222;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase; }

.proceedToCheckout > div {
  display: flex;
  flex-direction: column;
  background-color: #f5f3f3;
  width: 360px;
  align-items: flex-end; }
  .proceedToCheckout > div button {
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    width: 273px;
    height: 50px;
    background-color: #f16d7f;
    border: none;
    outline: none;
    margin: 40px; }
    .proceedToCheckout > div button:hover {
      background-color: #cccccc;
      color: #f16d7f;
      cursor: pointer; }

.subTotal {
  color: #4a4a4a;
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
  padding-top: 40px;
  padding-right: 40px; }
  .subTotal span {
    padding-left: 20px; }

.grandTotal {
  color: #222222;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  padding-top: 15px;
  padding-right: 40px; }
  .grandTotal span {
    color: #f16d7f;
    padding-left: 15px; }
</style>