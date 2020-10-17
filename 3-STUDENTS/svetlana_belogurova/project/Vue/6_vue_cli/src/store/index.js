import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    addItem(state, product) {
      let find = state.items.find(el => el.productId == product.productId);
      if (!find) {
        state.items.push(Object.assign({}, product, { amount: 1 }));
      } else {
          find.amount++;
      }
  },

  removeItem(state, id) {
    console.log(id);
      let find = state.items.find(el => el.productId == id);
      if (find.amount > 1) {
          find.amount--;
      } else {
        state.items.splice(state.items.indexOf(find), 1);
      }
  }
  },
  actions: {
  },
  modules: {
  }
})
