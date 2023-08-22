<template>
  <div class="login">
    <form @submit.prevent="performLogin">
      <div class="flex h-screen w-screen items-center overflow-hidden px-2">
        <!-- Login -->
        <div
          class="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto"
        >
          <div
            class="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"
          ></div>
          <div class="mx-auto mb-2 space-y-3">
            <h1 class="text-center text-3xl font-bold text-gray-700">Login</h1>
            <p class="text-gray-500">Silahkan login ke akunmu</p>
          </div>

          <div>
            <div class="relative mt-2 w-full">
              <input
                v-model="email"
                type="email"
                id="email"
                class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                for="email"
                class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
              >
                Username/Email
              </label>
            </div>
          </div>

          <div>
            <div class="relative mt-2 w-full">
              <input
                v-model="password"
                type="password"
                id="password"
                class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                for="password"
                class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
              >
                Password</label
              >
            </div>
          </div>
          <div class="flex w-full items-center">
            <button
              class="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white"
              type="submit"
              @click="performLogin"
            >
              Masuk
            </button>
            <a
              class="w-full text-center text-sm font-medium text-gray-600 hover:underline"
              href="#"
              >Lupas Kata Sandi?</a
            >
          </div>
          <p class="text-center text-gray-600">
            Belum punya akun ?
            <a
              href="#"
              class="whitespace-nowrap font-semibold text-gray-900 hover:underline"
              >Register</a
            >
          </p>
        </div>
        <!-- /Login -->
      </div>
    </form>
  </div>
</template>

<style></style>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters('auth', ['loginError', 'isAuthenticated']),
  },
  methods: {
    ...mapActions('auth', ['login']),
    async performLogin() {
      const credentials = {
        email: this.email,
        password: this.password,
      };

      const success = await this.login(credentials);

      if (success && this.isAuthenticated) {
        // Redirect to the desired route on successful login
        this.$router.push('/');
      } else {
        // Handle Login Error
        if (this.loginError) {
          alert(this.loginError);
        } else {
          alert('Login Failed');
        }
      }
    },
  },
};
</script>
