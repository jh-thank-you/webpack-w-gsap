import VueRouter from 'vue-router';

let routes = [
  {
    path:      '/',
    props:     { id: 'section-home' },
    component: require('../sections/home.vue').default,

  },
  {
    path:      '/work',
    props:     { id: 'section-work' },
    component: require('../sections/section.vue').default,

  },
  {

    path:      '/about',
    props:     { id: 'section-about' },
    component: require('../sections/about.vue').default,

  },
  {

    path:      '/clients',
    props:     { id: 'section-clients' },
    component: require('../sections/clients.vue').default,

  },
  {

    path:      '/settings',
    props:     { id: 'section-settings' },
    component: require('../sections/settings.vue').default,

  },

];

export default new VueRouter({

  routes,

});
