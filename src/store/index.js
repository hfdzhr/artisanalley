import { createStore } from 'vuex';
import auth from './modules/auth';
import brands from "./modules/brands";

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    auth,
    brands
  },
});

export default store
