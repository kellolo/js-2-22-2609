import Item from './item';

let type = {
    Catalog: 'catalog',
    Basket: 'basket'
}

export default class List {
    constructor(container, url, basket = null) {
        this.items = [];
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url;
        this.container = document.querySelector(container);
        this.basket = basket
        this._init();
    }

    _init() {
        this._get(this.url)
            .then(data => this.items = this.basket ? data : data.content)
            //.then(basket => { this.items = basket.content })
            .finally(() => {
                this._render();
                this._handleActions();
            })
    }
    _get(url) {
        return fetch(url) //JSON
            .then(data => data.json()) // JSON >>> Obj/Array
    }


    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            // htmlStr += createItemTemplate(item);
            htmlStr += new Item(item, type[this.constructor.name]).render();
        });
        this.container.innerHTML = htmlStr;
    }
}