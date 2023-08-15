<template>
  <div>
    <HeroSection/>
    <ProductSection/>
  </div>
</template>

<script>
import HeroSection from '../components/section/HeroSection.vue';
import ProductSection from '../components/section/ProductSection.vue';

export default {
  components: {
    HeroSection,
    ProductSection
  },
};
</script>
