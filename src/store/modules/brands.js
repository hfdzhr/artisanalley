import axios from 'axios';

const brands = {
  namespaced: true,
  state: {
    dataBrands: [],
  },
  getters: {
    getAllBrands: (state) => state.dataBrands,
  },
  actions: {
    async fetchBrands({ commit }) {
      try {
        const urlBrand = 'https://ecommerce.olipiskandar.com/api/v1/all-brands';
        const brandApi = await axios.get(urlBrand);
        commit('SET_BRANDS', brandApi.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_BRANDS(state, brands) {
      state.dataBrands = brands;
    },
  },
};

export default brands;
