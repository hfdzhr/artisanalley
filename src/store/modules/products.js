import axios from 'axios';

const products = {
  namespaced: true,
  state: {
    dataProducts: [],
    getProduct: [],
    cart: [],
  },
  getters: {
    getLatestProducts: (state) => state.dataProducts,
  },
  actions: {
    async fetchLatestProducts({ commit }) {
      try {
        const urlLatestProducts =
          'https://ecommerce.olipiskandar.com/api/v1/product/latest/11';
        const latestProductsApi = await axios.get(urlLatestProducts);
        commit('SET_LATEST_PRODUCTS', latestProductsApi.data['data']);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchProductBySlug({ commit }, slug) {
      try {
        const urlSingleProducts = `https://ecommerce.olipiskandar.com/api/v1/product/details/${slug}`;
        const singleProductAPI = await axios.get(urlSingleProducts);
        commit('SET_DETAIL_PRODUCTS', singleProductAPI.data['data']);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async addToCart({ commit }, productId) {
      try {
        const urlAddCart =
          'https://ecommerce.olipiskandar.com/api/v1/carts/add';
        const responseCart = await axios.post(
          urlAddCart,
          {
            variation_id: productId,
            qty: 1,
            temp_user_id: null,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        commit('ADD_TO_CART', responseCart.data);
        console.log(responseCart.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    SET_LATEST_PRODUCTS(state, products) {
      state.dataProducts = products;
    },
    SET_DETAIL_PRODUCTS(state, products) {
      state.getProduct = products;
    },
    ADD_TO_CART(state, cart) {
      state.cart = cart;
    },
  },
};

export default products;
