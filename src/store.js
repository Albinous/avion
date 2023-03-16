import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: "",
    basket: [],
    basketCount: 0,
  },
  mutations: {
    SET_PRODUCTS(state, updatedProducts) {
      state.products = updatedProducts;
    },
    SET_BASKET(state, updatedBasket) {
      state.basket = updatedBasket;
    },

    addToCart(state, item) {
      let found = state.basket.find((product) => product.id == item.id);

      if (found) {
        found.quantity++;
        // found.totalPrice = found.quantity * found.price;
      } else {
        state.basket.push(item);

        Vue.set(item, "quantity", 1);
        // Vue.set(item, 'totalPrice', item.price);
      }

      state.basketCount++;
    },
  },
  actions: {
    getProductsAPI({ commit }, payload) {
      fetch(`https://fakestoreapi.com/products?limit=${payload}`)
        .then((res) => res.json())
        .then((json) => {
          commit("SET_PRODUCTS", json);
        });
    },
  },
  getters: {
    getProducts: (state) => state.products,
    getBasket: (state) => state.basket,
    getBasketCount: (state) => state.basketCount,
  },
});

export default store;
