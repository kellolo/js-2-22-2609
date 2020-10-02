import basket from "./cart.js"
import catalog from "./catalog.js"
import gallery from "./gallery.js"

export default () => {
    basket.init()
    catalog.init()
    gallery.init()
}