
function createItemTemplate(item) {
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
}


export default class Catalog {
    constructor(basket, url = '/catalog.json', container = '#catalog'){
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url;
        this.items = [];
        this.basket = basket;
        this._init(basket);
    }
    _init() {
        this._getData(this.url)
            .then(items => {this.items = items})
            .finally(() => {
                this._render();
                this._handleActions();
            })
    }
    _getData(url) {
        return fetch(url).then(data => data.json())
    }
    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'add' || evt.target.parentNode.name == 'add') {
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
    }
    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += createItemTemplate(item);
        });
        this.container.innerHTML = htmlStr;
    }
}


