import Representation from './representation.js'

export default class BasketContainer {
    constructor(url, container, point) {
        this.point = point,
        this.items = [],
        this.container = document.querySelector(container),
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url,
        this.representation = new Representation()
        this._init()
        
    }
    _init () {
        this._getData(this.url)
            .then(this.point)
            .finally(() => {
                this._render();
                this._handleActions();
            })
    }
    _getData() {
        return fetch(this.url).then(data => data.json())
    }
    _render() {
        let htmlStr = '';
        let patt = /basket/;//Хардкод, надо исправить, но пока не знаю как
        this.items.forEach(item => {
            if (patt.test(this.point)) {
                htmlStr += this.representation.createItemTemplateBasket(item);
            } else {
                htmlStr += this.representation.createItemTemplateCatalog(item);
            }
        });
        this.container.innerHTML = htmlStr;
    }
}

//import Representation from './representation.js'
