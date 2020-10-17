import List from './LIST.js'
export default class Catalog extends List {
    constructor(basket, url = '/catalog.json', container = '#catalog') {
        super(container, url, basket);
    }

    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'add' || evt.target.parentNode.name == 'add') {
                let datas = evt.target.name == 'add' ? evt.target.dataset : evt.target.parentNode.dataset;

                let newProd = {
                    productId: datas.id,
                    productPrice: +datas.price,
                    productName: datas.name,
                    productImg: datas.image
                }

                this.basket.add(newProd);
            }
        })
    }
}


