export default {
    state: {
        itemsC: []
    },
    mutations: {
        apdateItemCatalog(state, itemsC) {
            state.itemsC = itemsC
        }
    },
    actions: {
        fetchItemsCatalog(ctx) {
            return fetch('/api/catalog')
                .then(data => data.json())
                .then(itemsC => this.itemsC = itemsC)
                .finally(() => {
                ctx.commit('apdateItemCatalog', this.itemsC)
                })
                
        }
    },
    getters: {
        allItemsCatalog(state) {
            return state.itemsC
        }
    }
}