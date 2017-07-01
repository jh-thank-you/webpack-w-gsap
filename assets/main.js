// Import all your vendor libraries here/in your entry point JS file
// Also, add any other needed JS files for your main entry point
// Note you can make import statements at the top of each of your
// JS files or Vue Modules - this helps you to see what dependencies
// each file has. ** Note ** not just for JS files CSS, images, etc.
//  Read each vendor's documentation on what the preferred import path is.

var styles = require('css/global-style.css');

import Vue from 'vue';
import jquery from 'jquery';
import axios from 'axios';
import TweenMax from 'gsap/TweenMax';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import VueRouter from 'vue-router';
import router from 'js/routes.js';

import contactAndPrefs from 'components/contact-and-prefs.vue';
Vue.component('contactandprefs', require('components/contact-and-prefs.vue'));

import navCornerMenu from 'components/nav-corner-menu.vue';
Vue.component('navcornermenu', require('components/nav-corner-menu.vue'));

import modalPassword from 'components/modal-password.vue';
Vue.component('modalpassword', require('components/modal-password.vue'));

export const eventBus = new Vue(); // END export eventBus

window.Vue = Vue;
Vue.use(VueRouter);
window.jquery = jquery;
window.axios = axios;
window.TweenMax = TweenMax;
window.ScrollToPlugin = ScrollToPlugin;
window.styles = styles;

window.addEventListener('load', function () {
  new Vue({
    el: '#app',
    components: { navCornerMenu, contactAndPrefs, modalPassword },
    data() {
      return {
        debug: true,
      };
    },
    router: router,
  });
});