import Vue from 'vue';
import Vuex from 'vuex';

// import selects from 'store/modules/selects.js';

Vue.use(Vuex);

/* 
export default new Vuex.Store({
  modules: {
    selects,
  },
});
*/

export const store = new Vuex.Store({
  state: {
    selects:             '',
    selectedChanged:     '',
    sendSelected:        '',
    sectionIsOpen:       '',
    sectionOpen:         false,
    showSmallNav:        false,
    smallNavVisibilty:   '',
    currentShowSmallNav: '',
    bringBackCornerNav:  '',
    tabVisibility:       '',
    modalVisibility:     '',
    passwordStatus:      '',
    noActiveClient:      '',
  },
  getters: {

  },
});
