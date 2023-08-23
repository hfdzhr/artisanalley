import axios from 'axios';

const profile = {
  namespaced: true,
  state: {
    dataUser: [],
  },
  getters: {
    getUserData: (state) => state.dataUser,
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const token = localStorage.getItem('token');
        const urlUser = 'https://ecommerce.olipiskandar.com/api/v1/user/info';
        const userApi = await axios.get(urlUser, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit('SET_USER', userApi.data['user']);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.dataUser = user;
    },
  },
};

export default profile;
