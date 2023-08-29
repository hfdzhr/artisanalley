<template>
  <header>
    <nav
      class="bg-amber-50 fixed w-full z-20 top-0 left-0 dark:border-gray-600"
    >
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <img src="../assets/img/logo.png" alt="Logo ArtisanAlley" width="180" srcset="">
        <div class="flex button space-x-4 md:order-2">
          <div v-if="isAuthenticated">
            <div class="grid grid-cols-2">
              <div>
                <CartBadge />
              </div>
              <div class="dropdown inline-block relative">
                <button
                  class="bg-amber-950 text-white py-2 px-4 inline-flex items-center"
                >
                  <span class="mr-1"
                    ><i class="fa-regular fa-user px-5"></i
                  ></span>
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </button>
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li class="">
                    <a
                      class="bg-amber-100 text-amber-950 hover:bg-amber-800 hover:text-white py-2 px-4 block whitespace-no-wrap"
                      href="/profile"
                      ><i class="fa-solid fa-user-gear pr-1"></i> Profile</a
                    >
                  </li>
                  <li class="cursor-pointer">
                    <a
                      class="bg-amber-100 text-amber-950 hover:bg-amber-800 hover:text-white py-2 px-4 block whitespace-no-wrap"
                      @click="logout"
                      ><i class="fa-solid fa-arrow-right-from-bracket pr-1"></i
                      >Logout</a
                    >
                  </li>
                </ul>
              </div>
            </div>
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

.dropdown:hover .dropdown-menu {
  display: block;
}

/* 
Note: you can also do this with Tailwind's group-hover. Unfortunately Tailwind CDN version does not include this variant, so you will have to adjust the tailwind.config.js file in your own project.

Example with group-hover: https://codesandbox.io/s/tailwind-dropdown-with-group-hover-gm9k9
 */
</style>

<script>
import { mapActions, mapGetters } from 'vuex';
import CartBadge from '../components/CartBadge.vue';
import { Dropdown } from 'flowbite';

export default {
  data() {
    return {
      components: {
        CartBadge,
      },
    };
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('auth', ['logout']),
  },

  components: { CartBadge },
  mounted() {
    const $targetEl = document.getElementById('dropdownMenu');

    // set the element that trigger the dropdown menu on click
    const $triggerEl = document.getElementById('dropdownButton');

    // options with default values
    const options = {
      placement: 'bottom',
      triggerType: 'click',
      offsetSkidding: 0,
      offsetDistance: 10,
      delay: 300,
      ignoreClickOutsideClass: false,
    };

    /*
     * $targetEl: required
     * $triggerEl: required
     * options: optional
     */
    const dropdown = new Dropdown($targetEl, $triggerEl, options);
  },
};
</script>
