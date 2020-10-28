import displayMenu from './app.js';
import Basket from './cart.js';
import Catalog from './catalog.js';
import Gallery from './gallery.js';

console.log('imported everything');

export default () => {
    let basket = new Basket();
    console.log('basket created');
    let catalog = new Catalog();
    console.log('catalog created');
    let gallery = new Gallery();
    console.log('gallery created');
}