import app from './app.js'
import cart from './cart.js'
import catalog from './catalog.js'
import gallery from './gallery.js'

export default () => {
    app.init();
    cart.init();
    catalog.init();
    gallery.init();
}