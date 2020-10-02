import cart from './cart.js'
import catalog from './catalog.js'
import gallery from './gallery.js'


export default () => {
   cart.init();
   catalog.init();
   gallery.init();
}