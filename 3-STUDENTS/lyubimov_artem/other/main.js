class Burger {
    constructor (price = 0, callories = 0) {
        this.price = price
        this.callories = callories
    }

    selectBigSize() {
        let btn = document.querySelector('.size-btn-big')
        btn.addEventListener('click', () => {
            this.price = this.price + 100
            this.callories = 40 + this.callories
            this.render()
            return burger
        })
    }

    selectLittleSize() {
        let btn = document.querySelector('.size-btn-little')
        btn.addEventListener('click', () => {
            this.price = 50 + this.price
            this.callories = 20 + this.callories
            this.render()
            return burger
        })
    }

    selectCheese() {
        let btn = document.querySelector('.topping-btn-cheese')
        btn.addEventListener('click', () => {
            this.price = 10 + this.price
            this.callories = 20 + this.callories
            this.render()
            return burger
        })
    }

    selectSalat() {
        let btn = document.querySelector('.topping-btn-salat')
        btn.addEventListener('click', () => {
            this.price = 20 + this.price
            this.callories = 5 + this.callories
            this.render()
            return burger
        })
    }

    selectPotato() {
        let btn = document.querySelector('.topping-btn-potato')
        btn.addEventListener('click', () => {
            this.price = 15 + this.price
            this.callories = 10 + this.callories
            this.render()
            return burger
        })
    }

    selectSpice() {
        let btn = document.querySelector('.dressing-btn-spice')
        btn.addEventListener('click', () => {
            this.price = 15 + this.price
            this.callories = 0 + this.callories
            this.render()
            return burger
        })
    }

    selectMayo() {
        let btn = document.querySelector('.dressing-btn-mayo')
        btn.addEventListener('click', () => {
            this.price = 20 + this.price
            this.callories = 5 + this.callories
            this.render()
            return burger
        })
    }

    getInfo() {
        const sum = burger.price
        const calloriesAll = burger.callories
        const infoAll = document.createElement('div')
        infoAll.innerHTML = `Общая сумма: ${sum} Каллорийность: ${calloriesAll}`
        return infoAll
    }

    render() {
        const placeToRender = document.querySelector('.sum-info')
        placeToRender.innerHTML = ''
        placeToRender.appendChild(this.getInfo())
    }
}

const burger = new Burger()
burger.selectBigSize()
burger.selectLittleSize()
burger.selectCheese()
burger.selectSalat()
burger.selectPotato()
burger.selectSpice()
burger.selectMayo()
burger.render()