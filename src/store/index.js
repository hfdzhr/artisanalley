import { createStore } from 'vuex';
import auth from './modules/auth';

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    auth,
  },
});

export default store
