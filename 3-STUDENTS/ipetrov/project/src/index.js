import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout/styles/style.css'

const app = new Vue({
    el: '#app',
    data: {
        catalogURL: 'https://raw.githubusercontent.com/kpe4et/static/master/JSON/catalog.json',
        catalogItems: [],
        basketURL: 'https://raw.githubusercontent.com/kpe4et/static/master/JSON/basket.json',
        basketItems: [],
        show: false,
    },
    methods: {
        _get(url) {
            return fetch(url).then(d => d.json())
        },
        add(item) {
            let find = this.basketItems.find(el => el.productId == item.productId);
            if (!find) {
                this.basketItems.push(Object.assign(item, { amount: 1 }));
            } else {
                find.amount++;
            }
        },
    },
    mounted() {
        this._get(this.catalogURL)
        .then(items => 
            {this.catalogItems = items;
            })
        this._get(this.basketURL)
        .then(items => 
            {this.basketItems = items.content;
            })
    }
})



// import app from "./components"
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './layout/styles/style.css'

// app();

// let find = this.items.find(el => el.productId == product.productId);
// if (!find) {
//     this.items.push(Object.assign(product, { amount: 1 }));
// } else {
//     find.amount++;
// }

{/* <button id="basket-toggler"><img class="header__cart" src="../src/assets/imgs/cart.png" alt="cart"></button>
<!-- DROP CART -->
<div class="drop invisible" id="basket">
    <div id="basket-items">
        
    </div>
    <div class="drop__total">
        <div>TOTAL</div>
        <div id="total-sum"></div>
    </div>
    <a href="checkout.html" class="drop__link">Checkout</a>
    <a href="#" class="drop__link">Go to cart</a>
</div> */}
