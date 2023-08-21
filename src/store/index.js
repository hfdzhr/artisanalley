import { createStore } from 'vuex';
import auth from './modules/auth';
import brands from './modules/brands';
import products from './modules/products';
import categories from './modules/categories';

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    auth,
    brands,
    products,
    categories,
  },
});

export default store;
