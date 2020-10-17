export default () => {
    let app = new Vue ({
        el: '#app',
        data: {
            catalogItems: [],
            basketItems: [],
            showBasket: false,
            catalogUrl: 'https://raw.githubusercontent.com/Timon4eg/static/master/JSON/catalog.json',
            basketUrl: 'https://raw.githubusercontent.com/Timon4eg/static/master/JSON/basket.json',
        },
        methods: {
            get(url) {
                return fetch(url)
                    .then(data => data.json())
            },
            add(product) {
                let find = this.basketItems.find(el => el.productId == product.productId);
                    if (!find) {
                        this.basketItems.push(Object.assign({}, product, { amount: 1 }));
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
            },
        },
        mounted () {
            this.get(this.catalogUrl).then(items => this.catalogItems = items);
            this.get(this.basketUrl).then(basket => this.basketItems = basket.content);
        },    
    })
}