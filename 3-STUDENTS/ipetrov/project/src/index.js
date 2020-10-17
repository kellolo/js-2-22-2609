import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout/styles/style.css'
import Vue from 'vue'
import App from './App.vue'

new Vue({
    render: h => h(App)
}).$mount('#app');

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
        remove(item) {
            let find = this.basketItems.find(el => el.productId == item.productId);
            this.basketItems.splice(this.basketItems.indexOf(find), 1);
        }
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