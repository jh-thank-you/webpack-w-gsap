import Vue from 'vue';
import Vuex from 'vuex';
import router from 'js/routes.js';
import createPersist from 'vuex-localstorage';

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [
    createPersist({
      namespace:    'hainis-vue-state',
      initialState: {},
      expires:      7 * 24 * 60 * 60 * 1000,
    }),
  ],
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
  }, // END state
  mutations: {

    sectionOpened: state => {
      state.sectionOpen = true;
    },

    sectionClosed: state => {
      state.sectionOpen = false;
    },

    smallNavFalse: state => {
      state.showSmallNav = false;
    },

    smallNavTrue: state => {
      state.showSmallNav = true;
    },

  }, // END mutations
  actions: {

    setSectionOpened: context => {
      context.commit('sectionOpened');
    },

    setSectionClosed: context => {
      // update section open status
      context.commit('sectionClosed');

      // send to new route
      router.push({ path: '/', id: 'section-home' });

    },

    smallNavOpen: context => {
      context.commit('smallNavTrue');
    },

    smallNavClose: context => {
      context.commit('smallNavFalse');
    },

    updateChecked(state, payload) {
      state = payload;
    },

  }, // END actions
  getters: {

    getSectionStatus: state => state.sectionOpen,

    getSmallNavStatus: state => state.showSmallNav,

  }, // END getters
  modules: {

  },// END modules
});
