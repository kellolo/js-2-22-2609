
var basket = {
    items: [
        {id: 0,
         name: "MANGO PEOPLE T-SHIRT",
         price: "150.00",
         amount: 1,
         img: "../src/assets/imgs/Product1.jpg"
        },
        {id: 1,
         name: "MANGO PEOPLE T-SHIRT",
         price: "100.00",
         amount: 1,
         img: "../src/assets/imgs/Product2.jpg"
        },    
        {id: 2,
         name: "MANGO PEOPLE T-SHIRT",
         price: "50.00",
         amount: 1,
         img: "../src/assets/imgs/Product3.jpg"
        }    
        ],
    container: null,
    container2: null,
    basket: basket,
    total: 0,
    
    
    
    init() {
        this.container = document.querySelector("#Basket");
        this.container2 = document.querySelector("#basket2");
        this.total = this._recalcTotal();
        this._render();
        this._handleActions(); 
    },
    
    _recalcTotal() {
        let interimTotal = 0;
        this.items.forEach(item => {interimTotal = interimTotal + item.amount * item.price});
        return interimTotal;
    },
    
    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.classList.contains('remove')) {
                this.total = this._recalcTotal();
                this.remove(evt.target.dataset.id);
            }
        });
        this.container2.addEventListener('click', evt => {
            if (evt.target.classList.contains('remove')) {
                this.total = this._recalcTotal();
                this.remove(evt.target.dataset.id);
            }
        });
        this.container2.addEventListener('change', evt => {
            if (evt.target.classList.contains('qty2')) {
                
                if (((parseInt(evt.target.value) - parseFloat(evt.target.value)) != 0) || (evt.target.value < 0) ) {
                    evt.target.value = 1;
                }
                
                this.items[evt.target.dataset.id].amount = evt.target.value;
                this.total = this._recalcTotal();
                this._render();
            }
        });
    
    
    
    },
    _render() {
        let str = "";
        this.items.forEach(item => {
            str += `
            <div class="d-flex headerCartWrapIn">
                <a href="#" class="d-flex">
                    <img src="${item.img}" alt="" style="height: 85px">
                    <div>
                        <div>${item.name}</div>
                        <span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </span>
                        <div class="headerCartWrapPrice">${item.amount} 
                            <span>x</span> $${item.price}
                        </div>
                    </div>
                </a>
                <a href="#" class="remove"><i class="fas fa-times-circle remove" data-id="${item.id}"></i></a>
            </div>
            `
        })
        this.container.innerHTML = str + `
        <div class="headerCartWrapTotalPrice">
                            <div>total&nbsp;</div>
                            <div>$${this.total}</div>
                        </div>

                        <button type="button" class="productsButtonIndex">Checkout</button>
                        <button type="button" class="productsButtonIndex">Go to cart</button>`;

    
    //2nd part (#basket2)
        str = "";
        str = str + `<div class="productDetailsTitles">
            <div class="productDetailsTitlesLeft">Product Details</div>
            <div class="productDetailsTitlesRight">
                <div>unite Price</div>
                <div>quantity</div>
                <div>shipping</div>
                <div>Subtotal</div>
                <div>Action</div>
            </div>
        </div>`
        this.items.forEach(item => {
            str += `
        <div class="productDetailsProduct">
            <div class="productDetailsDescription">
                <img src="${item.img}" alt="Product1" height="115px">
                <div class="productDescription">
                    <div class="productDescriptionTitle">${item.name}</div>
                    <div>
                        <div class="productDescriptionFeature">Color: <span>Red</span></div>
                        <div class="productDescriptionFeature">Size: <span>Xll</span></div>
                    </div>
                </div>
            </div>
            <div class="productDetailsRight">
                <div class="productDetailsPrice">&#36; ${item.price}</div>
                <div class="productDetailsQuantity">
                    <form>
                        <input type="number" min="1" max="9999" value="${item.amount}" data-id="${item.id}" class="qty2">
                    </form>
                </div>
                <div class="productDetailsShipping">Free</div>
                <div class="productDetailsSubtotal">&#36; ${item.price * item.amount}</div>
                <div class="productDetailsAction" data-id="${item.id}"><i class="fas fa-times-circle remove" data-id="${item.id}"></i></div>
            </div>
        </div>        
            `
        })
        str = str + `        <div class="productDetailsButtons">
            <button>cLEAR SHOPPING CART</button>
            <button>cONTINUE sHOPPING</button>
        </div>`
        this.container2.innerHTML = str
    
    
    },
    add(item) {
        let find = this.items.find(el => el.id == item.id);

        if (!find) {
            this.items.push(item);
            this.total = this.total + Number(item.price);
        } else {
            find.amount++;
            this.total = this.total + Number(find.price);            
        }
        this._render();
    },
    remove(itemId) {

        let find = this.items.find(el => el.id == itemId);

        if (find.amount > 1) {
            find.amount--;
            this.total = this.total - Number(find.price);
        } else {
            this.items.splice(this.items.indexOf(find), 1);
            this.total = this.total - Number(find.price);
        }
        this._render();
    }
}

basket.init();
