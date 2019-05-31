var styles = require('css/global-style.css');

import Vue from 'vue';
import TweenMax from 'gsap/TweenMax';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import VueRouter from 'vue-router';
import router from 'js/routes.js';

// Vuex Store - State Management
import { store } from 'store/store.js';
import Modernizr from 'modernizr';

import navCornerMenu from 'components/nav-corner-menu.vue';
Vue.component('navcornermenu', require('components/nav-corner-menu.vue').default);

export const eventBus = new Vue(); // END export eventBus

window.Vue = Vue;
Vue.use(VueRouter);
window.Modernizr = Modernizr;
window.TweenMax = TweenMax;
window.ScrollToPlugin = ScrollToPlugin;
window.styles = styles;

window.addEventListener('load', function () {
  new Vue({
    components: { navCornerMenu /* contactAndPrefs */ /* modalPassword */ },
    el:         '#app',
    data() {
      return {
        debug: true, // use true or false to turn console logs on or off
      };
    },
    store:  store,
    router: router,
  });
});
