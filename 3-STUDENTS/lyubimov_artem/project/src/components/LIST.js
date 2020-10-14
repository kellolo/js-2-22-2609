import Item from './ITEM'

let types = {
    Catalog: 'catalog',
    Basket: 'basket',
}
export default class List {
    constructor(container, url, basket = null) {
        this.container = document.querySelector(container)
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url
        this.basket = basket
        this.items = []
        this._init()
    }

    _init() {
        this._get(this.url)
        .then(data => {this.items = this.basket ? data : data.content})
            .finally(() => {
                this._render()
                this._handleActions()
            })
    }

    _get(url) {
        return fetch(url)
            .then(data => data.json())
    }

    _render() {
        let htmlStr = ''
        this.items.forEach(item => {
            htmlStr += new Item(item, types[this.constructor.name]).render()
        })
        this.container.innerHTML = htmlStr
    }
}