var styles = require('css/global-style.css');

import Vue from 'vue';
// import jquery from 'jquery';
// import axios from 'axios';
// var axios = require('axios/dist/axios');
import TweenMax from 'gsap/TweenMax';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import VueRouter from 'vue-router';
import router from 'js/routes.js';
// import { store } from 'store/store.js';
import Modernizr from 'modernizr';

// import contactAndPrefs from 'components/contact-and-prefs.vue';
Vue.component('contactandprefs', require('components/contact-and-prefs.vue').default);

import navCornerMenu from 'components/nav-corner-menu.vue';
Vue.component('navcornermenu', require('components/nav-corner-menu.vue').default);

// import modalPassword from 'components/modal-password.vue';
// Vue.component('modalpassword', require('components/modal-password.vue').default);

export const eventBus = new Vue(); // END export eventBus

window.Vue = Vue;
Vue.use(VueRouter);
// window.jquery = jquery;
// window.axios = axios;
// window.axios = require('axios');
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
    router: router,
    // store:  store,
  });
});
