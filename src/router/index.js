import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';
import ProductPage from '../views/ProductPage.vue';

const merk = 'ArtisanAlley';

const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: HomePage,
    meta: { title: merk +' | ' +'Beranda' },
  },
  {
    path: '/product',
    name: 'Produk',
    component: ProductPage,
    meta: { title: merk +' | ' +'Produk' },

  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: { title: merk +' | ' +'Login' },

  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
