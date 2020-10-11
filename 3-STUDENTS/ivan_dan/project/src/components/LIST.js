import Item from "./ITEM"
export default class List {
    constructor(container, url, basket = null) {
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url;
        this.basket = basket;
        this.items = [];
        this._init();
    }

    _init() {
        this._getData(this.url)
            .then(data => {this.item = this.basket ? data : data.content})
            //.then(basket => {this.items = basket.content})
            .finally(() => {
                this._render()
                this._handleActions()
    }

    _get() {
        return fetch(url)
            .then(data => data.json())
    }

    _render() {
        let htmlStr = ''
        this.items.forEach(item => {
            //htmlStr += createItemTemplate(item);
        });
        this.container.innerHTML = htmlStr;
    }
}