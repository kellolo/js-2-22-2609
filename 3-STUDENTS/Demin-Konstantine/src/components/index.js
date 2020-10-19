export default () => {
    let app = new Vue({
        el: '#app',
        data: {
            basketURL: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
            catalogURL: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
            basketItems: [],
            catalogItems: [],
            showBasket: false
        },
        methods: {
            get(URL) {
                return fetch(URL).then(d => d.json())
            },
            add(product) {
                let find = this.basketItems.find(el => el.productId == product.productId);
                if (!find) {
                    let newItem = Object.assign({}, product, { amount: 1 })
                    this.basketItems.push(newItem);
                } else {
                    find.amount++;
                }
            },
            remove(id) {
                let find = this.basketItems.find(el => el.productId == id);
                if (find.amount > 1) {
                    find.amount--;
                } else {
                    this.basketItems.splice(this.basketItems.indexOf(find), 1);
                }
            }
        },
        mounted() {
            this.get(this.catalogURL).then(items => this.catalogItems = items);
            this.get(this.basketURL).then(basket => this.basketItems = basket.content);
        }
    })
}