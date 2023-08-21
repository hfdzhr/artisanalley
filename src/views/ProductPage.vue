<template>
  <div class="bg-amber-50">
    <div class="container mx-auto px-4 pt-20">
      <h2 class="header text-center text-4xl py-10">Produk</h2>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="latestProduct in getLatestProducts" :key="latestProduct.id">
          <a :href="'/detail/' + latestProduct.slug">
            <div class="cursor-pointer" >
              <img
                src="../assets/img/bowl.webp"
                alt="Product Image"
                width="350"
                class="mx-auto rounded-tl-full rounded-tr-full scale-80 ring ring-amber-950"
              />
              <div>
                <div class="grid grid-cols-2">
                  <div>
                    <p class="text-light ml-7 pt-4 mb-2 font-semibold">
                      {{ latestProduct.name }}
                    </p>
                    <div class="text-yellow-400 ml-7">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div>
                    <p
                      class="text-right mr-7 py-4 font-bold text-3xl text-amber-950"
                    >
                      Rp.{{ latestProduct.base_price }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('products', ['getLatestProducts']),
  },
  methods: {
    ...mapActions('products', ['fetchLatestProducts']),
  },
  created() {
    this.fetchLatestProducts();
  },
};
</script>
