

export default class Components {
    constructor(container, url) {
        this.items = [];
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url;
        this.init();
    }
    init () {
        this.getData(this.url)
            .then(item => {this.items = Array.isArray(item) ? item : item.content})
            .finally(() => {
               this._render();
               this.handleActions();
            })
            
    };
    getData(url) {
        return fetch(url).then(data => data.json())
    };
    _render(){
        
    }
}
