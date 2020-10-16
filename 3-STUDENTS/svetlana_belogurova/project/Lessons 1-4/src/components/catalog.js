import Parent from "./parent";

export default class Catalog extends Parent {
    constructor (basket, url = '/catalog.json', container = '#catalog') {
        super(url, container);
        this.basket = basket;
    }
    _init () {
        this._getData(this.url)
            .then(items => {this.items = items})
            .finally(() => {
                this._render();
                this._handleActions();
            })
    };

    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'add' || evt.target.parentNode.name == 'add' ) {
                let datas = evt.target.name == 'add' ? evt.target.dataset : evt.target.parentNode.dataset;

                let newProd = {
                    productId: datas.id,
                    productPrice: +datas.price,
                    productName: datas.name,
                    productImg: datas.image
                }

                this.basket.add(newProd);
            }
        })
    };

    _createItemTemplate (item) {
        return `<div class="catalog__item" id="${item.productId}">
        <button 
            class="catalog__bucket" 
            name="add"
            data-id="${item.productId}" 
            data-price="${item.productPrice}" 
            data-name="${item.productName}" 
            data-image="${item.productImg}"
        >
            <img class="catalog__hidden_img" 
            src="https://raw.githubusercontent.com/Eliseev88/geekbrains/3fdc76c4d5e84b1398b168e6239b8651dce01f6f/products/Forma_1_copy.svg" alt="#">
            <span class="catalog__hidden_text">Add to Cart</span>
        </button>
        <div class="catalog__photo">
            <img class="catalog__img" src="${item.productImg}" alt="#">
        </div>
        <div class="catalog__content">
            <a class="catalog__name" href="#">${item.productName}</a>
            <div class="catalog__price">$${item.productPrice}.00</div>
        </div>
        </div>`
    };
}
