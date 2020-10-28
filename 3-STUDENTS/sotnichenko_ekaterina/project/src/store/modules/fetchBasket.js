export default {
    state: {
        items: []
    },
    mutations: {
        apdateItem(state, items) {
            state.items = items
        }
    },
    actions: {
        fetchItems(ctx) {
            return fetch('/api/basket')
                .then(data => data.json())
                .then(items => this.items = items.content)
                .finally(() => {
                    ctx.commit('apdateItem', this.items)
                })
                
        }
    },
    getters: {
        allItems(state) {
            return state.items
        },
        sum(state) {
            return (state.items) ? state.items.reduce( (total, value) =>{
                return (total + value.amount * value.productPrice)
            }, 0) : '0'
        },
        add: state => product => {
            let find = state.items.find(el => el.productId == product.productId);
            if (!find) {
                state.items.push(Object.assign({}, product, { amount: 1 }));
            } else {
                find.amount++;
            };
        },
        remove: state => id => {
            let find = state.items.find(el => el.productId == id);
            if (find.amount > 1) {
                find.amount--;
            } else {
                state.items.splice(state.items.indexOf(find), 1);
            }
        }
    }
}