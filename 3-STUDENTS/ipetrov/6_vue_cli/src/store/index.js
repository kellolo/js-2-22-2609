import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    catalog: null,
    basket: null,
  },
  mutations: {
    SET_CATALOG_ITEMS: (state, payload) => {
      state.catalog = payload;
    },
    SET_BASKET_ITEMS: (state, payload) => {
      state.basket = payload.content;
    },
    ADD_TO_CART: (state, item) => {
      let find = state.basket.find(el => el.productId == item.productId);
      if (!find) {
        state.basket.push(Object.assign({}, item, { amount: 1 }));
      } else {
          find.amount++;
      }
    },
    REMOVE_FROM_CART: (state, id) => {
      let find = state.basket.find(el => el.productId == id);
      if (find.amount > 1) {
          find.amount--;
      } else {
        state.basket.splice(state.basket.indexOf(find), 1);
      }
    }
  },
  actions: {
    GET_CATALOG_ITEMS: ({commit}) => {
       return axios
                .get('/api/catalog')  // for dev
                // .get('/catalog')   // for build
                .then((items) => commit('SET_CATALOG_ITEMS', items.data))
                .catch((error) => {console.log(error)})
    },
    GET_BASKET_ITEMS: ({commit}) => {
       return axios
                .get('/api/basket') // for dev
                // .get('/basket')  // for build
                .then((items) => commit('SET_BASKET_ITEMS', items.data))
                .catch((error) => {console.log(error)})
    },

  },
  getters: {
    FILL_BASKET: state => {
      return state.basket
    },
    FILL_CATALOG: state => {
      return state.catalog
    }
  }
})