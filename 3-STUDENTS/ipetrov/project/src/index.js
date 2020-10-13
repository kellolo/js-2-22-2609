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
            basketItems += item;
        },
    },
    mounted() {
        this._get(this.catalogURL)
        .then(items => 
            {this.catalogItems = items; console.log(this.catalogItems)
            })
        this._get(this.basketURL)
        .then(items => 
            {this.basketItems = items.content; console.log(this.basketItems)
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


