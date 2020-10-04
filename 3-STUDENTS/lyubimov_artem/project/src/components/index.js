import Basket from './basket.js'
import Catalog from './catalog.js'

export default () => {
    // basket.init();
    // catalog.init(basket);
    let basket = new Basket ('basket');
    let catalog = new Catalog ('catalog');
}