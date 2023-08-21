<template>
    <div class="bg-amber-50">
        <div class="pt-20 container mx-auto px-4 ">
          <h2 class="text-center text-3xl font-bold">Brands</h2>
          <div class="grid mt-10 grid-cols-3 gap-4">
            <div v-for="brands in getAllBrands.slice(0,6)" :key="brands.id">
              <div class="cursor-pointer">
                <img
                  :src="brands.logo"
                  alt="Product Image"
                  width="200"
                  class="mx-auto rounded-tl-full rounded-tr-full  ring ring-amber-950"
                />
                <div>
                      <p class="text-light text-center mt-2 mb-5 font-semibold">
                        {{ brands.name }}
                      </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('brands', ['getAllBrands']),
  },
  methods: {
    ...mapActions('brands', ['fetchBrands']),
  },
  created() {
    this.fetchBrands();
  },
};
</script>
