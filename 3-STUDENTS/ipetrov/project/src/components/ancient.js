import {createBItemTemplate, createCItemTemplate} from './html.js'

export default class ancientParent {
    constructor(url = '/basket.json', container = '#basket') {
        this.items = []; //+
        this.container = document.querySelector(container); //+
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url; //+
        this._init();
    }

    _init () {
        this._getData(this.url)
            .then((this.url.includes('basket'))?
            basket => {this.items = basket.content}:items => {this.items = items}) // криво, пока не понял, как сделать красиво
            .finally(() => {
                this._render();
                this._handleActions();
            })
    }

    _getData(url) {
        return fetch(url) //JSON
            .then(data => data.json()) // JSON >>> Obj/Array
    }

    _render() {
        let str = '';
        this.items.forEach(item => {
            str += (this.url.includes('basket'))?
            createBItemTemplate(item):createCItemTemplate(item);
        });
        this.url.includes('basket')?
        this.itemsContainer.innerHTML = str:this.container.innerHTML = str;
    }
};