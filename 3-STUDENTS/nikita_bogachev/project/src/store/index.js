import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
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
          let newItem = Object.assign({},item, { amount: 1 })
            axios.post(`/api/basket/`, newItem)
          .then(status => {
            if(status){
              state.items.push(newItem);
            }
          })
          .catch(e => {console.log(e)})
        
        } else {
          axios.put(`/api/basket/${find.productId}`, { amount: 1 })
          .then(status => {
            if(status){
              find.amount++;
            }
          })
          .catch(e => {console.log(e)})
        }
    },
    REMOVE_ITEM: (state, item) => {
      let find = state.items.find(el => el.productId == item.productId);
            if (find.amount > 1) {
              axios.put(`/api/basket/${find.productId}`, { amount: -1 })
              .then(status => {
                if(status){
                  find.amount--;
                }
              })
              .catch(e => {console.log(e)})
            } else {
              axios.delete(`/api/basket/${find.productId}`)
              .then(status => {
                if(status){
                  state.items.splice(state.items.indexOf(find), 1);
                }
              })
              .catch(e => {console.log(e)})
            }
    },
    CLEAR_BASKET_ITEM: (state, data) => {
      axios.patch(`/api/basket`).then(status => {
        if (status){
          state.items  = []
        }
      })
      .catch(e => console.log(e))
    },
    CHANGE_COUNT: (state, item) => {
      let find = state.items.find(el => el.productId == item.productId);
      if (find.amount == 0){
        axios.delete(`/api/basket/${find.productId}`)
        .then(status => {
          if(status){
            state.items.splice(state.items.indexOf(find), 1);
          }
        })
        .catch(e => {console.log(e)})
      
      } else {
      axios.put(`/api/basket/${find.productId}`, item.amount)
              .then(status => {
                if(status){
                  find.amount = item.amount;
                }
              })
              .catch(e => {console.log(e)})
    }
  }
  },
  actions: {
    GET_CATALOG_ITEM({commit}){
      return axios.get('/api/catalog')
      .then((items) => commit('SET_CATALOG', items.data))  
      .catch((error)=> {console.log(error)});
      //from build /catalog
      //from dev /api/catalog
    },
    GET_BASKET_ITEM({commit}){
      return axios.get('/api/basket')
      //from dev basket
      //from build /basket
      .then((items) => commit('SET_ITEMS', items.data))
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
