<template>
  <div>
    <div class="h-screen bg-amber-50 pt-20">
      <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div v-if="total != 0">
        <div
          class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
        >
          <div class="md:w-2/3">
            <div v-for="cart in getAllCart" :key="cart.cart_id">
              <div
                class="justify-between mb-6 ring ring-amber-950 transition delay-75 p-6 sm:flex sm:justify-start"
              >
                <img
                  src="../assets/img/bowl.webp"
                  alt="product-image"
                  class="w-40"
                />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">
                      {{ cart.name }}
                    </h2>
                    <p class="mt-1 text-xs text-gray-700">
                      {{ cart.cart_id }}
                    </p>
                  </div>
                  <div
                    class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
                  >
                    <div
                      class="flex items-center gap-1 my-2 border border-amber-900 w-[144px]"
                    >
                      <button
                        @click="
                          editQuantity({
                            cartId: cart.cart_id,
                            typeQty: 'minus',
                          })
                        "
                        type="button"
                        class="w-10 h-10 leading-10 text-gray-600 hover:bg-amber-900 hover:text-white transition"
                      >
                        &minus;
                      </button>

                      <input
                        type="number"
                        id="Quantity"
                        :value="cart.qty"
                        class="h-10 w-16 rounded bg-amber-50 border border-none text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      />

                      <button
                        @click="
                          editQuantity({
                            cartId: cart.cart_id,
                            typeQty: 'plus',
                          })
                        "
                        type="button"
                        class="w-10 h-10 leading-10 hover:bg-amber-900 hover:text-white transition"
                      >
                        &plus;
                      </button>
                    </div>
                    <div class="flex items-center space-x-4">
                      <p class="text-sm">Rp. {{ cart.regular_price }}</p>
                      <div @click="deleteCart(cart.cart_id)">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Sub total -->
          <div
            class="mt-6 h-full border border-amber-950 bg-white p-6 shadow-md md:mt-0 md:w-1/3"
          >
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Total Belanja</p>
              <p class="text-gray-700">Rp. {{ total }}</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Biaya Jasa</p>
              <p class="text-gray-700">Rp. {{ getAllCart.length * 10000 }}</p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total Harga</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">
                  {{
                    (total + getAllCart.length * 10000).toLocaleString(
                      'id-ID',
                      { style: 'currency', currency: 'IDR' }
                    )
                  }}
                </p>
              </div>
            </div>
            <router-link to="/checkout">
              <button
                class="mt-6 w-full bg-amber-950 border border-amber-950 hover:bg-amber-50 hover:text-amber-950 transition py-1.5 font-medium text-blue-50"
              >
                Check out
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="text-center">
          Keranjang anda kosong silahkan, belanja terlebih dahulu
        </p>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('cart', ['getAllCart']),
    total() {
      let total = 0;
      for (let i = 0; i < this.getAllCart.length; i++) {
        const subtotal =
          this.getAllCart[i].regular_price * this.getAllCart[i].qty;
        total += subtotal;
      }
      return total;
    },
  },
  methods: {
    ...mapActions('cart', ['fetchCart']),
    ...mapActions('cart', ['removeFromCart']),
    ...mapActions('cart', ['changeQuantity']),

    deleteCart(cartId) {
      this.removeFromCart(cartId);
    },

    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },

    editQuantity(cartId, typeQty) {
      this.changeQuantity(cartId, typeQty);
    },
  },
  beforeMount() {
    this.fetchCart();
  },
};
</script>
