import axios from 'axios';

const categories = {
  namespaced: true,
  state: {
    dataCategories: [],
  },
  getters: {
    getAllCategories: (state) => state.dataCategories,
  },
  actions: {
    async fetchCategories({ commit }) {
      try {
        const urlCategories =
          'https://ecommerce.olipiskandar.com/api/v1/all-categories';
        const categoriesApi = await axios.get(urlCategories);
        commit('SET_CATEGORIES', categoriesApi.data['data']);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.dataCategories = categories;
    },
  },
};

export default categories;
