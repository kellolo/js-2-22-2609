
export default class Basket {
    constructor(){
        this.items = [];
        this.shown = false;
        this.container = null;
        this.itemsContainer = null;
        this._init();
    }
    _init () {
        this.container = document.querySelector('#basket');
        this.itemsContainer = document.querySelector('#basket-items');
        this._render();
        this._handleActions();
    };
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
                            </span>$${item.productPrice}<span class="drop__span">${item.productPrice*item.amount} </span></div>
                        </div>
                        <button class="drop__cancel fas fa-times-circle" data-id="${item.productId}" name="remove">
                        <button>
                    </div>`;
        });
        this.itemsContainer.innerHTML = str;
    };
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
    };
    add(product) {
        this.shown == true
        let find = this.items.find(el => el.productId == product.productId);
            if (!find) {
                this.items.push(Object.assign(product, { amount: 1 }));
            } else {
                find.amount++;
            }
        this._render();
        this._sum();
    };
    _remove(id) {
        let find = this.items.find(el => el.productId == id);
        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
        this._sum();
    };
    _sum(){
        let totalSum = 0;
        this.items.forEach( el =>{totalSum+=el.productPrice*el.amount});
        document.querySelector('#total-sum').innerText='$'+totalSum;
    }
};

