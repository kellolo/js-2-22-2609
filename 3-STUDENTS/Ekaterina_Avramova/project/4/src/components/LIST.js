import Item from "./ITEM.js";

let types = {
    Catalog: 'catalog',
    Basket: 'basket'
}

export default class List {
    constructor(container, url, basket = null) {
        this.items = [];
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/Katie177/static/master/JSON' + url;
        this.basket = basket;
        this._init();
    }
    _init() {
        this._get(this.url)
            .then(data => { this.items =  this.basket ? data : data.content})
            //.then(items => {this.items = items})
            .finally(() => {
                this._render();
                this._handleActions();
        })
}
    _get(url) {
    return fetch(url).then(data => data.json())
}
_render() {
    let htmlStr = '';
    this.items.forEach(item => {
        htmlStr += new Item(item, types[this.constructor.name]).render();
    });
    this.container.innerHTML = htmlStr;
}
}