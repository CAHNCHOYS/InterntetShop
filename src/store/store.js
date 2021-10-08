//Vue store

import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
  state: {
    cartProducts: JSON.parse(localStorage.getItem("products") || "[]"),
    windowWidth: document.documentElement.clientWidth,
  },
  mutations: {
    // Установка значение размера окна(смотри компонент хеадера)
    UPDATE_WINDOW_WIDTH(state, width) {
      state.windowWidth = width;
    },
  },
  actions: {},
  getters: {
    GET_CURRENT_CARTPRODUCTS_COUNT(state) {
      return state.cartProducts.length;
    },
    //Получение размера окна(для адаптации)
    GET_WINDOW_WIDTH(state) {
      return state.windowWidth;
    },
  },
});
