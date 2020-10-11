export default class Parent {
    constructor() {
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json';
    }

    _getData(url) {
        return fetch(url).then(data => data.json())
    }

    _init () {
        this.getData(this.url)
            .then(basket => {this.items = basket.content})
            .finally(() => {
                this._render();
                this._handleActions();
            })
    }
}