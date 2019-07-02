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

    path:      '/bio',
    props:     { id: 'section-bio' },
    component: require('../sections/section-bio.vue').default,

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


];

export default new VueRouter({

  routes,

});
