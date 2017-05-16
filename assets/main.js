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
import App from './App.vue';
import VueRouter from 'vue-router';
import router from 'js/routes.js';
import navCornerMenu from 'components/nav-corner-menu.vue';
Vue.component('navcornermenu', require('components/nav-corner-menu.vue'));

export const eventBus = new Vue({
  methods: {
    changeImage(imagesource) {
      this.$emit('imageSelectChanged', imagesource);
    },
  },
});

// Setup some global objects/items that will persist across all new windows objects.
// By doing this when you need to use the objects/items anywhere else in the Vue
// project you will not need to make the import statement again. For Example:

window.Vue = Vue;
Vue.use(VueRouter);
window.jquery = jquery;
window.axios = axios;
window.TweenMax = TweenMax;
window.ScrollToPlugin = ScrollToPlugin;
window.App = App;
window.styles = styles;

window.addEventListener('load', function () {
  new Vue({
    el: '#app',
    components: { navCornerMenu },
    router: router,
    // render: h => h('router-view'),
    // render: h => h(App),
  });
});