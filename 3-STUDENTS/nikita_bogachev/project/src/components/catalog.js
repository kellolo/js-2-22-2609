import Components from './parentComponents.js';
import { RenderCatalog } from './render'

export default class Catalog extends Components {
    constructor(basket, container = '#catalog', url = '/catalog.json'){
        super(container = '#catalog', url = '/catalog.json'),
        this.basket = basket;
    }
    handleActions() {
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
    };
    _render() {
        let render = new RenderCatalog(this.items, this.container)
    }
}
