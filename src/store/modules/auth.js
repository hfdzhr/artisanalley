import axios from 'axios';

const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    loginError: null,
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const loginUrl = 'https://ecommerce.olipiskandar.com/api/v1/auth/login';
        const response = await axios.post(loginUrl, credentials);
        const token = response.data.access_token;
        // Save token to localStorage
        console.log(token);
        localStorage.setItem('token', token);
        commit('SET_TOKEN', token);
        commit('SET_LOGIN_ERROR', null);
        return true;
      } catch (error) {
        const errorMessage = error.response.data.message || 'Login Failed';
        commit('SET_LOGIN_ERROR', errorMessage);
        alert(error);
        console.error(error);
        return false;
      }
    },
    async register({ commit }, credentials) {
      try {
        const registerUrl =
          'https://ecommerce.olipiskandar.com/api/v1/auth/signup';
        const responseRegister = await axios.post(registerUrl, credentials);
        const token = responseRegister.data.access_token;

        console.log(credentials);
        console.log(token);
        localStorage.setItem('token', token);
        commit('SET_TOKEN', token);
        return true;
      } catch (error) {
        alert(error);
        console.error(error);
        return false;
      }
    },
    logout({ commit }) {
      // Remove token from localStorage
      const token = localStorage.getItem('token');
      localStorage.removeItem('token');
      commit('SET_TOKEN', '');
      //   Log Token removed
      console.log('Token Removed:', token);
      this.$router.push('/login');
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_LOGIN_ERROR(state, error) {
      state.loginError = error;
    },
  },
};

export default auth;
