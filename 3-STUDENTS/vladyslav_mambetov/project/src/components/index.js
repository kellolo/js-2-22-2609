import Basket from './basket.js'
import Catalog from './catalog.js'

export default () => {
    let basket1 = new Basket();
    let catalog = new Catalog(basket1);
}