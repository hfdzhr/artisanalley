import axios from 'axios';

const products = {
  namespaced: true,
  state: {
    dataProducts: [],
    getProduct: []
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
        const urlSingleProducts =
          `https://ecommerce.olipiskandar.com/api/v1/product/details/${slug}`;
        const singleProductAPI = await axios.get(urlSingleProducts);
        commit('SET_DETAIL_PRODUCTS', singleProductAPI.data['data']);
      } catch (error) {
        alert(error)
        console.log(error)
      }

    },
  },
  mutations: {
    SET_LATEST_PRODUCTS(state, products) {
      state.dataProducts = products;
    },
    SET_DETAIL_PRODUCTS(state, products) {
      state.getProduct = products
    }
  },
};

export default products;
