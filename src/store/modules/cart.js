import axios from 'axios';

const cart = {
  namespaced: true,
  state: {
    dataCart: [],
  },
  getters: {
    getAllCart: (state) => state.dataCart,
  },
  actions: {
    async fetchCart({ commit }) {
      try {
        const urlCart = 'https://ecommerce.olipiskandar.com/api/v1/carts';
        const cartApi = await axios.post(
          urlCart,
          {
            temp_user_id: null,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        console.log(cartApi.data['cart_items'].data);
        commit('SET_CART', cartApi.data['cart_items'].data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async removeFromCart({ commit, dispatch }, cartId) {
      try {
        const urlDestroy =
          'https://ecommerce.olipiskandar.com/api/v1/carts/destroy';
        const response = await axios.post(
          urlDestroy,
          {
            cart_id: cartId,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        console.log(response.message);
        dispatch('fetchCart');
      } catch (error) {
        alert('Error removing item from cart');
        console.log(error);
      }
    },
  },
  mutations: {
    SET_CART(state, cart) {
      state.dataCart = cart;
    },
  },
};

export default cart;
