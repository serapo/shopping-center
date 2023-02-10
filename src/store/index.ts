import axios from 'axios';
import { createStore} from 'vuex'


export default createStore({
  state: {
    items: [] as Array<any>,
  },
  getters: {
  
  },
  mutations: {
    SET_Item (state, items) {
      state.items = items
  }
  },
  actions: {
    loadItems ({ commit }) {
      axios
          .get('https://api.escuelajs.co/api/v1/products')
          .then(response => response.data)
          .then(items => {
              console.log(items);
          commit('SET_Item', items)
      })
  }
  },
  modules: {
  }
})
