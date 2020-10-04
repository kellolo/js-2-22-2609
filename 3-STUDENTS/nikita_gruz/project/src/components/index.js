import Basket from './basket.js'
import Catalog from './catalog.js'

export default () => {
    Basket.init();
    Catalog.init(Basket);
}