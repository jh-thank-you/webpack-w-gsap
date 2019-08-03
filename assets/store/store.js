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
    // selects:             '',
    // selectedChanged:     '',
    // sendSelected:        '',
    sectionID:    '',
    sectionOpen:  false,
    showSmallNav: false,
    // smallNavVisibilty:   '',
    // currentShowSmallNav: '',
    // bringBackCornerNav:  '',
    // tabVisibility:       '',
    // modalVisibility:     '',
    // passwordStatus:      '',
    // noActiveClient:      '',
    imageSrc:     null,
    showModal:    false,
  }, // END state
  mutations: {

    setSectionID (state, currentSection) {
      state.sectionID = currentSection;
    },

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

    setImageSrc (state, currentModalID) {
      state.imageSrc = currentModalID;
    },

    setShowModalTrue: state => {
      state.showModal = true;
    },

    setShowModalFalse: state => {
      state.showModal = false;
    },

    resetImageSrc: state => {
      state.imageSrc = null;
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

    updateImageSrc (context, currentModalID) {
      context.commit('setImageSrc', currentModalID);
    },

    updateSectionID (context, currentSection) {
      context.commit('setSectionID', currentSection);
    },

    openModal: context => {
      context.commit('setShowModalTrue');
    },

    closeModal: context => {
      context.commit('setShowModalFalse');
    },

    clearImageSrc: context => {
      context.commit('resetImageSrc');
    },

  }, // END actions
  getters: {

    getSectionStatus: state => state.sectionOpen,

    getSmallNavStatus: state => state.showSmallNav,

    getModalStatus: state => state.showModal,

    getImageSrc: state => state.imageSrc,

  }, // END getters
  modules: {

  },// END modules
});
