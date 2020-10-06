
export default class Parent {
    constructor(container, url) {
        this.items = [];
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/Katie177/static/master/JSON' + url;
    }

_getData(url) {
    return fetch(url).then(data => data.json())
}

}