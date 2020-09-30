// setTimeout(() => {
//     let basketBtns = document.querySelectorAll('.catalog__bucket');

//     basketBtns.forEach(function (btn) {
//         btn.addEventListener('click', function (event) {
//             let id = event.currentTarget.dataset.id;
//             let price = event.currentTarget.dataset.price;
//             let name = event.currentTarget.dataset.name;
//             let image = event.currentTarget.dataset.image;
//             basket.addProduct({ id: id, price: price, name: name, image: image,});
//         });
//     });
// }, 300);

let basket = {
    items: [],
    shown: false,
    container: null,
    itemsContainer: null,
    url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
    init () {
        this.container = document.querySelector('#basket');
        this.itemsContainer = document.querySelector('#basket-items');
        this.getData(this.url)
            .then(basket => {this.items = basket.content})
            .finally(() => {
                this._render();
                this._handleActions();
            })
    },
    getData(url) {
        return fetch(url) //JSON
            .then(data => data.json()) // JSON >>> Obj/Array
    },
    _render() {
        let str = '';
        this.items.forEach(item => {
            str += `<div class="drop__box" data-id="${item.productId}">
                        <a class="drop__img" href="single.html"><img src="${item.productImg}" alt="#" width="72" height="85"></a>
                        <div class="drop__info">
                            <a href="single.html" class="drop__title">${item.productName}</a>
                            <img src="../src/assets/imgs/drop_cart/stars.png" alt="#">
                            <div class="drop__price"><span class="drop__count" data-id="${item.productId}">${item.amount}</span><span class="drop__span">
                            x
                            </span>$${item.productPrice}</div>
                        </div>
                        <button class="drop__cancel fas fa-times-circle" data-id="${item.productId}" name="remove">
                        <button>
                    </div>`;
        });
        this.itemsContainer.innerHTML = str;
    },
    _handleActions() {
        document.querySelector('#basket-toggler').addEventListener('click', () => {
            this.shown = !this.shown;
            this.container.classList.toggle('invisible');
        });

        this.container.addEventListener('click', ev => {
            console.log(ev.target.name)
            if (ev.target.name == 'remove') {
                this._remove(ev.target.dataset.id);
            }
        })
    },
    add(product) {
        let find = this.items.find(el => el.productId == product.productId);
            if (!find) {
                this.items.push(Object.assign(product, { amount: 1 }));
            } else {
                find.amount++;
            }
        this._render();
    },
    _remove(id) {
        let find = this.items.find(el => el.productId == id);
        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
    }
    // items: {},
    // addProduct(product) {
    //     this.addProductToObject(product);
    //     this.renderProductInBasket(product);
    //     this.showCartCount();
    //     this.renderTotalSum();
    //     this.removeBtnsListeners();
    // },
    // addProductToObject(product) {
    //     if(this.items[product.id] == undefined) {
    //         this.items[product.id] = {
    //             id: product.id,
    //             price: product.price,
    //             name: product.name,
    //             image: product.image,
    //             count: 1
    //         }
    //     } else {
    //         this.items[product.id].count++;
    //     }
    // },
    // renderProductInBasket(product) {
    //     let productExist = document.querySelector(`.drop__count[data-id="${product.id}"]`);
    //     if(productExist) {
    //         productExist.textContent++;
    //         return;
    //     }
    //     let productRow = 
        // `<div class="drop__box" data-id="${product.id}">
        //     <a class="drop__img" href="single.html"><img src="${product.image}" alt="#" width="72" height="85"></a>
        //     <div class="drop__info">
        //         <a href="single.html" class="drop__title">${product.name}</a>
        //         <img src="../src/assets/imgs/drop_cart/stars.png" alt="#">
        //         <div class="drop__price"><span class="drop__count" data-id="${product.id}">1</span><span class="drop__span">x</span>$${product.price}</div>
        //     </div>
        //     <button class="drop__cancel" data-id="${product.id}"><i class="fas fa-times-circle"></i><button>
        // </div>`;
    //     let dropCart = document.querySelector('#drop');
    //     dropCart.insertAdjacentHTML("afterbegin", productRow);
    // },
    // showCartCount() {
    //     let cart = document.querySelector('#basket-count');
    //     cart.style.visibility="visible";
    //     cart.textContent = this.getCountsFromBasket();
    //     if(this.getCountsFromBasket() == 0) {
    //         cart.style.visibility="hidden";
    //     }
    // },
    // getCountsFromBasket() {
    //     let goodsCount = 0;
    //     for (let key in this.items) {
    //         goodsCount += this.items[key].count;
    //     }
    //     return goodsCount;
    // },
    // renderTotalSum() {
    //     document.querySelector('#total-sum').textContent = `${this._getTotalSum()}$`;
    // },
    // _getTotalSum() {
    //     let sum = 0;
    //     for (let key in this.items) {
    //         sum += this.items[key].price * this.items[key].count;
    //     }
    //     return sum;
    // },
    // removeBtnsListeners() {
    //     let btns = document.querySelectorAll('.drop__cancel');
    //     for (let i = 0; i < btns.length; i++) {
    //         btns[i].addEventListener('click', this._removeProductListener);
    //     }
    // },
    // _removeProductListener(event) {
    //     basket._removeProduct(event);
    //     basket.renderTotalSum();
    //     basket.showCartCount();
    // },
    // _removeProduct(event) {
    //     let id = event.currentTarget.dataset.id;
    //     this._removeProductFromObject(id);
    //     this._removeProductFromBasket(id);
    // },
    // _removeProductFromBasket(id) {
    //     let countRm = document.querySelector(`.drop__count[data-id="${id}"]`);
    //     let productBox = document.querySelector(`.drop__box[data-id="${id}"]`);
    //     if (countRm.textContent == 1) {
    //         while (productBox.firstChild) {
    //             productBox.removeChild(productBox.firstChild);
    //           }
    //         productBox.remove();  
    //     } else {
    //         countRm.textContent--;
    //     }
    // },
    // _removeProductFromObject(id) {
    //     if (this.items[id].count == 1) {
    //         delete this.items[id];
    //     } else {
    //         this.items[id].count--;
    //     }
    // },
};

basket.init();