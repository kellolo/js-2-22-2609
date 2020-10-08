import Basket from './basket.js';
import Catalog  from './catalog.js';
//import Components from './components.js'
import { displayMenu } from './app';

export default () => {
    let basket = new Basket();
    let catalog = new Catalog(basket);
    displayMenu();
}