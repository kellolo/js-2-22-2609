import basket from './basket.js'
import catalog from './catalog.js'

export default () => {
    basket.init();
    catalog.init(basket);
}