// мог было сделать через один объект с массивом из цены и калорий, но кажется, что так выглядит логичней. Запихивать в класс тоже как-то.. ценник и ингридиенты могут смениться
let calories = {
    size: {
        big: 40,
        small: 20,
    },
    toppings: {
        cheese: 20,
        salad: 5, 
        potato: 10, 
    }, 
    optToppings: {
        spices: 0,
        mayonnaise: 5,
    },
};

let prices = {
    size: {
        big: 100,
        small: 50,
    },
    toppings: {
        cheese: 10,
        salad: 20, 
        potato: 15, 
    }, 
    optToppings: {
        spices: 15,
        mayonnaise: 20,
    },
}

class Burger {
    constructor(size, toppings, optToppings = []) {
        this.size = size;
        this.toppings = toppings;
        this.optToppings = optToppings;
        this.getPrice(prices);
        this.getCalories(calories);
    }

    getPrice (prices) {
        let total = 0;
        
        total += prices.size[this.size];
        
        this.toppings.forEach(element => {
            total += prices.toppings[element];
        });
        
        this.optToppings.forEach(element => {
            total += prices.optToppings[element];
        })
        
        console.log('Стоимость ' + total + ' рублей');
        this.price = total;
    }
    
    getCalories (calories) {
        let total = 0;
        
        total += calories.size[this.size];
        
        this.toppings.forEach(element => {
            total += calories.toppings[element];
        });
        
        this.optToppings.forEach(element => {
            total += calories.optToppings[element];
        })
        
        console.log('Энергетическая ценность ' + total + ' калорий');
        this.calories = total;
    }
}