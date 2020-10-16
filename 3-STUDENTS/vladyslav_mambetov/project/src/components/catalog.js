import List from './LIST.js'

export default class Catalog extends List {
    constructor(basket, url = '/catalog.json', container = '#catalog') {
        super(container, url, basket);
    }

    _handleActions() {
        this.container.addEventListener('click', evt => {
            evt.path.forEach(item => {
                if (item.name == 'add') {
                    let datas = item.dataset;
    
                    let newProd = {
                        productId: datas.id,
                        productPrice: +datas.price,
                        productName: datas.name,
                        productImg: datas.image
                    }
    
                    this.basket.add(newProd);
                }
            });
        });
    }
}
