
var basket = {
    items: [],
    container: null,
    basket: basket,
    total: 0,

    init() {
        this.container = document.querySelector("#Basket");
        this._render();
        this._handleActions();
    },
    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.classList.contains('remove')) {
                this.remove(evt.target.dataset.id);
            }
        })
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
