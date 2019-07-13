import VueRouter from 'vue-router';

import { store } from 'store/store.js';

let routes = [
  {
    path:      '/',
    props:     { id: 'section-home' },
    component: require('../sections/home.vue').default,
    beforeEnter(to, from, next) {
      store.state.sectionOpen = false;
      // store.state.showModal = false;
      // store.state.imageSrc = '';
      // Clear the Vuex Store Values
      store.dispatch('closeModal');
      next();
      function widthChange(mq) {
        if (mq.matches) {

          // window height and width are big enough for 
          // the coner nav - hide small nav screen
          store.dispatch('smallNavClose');

        } else {
          // window height and width are too small for 
          // the coner nav - show small nav screen
          store.dispatch('smallNavOpen');

        }
      }
      var mq = window.matchMedia('(min-width: 501px) and (min-height: 601px)');
      widthChange(mq);
      mq.addListener(widthChange);
    },
  },
  {
    path:      '/work',
    props:     { id: 'section-work' },
    component: require('../sections/section-work.vue').default,
    beforeEnter(to, from, next) {
      // store.state.sectionOpen = true;
      // store.state.showModal = false;
      // store.dispatch('closeModal');
      // store.state.imageSrc = '';
      store.dispatch('closeModal');
      next();
    },
    children: [
      { path:      '/' + store.state.imageSrc,
        props:     { id: 'modal-creative-examples' },
        component: require('../components/modal-slideshow.vue'),
        beforeEnter(to, from, next) {
          // store.state.sectionOpen = true;
          // store.state.showModal = true;
          // store.dispatch('openModal');
          next();
        },
      },
    ],
  },
  // {
  //   path:      '/' + store.state.imageSrc,
  //   props:     { id: 'modal-creative-examples' },
  //   component: require('../components/modal-slideshow.vue').default,
  //   beforeEnter(to, from, next) {
  //     // store.state.sectionOpen = true;
  //     // store.state.showModal = false;
  //     // store.dispatch('closeModal');
  //     next();
  //   },
  // },
  {

    path:      '/pharma',
    props:     { id: 'section-pharma-work' },
    component: require('../sections/section-pharma-work.vue').default,
    beforeEnter(to, from, next) {
      store.state.sectionOpen = true;
      store.dispatch('closeModal');
      next();
    },
  },
  {

    path:      '/personal',
    props:     { id: 'section-personal-work' },
    component: require('../sections/section-personal-work.vue').default,
    beforeEnter(to, from, next) {
      store.state.sectionOpen = true;
      store.dispatch('closeModal');
      next();
    },
  },
  {

    path:      '/about',
    props:     { id: 'section-about' },
    component: require('../sections/section-about.vue').default,
    beforeEnter(to, from, next) {
      store.state.sectionOpen = true;
      store.dispatch('closeModal');
      next();
    },
  },
  {

    path:      '/archive',
    props:     { id: 'section-archived-work' },
    component: require('../sections/section-archive-work.vue').default,
    beforeEnter(to, from, next) {
      store.state.sectionOpen = true;
      store.dispatch('closeModal');
      next();
    },
  },
  {

    path:      '/contact',
    props:     { id: 'section-contact' },
    component: require('../sections/section-contact.vue').default,
    beforeEnter(to, from, next) {
      store.state.sectionOpen = true;
      store.dispatch('closeModal');
      next();
    },
  },
  {

    path:      '/settings',
    props:     { id: 'section-settings' },
    component: require('../sections/section-settings.vue').default,
    beforeEnter(to, from, next) {
      store.state.sectionOpen = true;
      store.dispatch('closeModal');
      next();
    },
  },


];

export default new VueRouter({

  routes,

});
