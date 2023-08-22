<template>
  <header>
    <nav
      class="bg-amber-50 fixed w-full z-20 top-0 left-0 dark:border-gray-600"
    >
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a
          href="https://flowbite.com/"
          class="logo text-amber-950 flex items-center"
        >
          <span class="self-center text-2xl font-semibold whitespace-nowrap"
            >ArtisanAlley</span
          >
        </a>
        <div class="flex button space-x-4 md:order-2">
          <div v-if="isAuthenticated">
            <a
              @click="logout"
              type="button"
              class="text-white text-lg cursor-pointer bg-amber-800 px-6 py-3 hover:bg-amber-50 hover:text-amber-800 hover: border border-amber-800 font-medium text-center mr-3 md:mr-0"
            >
              Keluar
            </a>
          </div>
          <div v-else>
            <a
              href="/register"
              type="button"
              class="text-amber-800 text-lg cursor-pointer bg-amber-50 px-6 py-3 border border-amber-800 hover:bg-amber-800 hover:text-white font-medium text-center mr-3"
            >
              Daftar
            </a>
            <a
              href="/login"
              type="button"
              class="text-white text-lg cursor-pointer bg-amber-800 px-6 py-3 hover:bg-amber-50 hover:text-amber-800 hover: border border-amber-800 font-medium text-center mr-3 md:mr-0"
            >
              Masuk
            </a>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            class="nav-link flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-amber-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <router-link
                to="/"
                class="block py-2 pl-3 pr-4 text-amber-950 rounded md:hover:text-amber-700 md:p-0 text-xl dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Beranda</router-link
              >
            </li>
            <li>
              <router-link
                to="/product"
                class="block py-2 pl-3 pr-4 text-amber-950 rounded md:hover:text-amber-700 md:p-0 text-xl dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Produk</router-link
              >
            </li>
            <li>
              <router-link
                to="/brands"
                class="block py-2 pl-3 pr-4 text-amber-950 rounded md:hover:text-amber-700 md:p-0 text-xl dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Merk</router-link
              >
            </li>
            <li>
              <router-link
                to="/product"
                class="block py-2 pl-3 pr-4 text-amber-950 rounded md:hover:text-amber-700 md:p-0 text-xl dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Tentang</router-link
              >
            </li>
            <li>
              <router-link
                to="/contact"
                class="block py-2 pl-3 pr-4 text-amber-950 rounded md:hover:text-amber-700 md:p-0 text-xl dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Kontak</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style>
.nav-link {
  font-family: 'Belleza', sans-serif;
}

.button {
  font-family: 'Belleza', sans-serif;
}
</style>

<script>
import store from '../store';
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('auth', ['logout']),
  },
};
</script>
