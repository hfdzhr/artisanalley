<template>
  <footer class="bg-amber-800 mt-20">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
          <span
            class="text-amber-50 self-center text-2xl font-semibold whitespace-nowra"
            >ArtisanAlley</span
          >
        </a>
        <ul
          class="link flex flex-wrap items-center mb-6 text-lg font-medium text-amber-50 sm:mb-0"
        >
          <li>
            <router-link to="/" class="mr-5 hover:underline md:mr-6"
              >Beranda</router-link
            >
          </li>
          <li>
            <router-link to="/product" class="mr-5 hover:underline md:mr-6"
              >Produk</router-link
            >
          </li>
          <li>
            <router-link to="/" class="mr-5 hover:underline md:mr-6"
              >Tentang</router-link
            >
          </li>
          <li>
            <router-link to="/contact" class="mr-5 hover:underline md:mr-6"
              >Kontak</router-link
            >
          </li>
        </ul>
      </div>
      <hr class="my-6 sm:mx-auto lg:my-8" />
      <span
        id="copyright"
        class="block text-sm text-amber-50 sm:text-center dark:text-gray-400"
        >© 2023
        <a href="https://flowbite.com/" class="hover:underline">ArtisanAlley™</a
        >. All Rights Reserved.</span
      >
    </div>
  </footer>
</template>

<style>
.link {
  font-family: 'Belleza', sans-serif;
}

#copyright {
  font-family: 'Belleza', sans-serif;
}
</style>

<script>
export default {};
</script>
