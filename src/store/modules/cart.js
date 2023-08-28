import axios from 'axios';

const cart = {
  namespaced: true,
  state: {
    dataCart: [],
    dataCheckout: [],
  },
  getters: {
    getAllCart: (state) => state.dataCart,
    getCheckout: (state) => state.dataCheckout,
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
    async changeQuantity({ commit, dispatch }, { cartId, typeQty }) {
      try {
        const urlChangeQuantity =
          'https://ecommerce.olipiskandar.com/api/v1/carts/change-quantity';
        const response = await axios.post(
          urlChangeQuantity,
          {
            cart_id: cartId,
            temp_user_id: null,
            type: typeQty,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        console.log(response.data.message);
        dispatch('fetchCart');
      } catch (error) {
        console.error(error);
        alert(error);
      }
    },
    async checkoutCart(
      { commit, dispatch },
      {
        shippingAddress,
        billingAddress,
        paymentType,
        deliveryType,
        cart_item_ids,
      }
    ) {
      try {
        const urlCheckout =
          'https://ecommerce.olipiskandar.com/api/v1/checkout/order/store';
        const response = await axios.post(
          urlCheckout,
          {
            shipping_address_id: shippingAddress,
            billing_address_id: billingAddress,
            payment_type: paymentType,
            delivery_type: deliveryType,
            cart_item_ids: cart_item_ids,
            transactionId: null,
            receipt: null,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        dispatch('fetchCart');
        console.log(response.data.message);
        commit('SET_CHECKOUT', response.data);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    },
  },
  mutations: {
    SET_CART(state, cart) {
      state.dataCart = cart;
    },
    SET_CHECKOUT(state, checkout) {
      state.dataCheckout = checkout;
    },
  },
};

export default cart;
