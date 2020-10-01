// export default {
//     items: [],
//     init() {
//         console.log('hello from B')
//     }
// }

export default class B {
    constructor(name) {
        this.name = name;
        this.items = [];
        this._init();
    }

    _init() {
        console.log('hello from ' + this.name)
    }
}