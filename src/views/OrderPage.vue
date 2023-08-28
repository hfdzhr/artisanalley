<template>
  <div class="pt-20 bg-amber-50">
    <div class="container mx-auto px-4">
      <div class="message text-center">
        <h1 class="text-3xl font-bold pt-10">Terimakasih Telah Memesan</h1>
        <p>Kode Pemesanan : {{ getOrder.code }}</p>
        <p class="italic">
          Terimakasih atas kepercayaan Tn./Ny. {{ getOrder.user.name }} kepada ArtisanAlley
        </p>
      </div>
      <div class="mx-10 mt-10">
        <div class="grid grid-cols-2">
          <div>
            <dl
              class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700"
            >
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Kode Pemesanan : 
                </dt>
                <dd class="text-lg font-semibold">{{ getOrder.code }}</dd>
              </div>
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Alamat Email : 
                </dt>
                <dd class="text-lg font-semibold">{{ getOrder.user.email }}</dd>
              </div>
              <div class="flex flex-col py-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Alamat Rumah : 
                </dt>
                <dd class="text-lg font-semibold">
                  {{ getOrder.shipping_address.address }}, {{  getOrder.shipping_address.city }}, {{  getOrder.shipping_address.state }}, {{  getOrder.shipping_address.country }}, {{  getOrder.shipping_address.postal_code }}
                </dd>
              </div>
              <div class="flex flex-col pt-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Nomor Telpon :
                </dt>
                <dd class="text-lg font-semibold">
                  {{  getOrder.shipping_address.phone }}
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <dl
              class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700"
            >
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Metode Pembayaran : 
                </dt>
                <dd class="text-lg font-semibold">{{ getOrder.orders[0].payment_type }}</dd>
              </div>
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Metode Pengiriman : 
                </dt>
                <dd class="text-lg font-semibold">{{ getOrder.orders[0].delivery_type }}</dd>
              </div>
              <div class="flex flex-col py-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Alamat Tagihan : 
                </dt>
                <dd class="text-lg font-semibold">
                  {{ getOrder.shipping_address.address }}, {{  getOrder.shipping_address.city }}, {{  getOrder.shipping_address.state }}, {{  getOrder.shipping_address.country }}, {{  getOrder.shipping_address.postal_code }}
                </dd>
              </div>
              <div class="flex flex-col pt-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Total Barang :
                </dt>
                <dd class="text-lg font-semibold">
                  {{  getOrder.orders[0].grand_total }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {{ orderData }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  props: ['orderCode'],
  computed: {
    ...mapGetters('order', ['getOrder']),
  },
  created() {
    this.$store.dispatch('order/fetchOrderData', this.orderCode);
  },
};
</script>
