import basket from './basket.js'
// import Basket from './basket.js'
import catalog from './catalog.js'

export default () => {
    basket.init();
    // let basketItem = new Basket();
    catalog.init(basket);
}