import Components from './parentComponents.js'
import { RenderCart } from './render'

export default class Basket extends Components {
    constructor(container = '#basket', url = '/basket.json'){
        super(container = '#basket', url = '/basket.json')
        this.shown = false;
        this.itemsContainer = document.querySelector('#basket-items');
    }

    _render() {
       let render = new RenderCart(this.items, this.itemsContainer)
       this._sum();
    };
    handleActions() {
        document.querySelector('#basket-toggler').addEventListener('click', () => {
            this.shown = !this.shown;
            this.container.classList.toggle('invisible');
        });

        this.container.addEventListener('click', ev => {
            console.log(ev.target.name)
            if (ev.target.name == 'remove') {
                this._remove(ev.target.dataset.id);
            }
        })
    };
    add(product) {
        this.shown == true
        let find = this.items.find(el => el.productId == product.productId);
            if (!find) {
                this.items.push(Object.assign(product, { amount: 1 }));
            } else {
                find.amount++;
            }
        this._render();
    };
    _remove(id) {
        let find = this.items.find(el => el.productId == id);
        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
    };
    _sum(){
        let totalSum = 0;
        this.items.forEach( el =>{totalSum+=el.productPrice*el.amount});
        document.querySelector('#total-sum').innerText='$'+totalSum;
    }
}