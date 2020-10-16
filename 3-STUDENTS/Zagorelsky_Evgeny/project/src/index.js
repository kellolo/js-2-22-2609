// import app from './components'
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './layout/styles/style.css'

// app();

const app = new Vue({
    el: '#app',
    data: {
        catalogURL:'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
        basketURL: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
        items: [],
        basket: [],
        show: false,
    },
    methods:{
        _get(url) {
            return fetch(url).then(data => data.json())
        },
        add(product) {
            let find = this.basket.find(el => el.productId == product.productId);
                if (!find) {
                    this.basket.push(Object.assign(product, { amount: 1 }));
                } else {
                    find.amount++;
                };
        },
        remove(id) {
            let find = this.basket.find(el => el.productId == id);
                if (find.amount > 1) {
                    find.amount--;
                } else {
                    this.basket.splice(this.basket.indexOf(find), 1);
            }
        },
    },
    mounted() {
        this._get(this.catalogURL)
            .then(items => { this.items = items})

        this._get(this.basketURL)
            .then(basket => {this.basket = basket.content})
    }
})