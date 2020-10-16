const app = new Vue({
    el: '#app',
    data: {
        catalogURL: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
        items: [],
        show: true
        // hello: 'Hello Vue 123',
        // status: '',
        // counter: 0
    },
    methods: {
        // clicker(status) {
        //     console.log(status)
        //     this.status = status ? 'Увеличиваем число' : 'Обнулено';
        //     this.counter = status ? this.counter + 1 : 0;
        // }
        _get(url) {
            return fetch(url).then(d => d.json())
        },
        add(item) {
            console.log('Added: ' + item.productName)
        }
    },
    //Hooks
    mounted() {
        this._get(this.catalogURL)
        .then(items => { 
            this.items = items; console.log(this.items) 
        })
    }
})