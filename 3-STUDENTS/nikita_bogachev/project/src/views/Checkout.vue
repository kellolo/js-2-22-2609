<template>
  <div>
        <Header ref="header"/>
        <Nav />
        <NewArrivals />
        <main>

            <details class="container mt-5 border-bottom pb-4">
                <summary class="checkoutSummary d-flex justify-content-center
                                d-lg-flex justify-content-lg-start
                                d-md-flex justify-content-md-center
                                d-sm-flex justify-content-sm-center">
                    01. <span>Shipping Adress</span>
                </summary>
                <div class="row container pl-5">

                    <div class="col-lg-6 offset-lg-0 px-lg-0 pt-lg-4
                                col-md-6 offset-md-4 px-md-0 pt-md-4
                                col-sm-6 offset-sm-3 px-sm-0 pt-sm-4">
                        <div class="detailsTitle">Check as a guest or register</div>

                        <div class="detailsTitleBottom pt-1">Register with us for future convenience</div>

                        <div class="detailsRadio form-check pt-3">
                            <input type="radio" class="form-check-input with-gap" name="groupOfRadioGap">
                            <label class="form-check-label pl-1" for="radioGap1">checkout as guest</label>
                        </div>

                        <div class="detailsRadio pt-2 form-check">
                                <input type="radio" class="form-check-input with-gap detailsRegisterWrapRadio"  name="groupOfRadioGap" checked>
                                <label class="form-check-label pl-1" for="radioGap2">register</label>
                        </div>

                        <div class="detailsTitle pt-3">register and save time!</div>
                        <div class="detailsTitleBottom pt-1">Register with us for future convenience</div>
                        <div class="detailsTitleBottom pt-3"><i class="fas fa-angle-double-right"></i> Fast and easy checkout</div>
                        <div class="detailsTitleBottom pt-1"><i class="fas fa-angle-double-right"></i> Easy access to your order history and status</div>

                        <div class="detailsButton row-cols-3 pt-4">
                            <button type="button" class="col btn btn-outline-secondary">Continue</button>
                        </div>
                    </div>

                    <div class="col-lg-6 offset-lg-0 px-lg-0 pt-lg-4
                                col-md-6 offset-md-4 px-md-0 pt-md-5
                                col-sm-6 offset-sm-3 px-sm-0 pt-sm-5">
                        <div class="detailsTitle">Already registed?</div>

                        <div class="detailsTitleBottom pt-1">Please log in below</div>

                        <form class="pt-3">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address<span> *</span></label>
                                <input type="email" class="form-control" aria-describedby="emailHelp" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password<span> *</span></label>
                                <input type="password" class="form-control" required>
                            </div>
                            <div class="requiredText">* Required Fileds</div>
                            <div class="detailsButton row-cols-3 pt-4 d-flex align-items-center">
                                <button type="button" class="col btn btn-outline-secondary">log in</button>
                                <div class="col">Forgot Password ?</div>
                            </div>
                        </form>
                    </div>
                </div>
            </details>

            <details class="container mt-5 border-bottom pb-4">
                <summary class="checkoutSummary d-flex justify-content-center
                                d-lg-flex justify-content-lg-start
                                d-md-flex justify-content-md-center
                                d-sm-flex justify-content-sm-center">
                    02. <span>BILLING INFORMATION</span>
                </summary>
                <div class="row container pl-5">

                    <div class="col-lg-6 offset-lg-0 px-lg-0 pt-lg-4
                                col-md-6 offset-md-4 px-md-0 pt-md-5
                                col-sm-6 offset-sm-3 px-sm-0 pt-sm-5">
                        <div class="detailsTitle">Check as a guest or register</div>

                        <div class="detailsTitleBottom pt-1">Register with us for future convenience</div>

                        <div class="detailsRadio form-check pt-3">
                            <input type="radio" class="form-check-input with-gap" name="groupOfRadioGap">
                            <label class="form-check-label pl-1" for="radioGap1">checkout as guest</label>
                        </div>

                        <div class="detailsRadio pt-2 form-check">
                            <input type="radio" class="form-check-input with-gap detailsRegisterWrapRadio"  name="groupOfRadioGap" checked>
                            <label class="form-check-label pl-1" for="radioGap2">register</label>
                        </div>

                        <div class="detailsTitle pt-3">register and save time!</div>
                        <div class="detailsTitleBottom pt-1">Register with us for future convenience</div>
                        <div class="detailsTitleBottom pt-3"><i class="fas fa-angle-double-right"></i> Fast and easy checkout</div>
                        <div class="detailsTitleBottom pt-1"><i class="fas fa-angle-double-right"></i> Easy access to your order history and status</div>

                        <div class="detailsButton row-cols-3 pt-4">
                            <button type="button" class="col btn btn-outline-secondary">Continue</button>
                        </div>
                    </div>

                    <div class="col-lg-6 offset-lg-0 px-lg-0 pt-lg-4
                                col-md-6 offset-md-4 px-md-0 pt-md-5
                                col-sm-6 offset-sm-3 px-sm-0 pt-sm-5">
                        <div class="detailsTitle">Already registed?</div>

                        <div class="detailsTitleBottom pt-1">Please log in below</div>

                        <form class="pt-3">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address<span> *</span></label>
                                <input type="email" class="form-control" aria-describedby="emailHelp" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password<span> *</span></label>
                                <input type="password" class="form-control" required>
                            </div>
                            <div class="requiredText">* Required Fileds</div>
                            <div class="detailsButton row-cols-3 pt-4 d-flex align-items-center">
                                <button type="button" class="col btn btn-outline-secondary">log in</button>
                                <div class="col">Forgot Password ?</div>
                            </div>
                        </form>
                    </div>
                </div>
            </details>

            <details class="container mt-5 border-bottom pb-4">
                <summary class="checkoutSummary d-flex justify-content-center
                                d-lg-flex justify-content-lg-start
                                d-md-flex justify-content-md-center
                                d-sm-flex justify-content-sm-center">
                    03. <span>SHIPPING INFORMATION</span>
                </summary>
                <div class="row container pl-5">

                    <div class="col-lg-6 offset-lg-0 px-lg-0 pt-lg-4
                                col-md-6 offset-md-4 px-md-0 pt-md-5
                                col-sm-6 offset-sm-3 px-sm-0 pt-sm-5">
                        <div class="detailsTitle">Check as a guest or register</div>

                        <div class="detailsTitleBottom pt-1">Register with us for future convenience</div>

                        <div class="detailsRadio form-check pt-3">
                            <input type="radio" class="form-check-input with-gap" name="groupOfRadioGap">
                            <label class="form-check-label pl-1" for="radioGap1">checkout as guest</label>
                        </div>

                        <div class="detailsRadio pt-2 form-check">
                            <input type="radio" class="form-check-input with-gap detailsRegisterWrapRadio"  name="groupOfRadioGap" checked>
                            <label class="form-check-label pl-1" for="radioGap2">register</label>
                        </div>

                        <div class="detailsTitle pt-3">register and save time!</div>
                        <div class="detailsTitleBottom pt-1">Register with us for future convenience</div>
                        <div class="detailsTitleBottom pt-3"><i class="fas fa-angle-double-right"></i> Fast and easy checkout</div>
                        <div class="detailsTitleBottom pt-1"><i class="fas fa-angle-double-right"></i> Easy access to your order history and status</div>

                        <div class="detailsButton row-cols-3 pt-4">
                            <button type="button" class="col btn btn-outline-secondary">Continue</button>
                        </div>
                    </div>

                    <div class="col-lg-6 offset-lg-0 px-lg-0 pt-lg-4
                                col-md-6 offset-md-4 px-md-0 pt-md-5
                                col-sm-6 offset-sm-3 px-sm-0 pt-sm-5">
                        <div class="detailsTitle">Already registed?</div>

                        <div class="detailsTitleBottom pt-1">Please log in below</div>

                        <form class="pt-3">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address<span> *</span></label>
                                <input type="email" class="form-control" aria-describedby="emailHelp" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password<span> *</span></label>
                                <input type="password" class="form-control" required>
                            </div>
                            <div class="requiredText">* Required Fileds</div>
                            <div class="detailsButton row-cols-3 pt-4 d-flex align-items-center">
                                <button type="button" class="col btn btn-outline-secondary">log in</button>
                                <div class="col">Forgot Password ?</div>
                            </div>
                        </form>
                    </div>
                </div>
            </details>

            <details class="container mt-5 border-bottom pb-4">
                <summary class="checkoutSummary d-flex justify-content-center
                                d-lg-flex justify-content-lg-start
                                d-md-flex justify-content-md-center
                                d-sm-flex justify-content-sm-center">
                    04. <span>SHIPPING METHOD</span>
                </summary>
                <div class="row container pl-5">

                    <div class="col-lg-6 offset-lg-0 px-lg-0 pt-lg-4
                                col-md-6 offset-md-4 px-md-0 pt-md-5
                                col-sm-6 offset-sm-3 px-sm-0 pt-sm-5">
                        <div class="detailsTitle">Check as a guest or register</div>

                        <div class="detailsTitleBottom pt-1">Register with us for future convenience</div>

                        <div class="detailsRadio form-check pt-3">
                            <input type="radio" class="form-check-input with-gap" name="groupOfRadioGap">
                            <label class="form-check-label pl-1" for="radioGap1">checkout as guest</label>
                        </div>

                        <div class="detailsRadio pt-2 form-check">
                            <input type="radio" class="form-check-input with-gap detailsRegisterWrapRadio"  name="groupOfRadioGap" checked>
                            <label class="form-check-label pl-1" for="radioGap2">register</label>
                        </div>

                        <div class="detailsTitle pt-3">register and save time!</div>
                        <div class="detailsTitleBottom pt-1">Register with us for future convenience</div>
                        <div class="detailsTitleBottom pt-3"><i class="fas fa-angle-double-right"></i> Fast and easy checkout</div>
                        <div class="detailsTitleBottom pt-1"><i class="fas fa-angle-double-right"></i> Easy access to your order history and status</div>

                        <div class="detailsButton row-cols-3 pt-4">
                            <button type="button" class="col btn btn-outline-secondary">Continue</button>
                        </div>
                    </div>

                    <div class="col-lg-6 offset-lg-0 px-lg-0 pt-lg-4
                                col-md-6 offset-md-4 px-md-0 pt-md-5
                                col-sm-6 offset-sm-3 px-sm-0 pt-sm-5">
                        <div class="detailsTitle">Already registed?</div>

                        <div class="detailsTitleBottom pt-1">Please log in below</div>

                        <form class="pt-3">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address<span> *</span></label>
                                <input type="email" class="form-control" aria-describedby="emailHelp" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password<span> *</span></label>
                                <input type="password" class="form-control" required>
                            </div>
                            <div class="requiredText">* Required Fileds</div>
                            <div class="detailsButton row-cols-3 pt-4 d-flex align-items-center">
                                <button type="button" class="col btn btn-outline-secondary">log in</button>
                                <div class="col">Forgot Password ?</div>
                            </div>
                        </form>
                    </div>
                </div>
            </details>

            <details class=" container mt-5 border-bottom pb-4">
                <summary class="checkoutSummary d-flex justify-content-center
                                d-lg-flex justify-content-lg-start
                                d-md-flex justify-content-md-center
                                d-sm-flex justify-content-sm-center">
                    05. <span>PAYMENT METHOD</span>
                </summary>
                <div class="row container pl-5">

                    <div class="col-lg-6 offset-lg-0 px-lg-0 pt-lg-4
                                col-md-6 offset-md-4 px-md-0 pt-md-5
                                col-sm-6 offset-sm-3 px-sm-0 pt-sm-5">
                        <div class="detailsTitle">Check as a guest or register</div>

                        <div class="detailsTitleBottom pt-1">Register with us for future convenience</div>

                        <div class="detailsRadio form-check pt-3">
                            <input type="radio" class="form-check-input with-gap" name="groupOfRadioGap">
                            <label class="form-check-label pl-1" for="radioGap1">checkout as guest</label>
                        </div>

                        <div class="detailsRadio pt-2 form-check">
                            <input type="radio" class="form-check-input with-gap detailsRegisterWrapRadio"  name="groupOfRadioGap" checked>
                            <label class="form-check-label pl-1" for="radioGap2">register</label>
                        </div>

                        <div class="detailsTitle pt-3">register and save time!</div>
                        <div class="detailsTitleBottom pt-1">Register with us for future convenience</div>
                        <div class="detailsTitleBottom pt-3"><i class="fas fa-angle-double-right"></i> Fast and easy checkout</div>
                        <div class="detailsTitleBottom pt-1"><i class="fas fa-angle-double-right"></i> Easy access to your order history and status</div>

                        <div class="detailsButton row-cols-3 pt-4">
                            <button type="button" class="col btn btn-outline-secondary">Continue</button>
                        </div>
                    </div>

                    <div class="col-lg-6 offset-lg-0 px-lg-0 pt-lg-4
                                col-md-6 offset-md-4 px-md-0 pt-md-5
                                col-sm-6 offset-sm-3 px-sm-0 pt-sm-5">
                        <div class="detailsTitle">Already registed?</div>

                        <div class="detailsTitleBottom pt-1">Please log in below</div>

                        <form class="pt-3">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address<span> *</span></label>
                                <input type="email" class="form-control" aria-describedby="emailHelp" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password<span> *</span></label>
                                <input type="password" class="form-control" required>
                            </div>
                            <div class="requiredText">* Required Fileds</div>
                            <div class="detailsButton row-cols-3 pt-4 d-flex align-items-center">
                                <button type="button" class="col btn btn-outline-secondary">log in</button>
                                <div class="col">Forgot Password ?</div>
                            </div>
                        </form>
                    </div>
                </div>
            </details>

            <details class=" container mt-5 border-bottom pb-4">
                <summary class="checkoutSummary d-flex justify-content-center
                                d-lg-flex justify-content-lg-start
                                d-md-flex justify-content-md-center
                                d-sm-flex justify-content-sm-center">
                    06. <span>ORDER REVIEW</span>
                </summary>
                <div class="row container pl-5">

                    <div class="col-lg-6 offset-lg-0 px-lg-0 pt-lg-4
                                col-md-6 offset-md-4 px-md-0 pt-md-5
                                col-sm-6 offset-sm-3 px-sm-0 pt-sm-5">
                        <div class="detailsTitle">Check as a guest or register</div>

                        <div class="detailsTitleBottom pt-1">Register with us for future convenience</div>

                        <div class="detailsRadio form-check pt-3">
                            <input type="radio" class="form-check-input with-gap" name="groupOfRadioGap">
                            <label class="form-check-label pl-1" for="radioGap1">checkout as guest</label>
                        </div>

                        <div class="detailsRadio pt-2 form-check">
                            <input type="radio" class="form-check-input with-gap detailsRegisterWrapRadio"  name="groupOfRadioGap" checked>
                            <label class="form-check-label pl-1" for="radioGap2">register</label>
                        </div>

                        <div class="detailsTitle pt-3">register and save time!</div>
                        <div class="detailsTitleBottom pt-1">Register with us for future convenience</div>
                        <div class="detailsTitleBottom pt-3"><i class="fas fa-angle-double-right"></i> Fast and easy checkout</div>
                        <div class="detailsTitleBottom pt-1"><i class="fas fa-angle-double-right"></i> Easy access to your order history and status</div>

                        <div class="detailsButton row-cols-3 pt-4">
                            <button type="button" class="col btn btn-outline-secondary">Continue</button>
                        </div>
                    </div>

                    <div class="col-lg-6 offset-lg-0 px-lg-0 pt-lg-4
                                col-md-6 offset-md-4 px-md-0 pt-md-5
                                col-sm-6 offset-sm-3 px-sm-0 pt-sm-5">
                        <div class="detailsTitle">Already registed?</div>

                        <div class="detailsTitleBottom pt-1">Please log in below</div>

                        <form class="pt-3">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address<span> *</span></label>
                                <input type="email" class="form-control" aria-describedby="emailHelp" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password<span> *</span></label>
                                <input type="password" class="form-control" required>
                            </div>
                            <div class="requiredText">* Required Fileds</div>
                            <div class="detailsButton row-cols-3 pt-4 d-flex align-items-center">
                                <button type="button" class="col btn btn-outline-secondary">log in</button>
                                <div class="col">Forgot Password ?</div>
                            </div>
                        </form>
                    </div>
                </div>
            </details>

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
export default {
    components: {
        Header,
        Basket,
        Nav,
        NewArrivals,
        Subscribe,
        Contacts,
        Footer
        },
}
</script>

<style>
.btn-outline-secondary {
  color: #a4a4a4;
  border-color: #e6e6e6;
  border-left: none; }
  .btn-outline-secondary:hover {
    color: #fff;
    background-color: #f16d7f;
    border-color: #f16d7f; }

.btn-outline-secondary:not(:disabled):not(.disabled).active:focus, .btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .show > .btn-outline-secondary.dropdown-toggle:focus {
  box-shadow: none; }

.btn-outline-secondary:not(:disabled):not(.disabled).active, .btn-outline-secondary:not(:disabled):not(.disabled):active, .show > .btn-outline-secondary.dropdown-toggle {
  color: #fff;
  background-color: #f16d7f;
  border-color: #f16d7f; }
</style>