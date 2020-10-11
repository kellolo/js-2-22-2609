import Parent from "./parent";

export default class Basket extends Parent{
    constructor (url = '/basket.json', container = '#basket' ) {
        super(url, container);
        this.shown = false;
        this.itemsContainer = document.querySelector('#basket-items');    
    } 
    _init () {
        this._getData(this.url)
            .then(basket => {this.items = basket.content})
            .finally(() => {
                this._render();
                this._handleActions();
            })
    };
   
    _createItemTemplate (item) {
        return `<div class="drop__box" data-id="${item.productId}">
        <a class="drop__img" href="single.html"><img src="${item.productImg}" alt="#" width="72" height="85"></a>
        <div class="drop__info">
            <a href="single.html" class="drop__title">${item.productName}</a>
            <img src="../src/assets/imgs/drop_cart/stars.png" alt="#">
            <div class="drop__price"><span class="drop__count" data-id="${item.productId}">${item.amount}</span><span class="drop__span">
            x
            </span>$${item.productPrice}</div>
        </div>
        <button class="drop__cancel fas fa-times-circle" data-id="${item.productId}" name="remove">
        </div>`;
    };

    _handleActions() {
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
    }
};