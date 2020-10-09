
export default class Parent {
    constructor (url, container) {
        this.items = [];
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url;
        this._init ();
    } 
    _init () {};
   
    _getData(url) {
        return fetch(url) //JSON
            .then(data => data.json()) // JSON >>> Obj/Array
    };
    
    _createItemTemplate(item) {
        console.log("Not implemented");
        return "";
    };

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += this._createItemTemplate(item);
        });
        this.container.innerHTML = htmlStr;
    };

    _handleActions() {};
};