//import Basket from './basket.js'
//import Catalog from './catalog.js'

export default () => {
    //let basket = new Basket();
    //let catalog = new Catalog(basket);

    var app = new Vue({
        el: '#app',
        data: {
            catalogURL: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
            basketURL: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
            items: [],
            basketArr: [],
            show: true,
            totalSum: 0
        },
        methods: {
            _get(url) {
                return fetch(url).then(d => d.json())
            },
            add(product) {
                let find = this.basketArr.find(el => el.productId == product.productId);
                if (!find) {
                    this.basketArr.push(Object.assign(product, { amount: 1 }));
                } else {
                    find.amount++;
                };
                this.sum();
            },
            remove(id) {
                let find = this.basketArr.find(el => el.productId == id);
                if (find.amount > 1) {
                    find.amount--;
                } else {
                    this.basketArr.splice(this.basketArr.indexOf(find), 1);
                }
                this.sum();
            },
            sum() {
                this.totalSum = this.basketArr.reduce( (total, value) =>{
                    return (total + value.amount * value.productPrice)
                }, 0);
                 return this.totalSum;
            }
        },
        mounted() {
            this._get(this.catalogURL)
                .then(item => {this.items = item});
            this._get(this.basketURL)
                .then(basket => {this.basketArr = basket.content})
                .finally(() => {
                    this.sum();
                })
        }
    })
}