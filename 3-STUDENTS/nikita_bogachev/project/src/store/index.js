import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    catalog: []
  },
  mutations: {
    SET_CATALOG: (state, data) => {
      state.catalog = data;
    },
    SET_ITEMS: (state, data) => {
      state.items = data.content;
    },
    SET_ADD_CART: (state, item) =>{
      let find = state.items.find(el => el.productId == item.productId);
        if (!find) {
            state.items.push(Object.assign({},item, { amount: 1 }));
        } else {
            find.amount++;
        }
    },
    REMOVE_ITEM: (state, item) => {
      let find = state.items.find(el => el.productId == item.productId);
            if (find.amount > 1) {
                find.amount--;
            } else {
                state.items.splice(state.items.indexOf(find), 1);
            }
    },
    CLEAR_BASKET_ITEM: (state) => {
      state.items = []
    },
    CHANGE_COUNT: (state, item) => {
      let find = state.items.find(el => el.productId == item.productId);
      let value = event.target.value;
      find.amount = value;
    }
    
  },
  actions: {
    GET_CATALOG_ITEM({commit}){
      return fetch('/catalog')
      //from build /catalog
      //from dev api/catalog
      .then(data => data.json()).then((items) => commit('SET_CATALOG', items)) 
      .catch((error)=> {console.log(error)})
    },
    GET_BASKET_ITEM({commit}){
      return fetch('/basket')  
      //from dev api/basket
      //from build /basket
      .then(data => data.json()).then((items) => commit('SET_ITEMS', items))
      .catch((error)=> {console.log(error)})
    },
    ADD({commit}, item){
      commit('SET_ADD_CART', item )
    },
    REMOVE({commit}, item){
      commit('REMOVE_ITEM', item)
    },
    CLEAR_BASKET({commit}){
      commit('CLEAR_BASKET_ITEM')
    },
    CHANGE({commit}, item){
      commit('CHANGE_COUNT', item)
    }
  },
  modules: {
  },
  getters: {
    ITEMS(state) {
      return state.items
    },
    CATALOG(state) {
      return state.catalog
    },
    SUM (state) {
      let totalSum = state.items.reduce((sum, el) => (sum + el.productPrice*el.amount),0 
      );
      return totalSum
    },
    
  }
})
