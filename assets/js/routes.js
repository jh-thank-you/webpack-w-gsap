import VueRouter from 'vue-router';

import { store } from 'store/store.js';

let routes = [
  {
    path:      '/',
    props:     { id: 'section-home' },
    component: require('../sections/home.vue').default,
    beforeEnter(to, from, next) {
      store.state.sectionOpen = false;
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

  },
  {

    path:      '/pharma',
    props:     { id: 'section-pharma-work' },
    component: require('../sections/section-pharma-work.vue').default,

  },
  {

    path:      '/personal',
    props:     { id: 'section-personal-work' },
    component: require('../sections/section-personal-work.vue').default,

  },
  {

    path:      '/about',
    props:     { id: 'section-about' },
    component: require('../sections/section-about.vue').default,

  },
  {

    path:      '/archive',
    props:     { id: 'section-archived-work' },
    component: require('../sections/section-archive-work.vue').default,

  },
  {

    path:      '/contact',
    props:     { id: 'section-contact' },
    component: require('../sections/section-contact.vue').default,

  },
  {

    path:      '/settings',
    props:     { id: 'section-settings' },
    component: require('../sections/section-settings.vue').default,

  },


];

export default new VueRouter({

  routes,

});
