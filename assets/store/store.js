import Vue from 'vue';
import Vuex from 'vuex';

import selects from 'store/modules/selects.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    selects,
  },
});
