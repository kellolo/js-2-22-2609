export default class Item {
    constructor(item, type){
        this.item = item;
        this.type = type;
    }

    render() {
        switch(this.type) {
            case 'catalog':{
                return createCatalogItemTemplate(this.item)
            }
            case 'basket':{
                return createBasketItemTemplate(this.item)
            }
        }

    }
}


function createCatalogItemTemplate(item) {
    return `<div class="catalog__item" id="${item.productId}">
                <button 
                    class="catalog__bucket" 
                    name="add"
                    data-id="${item.productId}" 
                    data-price="${item.productPrice}" 
                    data-name="${item.productName}" 
                    data-image="${item.productImg}"
                >
                    <img class="catalog__hidden_img" 
                    src="https://raw.githubusercontent.com/Eliseev88/geekbrains/3fdc76c4d5e84b1398b168e6239b8651dce01f6f/products/Forma_1_copy.svg" alt="#">
                    <span class="catalog__hidden_text">Add to Cart</span>
                </button>
                <div class="catalog__photo">
                    <img class="catalog__img" src="${item.productImg}" alt="#">
                </div>
                <div class="catalog__content">
                    <a class="catalog__name" href="#">${item.productName}</a>
                    <div class="catalog__price">$${item.productPrice}.00</div>
                </div>
            </div>`;
}

function createBasketItemTemplate(item) {
    return `
            <div class="drop__box" data-id="${item.productId}">
                <a class="drop__img" href="single.html"><img src="${item.productImg}" alt="#" width="72" height="85"></a>
                <div class="drop__info">
                    <a href="single.html" class="drop__title">${item.productName}</a>
                    <img src="../src/assets/imgs/drop_cart/stars.png" alt="#">
                    <div class="drop__price"><span class="drop__count" data-id="${item.productId}">${item.amount}</span><span class="drop__span">
                    x
                    </span>$${item.productPrice}<span class="drop__span">${item.productPrice*item.amount} </span></div>
                </div>
                <button class="drop__cancel fas fa-times-circle" data-id="${item.productId}" name="remove"></button>
            </div>
            `
}
