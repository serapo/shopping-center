import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    items: [] as Array<any>,
    count: 0,
  },
  getters: {},
  mutations: {
    SET_Item(state, items) {
      state.items = items;
    },
    increment(state) {
      state.count++;
    },
  },
  actions: {
    loadItems({ commit }) {
      axios
        .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=100")
        .then((response) => response.data)
        .then((items) => {
          for (let i = 0; i < items.length; i++) {
            items[i].color="black"
          }
          commit("SET_Item", items);
        });
    },
    increment: ({ commit }) => commit('increment'),
  },
  modules: {},
});
