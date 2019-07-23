import VueRouter from 'vue-router';

import { store } from 'store/store.js';

import Home from '../sections/home.vue';
import Work from '../sections/section-work.vue';
import Pharma from '../sections/section-pharma-work.vue';
import Personal from '../sections/section-personal-work.vue';
import About from '../sections/section-about.vue';
import Contact from '../sections/section-contact.vue';
import Archive from '../sections/section-archive-work.vue';
import Settings from '../sections/section-settings.vue';


import slideshowModal from '../components/modal-slideshow.vue';


let routes = [
  {
    path:      '/',
    props:     { id: 'section-home' },
    component: Home,
    beforeEnter(to, from, next) {
      store.state.sectionOpen = false;

      var currentSection = 'section-home';
      store.dispatch('updateSectionID', currentSection);

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

      next();
    },
  },
  {
    path:      '/work',
    props:     { id: 'section-work' },
    component: Work,
    beforeEnter(to, from, next) {
      store.state.sectionOpen = true;

      var currentSection = 'section-work';
      store.dispatch('updateSectionID', currentSection);

      next();
    },
    children: [
      {
        path:      ':slideshowId',
        name:      'modal-slideshow-work',
        component: slideshowModal,
        props:     true,
      },
    ],
  },
  {
    path:      '/pharma',
    props:     { id: 'section-pharma-work' },
    component: Pharma,
    beforeEnter(to, from, next) {
      store.state.sectionOpen = true;

      var currentSection = 'section-pharma-work';
      store.dispatch('updateSectionID', currentSection);

      next();
    },
    children: [
      {
        path:      ':slideshowId',
        name:      'modal-slideshow-pharma',
        component: slideshowModal,
        props:     true,
      },
    ],
  },
  {
    path:      '/personal',
    props:     { id: 'section-personal-work' },
    component: Personal,
    beforeEnter(to, from, next) {
      store.state.sectionOpen = true;

      var currentSection = 'section-personal-work';
      store.dispatch('updateSectionID', currentSection);

      next();
    },
    children: [
      {
        path:      ':slideshowId',
        name:      'modal-slideshow-personal',
        component: slideshowModal,
        props:     true,
      },
    ],
  },
  {

    path:      '/archive',
    props:     { id: 'section-archived-work' },
    component: Archive,
    beforeEnter(to, from, next) {
      store.state.sectionOpen = true;

      var currentSection = 'section-archived-work';
      store.dispatch('updateSectionID', currentSection);

      next();
    },
    children: [
      {
        path:      ':slideshowId',
        name:      'modal-slideshow-archive',
        component: slideshowModal,
        props:     true,
      },
    ],
  },
  {
    path:      '/about',
    props:     { id: 'section-about' },
    component: About,
    beforeEnter(to, from, next) {
      store.state.sectionOpen = true;

      var currentSection = 'section-about';
      store.dispatch('updateSectionID', currentSection);

      next();
    },
  },
  {
    path:      '/contact',
    props:     { id: 'section-contact' },
    component: Contact,
    beforeEnter(to, from, next) {
      store.state.sectionOpen = true;

      var currentSection = 'section-contact';
      store.dispatch('updateSectionID', currentSection);

      next();
    },
  },
  {
    path:      '/settings',
    props:     { id: 'section-settings' },
    component: Settings,
    beforeEnter(to, from, next) {
      store.state.sectionOpen = true;

      var currentSection = 'section-settings';
      store.dispatch('updateSectionID', currentSection);

      next();
    },
  },
]; // END let routes

export default new VueRouter({
  mode: 'history',
  routes,

});
