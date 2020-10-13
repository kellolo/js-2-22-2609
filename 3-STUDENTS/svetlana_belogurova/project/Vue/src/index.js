const app = new Vue ({
    el: '#page',

    data: {
        catalogURL: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
        catalogItems: [],
        basketURL: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
        basketItems: [],
    },

    methods: {
        _get: function(url) {
            return fetch(url).then(d => d.json())
        },

        addItemToBasket: function (event) {
            console.log(event.target);
            let newProd = {
                productId: event.target.getAttribute("idata-id"),
                productPrice: event.target.getAttribute("idata-price"),
                productName: event.target.getAttribute("idata-name"),
                productImg: event.target.getAttribute("idata-image"),
            }

            this.basketItems.content.push(newProd);
            console.log (this.basketItems);
        }
        
    },
    mounted () {
        this._get(this.catalogURL)
        .then(catalogItems => { 
            this.catalogItems = catalogItems; 
        });

        this._get(this.basketURL)
        .then(basketItems => { 
            this.basketItems = basketItems; 
        })
    },

   
    


})