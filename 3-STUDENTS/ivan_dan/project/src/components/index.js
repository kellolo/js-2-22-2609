import Basket from "./basket.js"
import Catalog from "./catalog.js"

export default () => {
    let basket = new Basket("MANGO");
    let basket1 = new Basket("BANANA");
    let basket2 = new Basket("STRAWBERRY");
    let basket3 = new Basket("ORANGE");
    let basket4 = new Basket("PUMKIN");
    let basket5 = new Basket("PINEAPPLE");
    let basket6 = new Basket("CUCUMBER");
    let basket7 = new Basket("TOMATO");

    let catalog = new Catalog("MANGO");
    let catalog1 = new Catalog("BANANA");
    let catalog2 = new Catalog("STRAWBERRY");
    let catalog3 = new Catalog("ORANGE");
    let catalog4 = new Catalog("PUMKIN");
    let catalog5 = new Catalog("PINEAPPLE");
    let catalog6 = new Catalog("CUCUMBER");
    let catalog7 = new Catalog("TOMATO");
}