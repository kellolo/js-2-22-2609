<template>
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
                <div class="subTotal">sub total <span>&#36;900</span></div>
                <div class="grandTotal">grand total <span>&#36;900</span></div>
                <button>proceed to checkout</button>
            </div>
        </div>
    </div>
</template>