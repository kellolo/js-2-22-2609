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
    set_catalog: (state, data) => {
      state.catalog = data;
    },
    set_items: (state, data) => {
      state.items = data.content;
    },
    set_add_cart: (state, item) =>{
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
    remove_item: (state, item) => {
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
    clear_basket_item: (state, data) => {
      axios.patch(`/api/basket`).then(status => {
        if (status){
          state.items  = []
        }
      })
      .catch(e => console.log(e))
    },
    change_count: (state, item) => {
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
    get_catalog_items({commit}){
      return axios.get('/api/catalog')
      .then((items) => commit('set_catalog', items.data))  
      .catch((error)=> {console.log(error)});

    },
    get_basket_items({commit}){
      return axios.get('/api/basket')
      .then((items) => commit('set_items', items.data))
      .catch((error)=> {console.log(error)})
    },
    add({commit}, item){
      commit('set_add_cart', item )
    },
    remove({commit}, item){
      commit('remove_item', item)
    },
    clear_basket({commit}){
      commit('clear_basket_item')
    },
    change({commit}, item){
      commit('change_count', item)
    }
  },
  modules: {
  },
  getters: {
    items(state) {
      return state.items
    },
    catalog(state) {
      return state.catalog
    },
    sum (state) {
      let totalSum = state.items.reduce((sum, el) => (sum + el.productPrice*el.amount),0 
      );
      return totalSum
    },
    
  }
})
