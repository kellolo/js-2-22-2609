import Basket from './basket.js'
import Catalog from './catalog.js'
import Representation from './representation.js'

export default () => {
    let basket = new Basket();
    let catalog = new Catalog(basket);
}