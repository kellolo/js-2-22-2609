import List from './list.js'

export default class Basket extends List {
    constructor(url = '/basket.json', container = '#basket') {
            super('#basket-items', url)
            this.shown = false;
            this.wrapper = document.querySelector(container);

        }
        // inc() {
        //     this.count++
        // }
        // dec() {
        //     this.count--
        // }
    _handleActions() {
        document.querySelector('#basket-toggler').addEventListener('click', () => {
            this.shown = !this.shown;
            this.wrapper.classList.toggle('invisible');
        });

        this.container.addEventListener('click', ev => {
            console.log(ev.target.name)
            if (ev.target.name == 'remove') {
                this._remove(ev.target.dataset.id);
            }
        })
    }
    add(product) {
        let find = this.items.find(el => el.productId == product.productId);
        if (!find) {
            this.items.push(Object.assign(product, { amount: 1 }));
        } else {
            find.amount++;
        }
        this._render();
    }
    _remove(id) {
        let find = this.items.find(el => el.productId == id);
        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
    }
}