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
    components: { navCornerMenu, contactAndPrefs, modalPassword },
    el: '#app',
    data() {
      return {
        debug: true,
      };
    },
    router: router,
  });
});