import Cart from './cart.js'
import Catalog from './catalog.js'
import gallery from './gallery.js'
// импортируем класс с большой буквы inport CART from


export default () => {
   let cart = new Cart();
   let catalog = new Catalog(cart); gallery.init();
}