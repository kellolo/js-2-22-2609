import { displayMenu } from './app';

export default () => {
    displayMenu();
}

const { event } = require("jquery");

const app = new Vue ({
    el: '#app',
    data: {
        catalogUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
        basketUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
        items: [],
        basket: [],
    },
    methods: {
        _get(url) {
            return fetch(url).then(data => data.json())
        },
        _shownBasket () {
            document.querySelector('#basket').classList.toggle('invisible')
        },
        add(product) {
            this.shown == true
            let find = this.basket.find(el => el.productId == product.productId);
                if (!find) {
                    this.basket.push(Object.assign(product, { amount: 1 }));
                } else {
                    find.amount++;
                }
        },
        addInBasket(id){
            let catalogItem = document.querySelector(`#${id}`);
            let datas  = catalogItem.querySelector('button')
            
               let newProd = {
                    productId: datas.dataset.id,
                    productPrice: +datas.dataset.price,
                    productName: datas.dataset.name,
                    productImg: datas.dataset.image
                }

               this.add(newProd);
        },
        _remove(id) {
            let find = this.basket.find(el => el.productId == id);
            if (find.amount > 1) {
                find.amount--;
            } else {
                this.basket.splice(this.items.indexOf(find), 1);
            }
        },
        _sum(){
            let totalSum = 0;
            this.basket.forEach( el =>{totalSum+=el.productPrice*el.amount});
            document.querySelector('#total-sum').innerText='$'+totalSum;
        }
        
    },
    mounted() {
        this._get(this.catalogUrl)
        .then(item => {this.items = item});
        this._get(this.basketUrl)
        .then(basket => {this.basket = basket.content});
        this._sum()
    }
})
