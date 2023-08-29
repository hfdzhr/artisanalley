<template>
  <div class="py-20 bg-amber-50">
    <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
      <div class="px-4 pt-8">
        <p class="text-xl font-medium">Pesanan</p>
        <p class="text-gray-400">
          Cek produk kamu dan pilih pembayaran yang di inginkan
        </p>
        <div
          class="mt-8 space-y-3 rounded-lg border bg-amber-50 px-2 py-4 sm:px-6"
        >
          <div v-for="cart in getAllCart" :key="cart.cart_id">
            <div class="flex flex-col rounded-lg bg-amber-50 sm:flex-row">
              <img
                class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src="../assets/img/bowl.webp"
                alt=""
              />
              <div class="flex w-full flex-col px-4 py-4">
                <span class="font-semibold">{{ cart.name }}</span>
                <span class="float-right text-gray-400"
                  >Jumlah : {{ cart.qty }}</span
                >
                <p class="text-lg font-bold">
                  Rp. {{ cart.regular_price * cart.qty }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Ekspedisi -->
        <p class="mt-8 text-lg font-medium">Jasa Ekspedisi</p>
        <form class="mt-5 grid gap-6">
          <div class="relative">
            <input
              class="peer hidden"
              id="radio_2"
              type="radio"
              name="radio"
              value="standard"
              v-model="deliveryType"
            />
            <span
              class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"
            ></span>
            <label
              class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-amber-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              for="radio_2"
            >
              <img
                class="w-14 object-contain"
                src="../assets/img/standard_delivery.png"
                alt="Standard Delivery"
              />
              <div class="ml-5 mt-1">
                <span class="mt-5 font-semibold">Standard</span>
                <p>Waktu Pengiriman : <b> 5± Hari</b></p>
              </div>
            </label>
          </div>
          <div class="relative">
            <input
              class="peer hidden"
              id="radio_1"
              type="radio"
              name="radio"
              value="express"
              v-model="deliveryType"
            />
            <span
              class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"
            ></span>
            <label
              class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-amber-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              for="radio_1"
            >
              <img
                class="w-14 object-contain"
                src="../assets/img/express_delivery.png"
                alt=""
              />
              <div class="ml-5 mt-1">
                <span class="font-semibold">Express Delivery</span>
                <p>Waktu Pengiriman : <b> 2± Hari</b></p>
              </div>
            </label>
          </div>
        </form>

        <!-- Metode Pembayaran -->
        <p class="mt-8 text-lg font-medium">Metode Pembayaran</p>
        <form class="mt-5 grid gap-6">
          <div class="relative">
            <input
              class="peer hidden"
              id="radio_3"
              type="radio"
              name="radio"
              value="cash_on_delivery"
              v-model="paymentType"
            />
            <span
              class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"
            ></span>
            <label
              class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-amber-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              for="radio_3"
            >
              <img
                class="w-14 object-contain"
                src="../assets/img/cash_on_delivery.png"
                alt=""
              />
              <div class="ml-5 mt-1">
                <span class="mt-5 font-semibold">COD (Bayar Di Tempat)</span>
                <p>Tersedia untuk Transaksi Ini</p>
              </div>
            </label>
          </div>
        </form>
      </div>
      <div class="mt-10 bg-amber-50 px-4 pt-8 lg:mt-0">
        <p class="text-xl font-medium">Detail Alamat</p>
        <p class="text-gray-400">Silahkan Pilih Alamat Anda</p>
        <div class="">
          <form class="mt-5 grid gap-6">
          <div class="relative" v-for="(alamat, index) in gettersUserAddress.data" :key="alamat.id">
            <input
              class="peer hidden"
              :id="`radio_${index + 4}`"
              type="radio"
              name="radio"
              :value=alamat.id
              v-model="addressId"
            />
            <span
              class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"
            ></span>
            <label
              class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-amber-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              :for="`radio_${index + 4}`"
            >
              <div class="ml-5 mt-1">
                <span class="mt-5 font-semibold">Alamat {{ index + 1 }}</span>
                <p>{{ alamat.address }}, {{ alamat.city }}, {{ alamat.state }}, {{ alamat.country }}</p>
              </div>
            </label>
          </div>
        </form>
        </div>
        <button
          @click="performCheckout"
          class="mt-10 mb-8 w-full bg-amber-950 border border-amber-950 hover:text-amber-950 hover:bg-amber-50 transition px-6 py-3 font-medium text-white"
        >
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      addressId: 0,
      paymentType: '',
      deliveryType: '',
    };
  },
  computed: {
    ...mapGetters('cart', ['getAllCart']),
    ...mapGetters('cart', ['getCheckout']),
    ...mapGetters('auth', ['gettersUserAddress']),
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
    ...mapActions('product', ['fetchProducts']),
    ...mapActions('product', ['fetchProducts']),
    ...mapActions('auth', ['getUserAddress']),
    async performCheckout() {
      // Collect the product IDs to be checked out
      const cartItemIds = this.getAllCart.map((product) => product.cart_id);
      // Get user address

      const checkoutPayload = {
        shippingAddress: this.addressId,
        billingAddress: this.addressId,
        paymentType: this.paymentType,
        deliveryType: this.deliveryType,
        cart_item_ids: cartItemIds,
      };

      // Call the checkout action with the collected IDs and user address
      await this.$store
        .dispatch('cart/checkoutCart', checkoutPayload)
        .then(() => {
          this.$router.push(`/order/${this.getCheckout.order_code}`);
        });
    },
  },
  beforeMount() {
    this.fetchProducts;
    this.getUserAddress();
  },
  mounted() {
    this.fetchCart();
  },
};
</script>
