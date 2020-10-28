import Vue from 'vue'
import Vuex from 'vuex'
import fetchBasket from './modules/fetchBasket'
import fetchCatalog from './modules/fetchCatalog'

Vue.use(Vuex)

export default new Vuex.Store({
  //начальные данные и данные которые есть в приложеннии
  state: {
  },
  //функции которые на прямую изменяют store
  mutations: {
  },
  //обьект
  actions: {
  },
  //логика store
  modules: {
    fetchBasket,
    fetchCatalog
  },
  // трансформируют и получают данные из store
  getters: {
  }
})
