<template>
  <div class="pt-20 bg-amber-50">
    <div class="container mx-auto px-4">
      <h1 class="font-bold text-3xl text-center pt-5x">Profile</h1>
      <div class="grid grid-cols-2 justify-items-center">
        <div class="mt-10 max-w-sm">
          <div class="border border-amber-950 bg-amber-50 px-4 pt-8 shadow-lg">
            <div class="relative mx-auto w-36 rounded-full">
              <span
                class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"
              ></span>
              <img
                class="mx-auto h-auto w-full rounded-full"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <h1
              class="my-1 text-center text-xl font-bold leading-8 text-gray-900"
            >
              {{ user.name }}
            </h1>
            <h3 class="font-lg text-bold text-center leading-6 text-gray-600">
              {{ user.id }}
            </h3>
            <ul
              class="mt-3 divide-y bg-amber-50 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow"
            >
              <li class="flex items-center py-3 text-sm">
                <span>Email : </span>
                <span class="ml-auto"
                  ><span class="py-1 px-2 text-xs font-medium text-black">{{
                    getUserData.email
                  }}</span></span
                >
              </li>
              <li class="flex items-center py-3 text-sm">
                <span>Saldo</span>
                <span class="ml-auto"
                  ><span
                    class="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700"
                    >{{ getUserData.balance }}</span
                  ></span
                >
              </li>
              <li class="flex items-center py-3 text-sm">
                <span>Phone : </span>
                <div v-if="getUserData.phone == null">
                  <span class="ml-auto">-</span>
                </div>
                <div v-else>
                  <span class="ml-20">{{ getUserData.phone }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-10">
          <div v-for="item in address.data">
            <div
              class="block p-6 my-3 bg-amber-50 border border-amber-950 rounded-lg shadow hover:bg-amber-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5
                class="text-lg font-bold tracking-tight text-gray-900 dark:text-white"
              >
                <i class="fa-solid fa-location-dot"></i> Alamat
              </h5>
              <h5
                class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Hafid Al Azhar
              </h5>
              <p class="font-normal">{{ item.phone }}</p>
              <p class="font-normal dark:text-gray-400">
                {{ item.address }}, {{ item.city }}, {{ item.state }},
                {{ item.country }}, {{ item.postal_code }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('profile', ['getUserData']),
    ...mapGetters('auth', ['gettersUserAddress']),
    user() {
      return this.getUserData;
    },
    address() {
      return this.gettersUserAddress;
    },
  },
  methods: {
    ...mapActions('profile', ['fetchUser']),
    ...mapActions('auth', ['getUserAddress']),
  },
  async mounted() {
    this.getUserAddress();
    const user = await this.fetchUser();

    if (user) {
      this.$store.commit('profile/SET_USER', user);
    }
  },
};
</script>
