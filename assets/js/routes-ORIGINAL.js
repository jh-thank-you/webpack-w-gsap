import VueRouter from 'vue-router';

let routes = [
  {
    path: '/',
    component: require('../sections/home.vue'),

  },
  {
    path: '/print',
    component: require('../sections/print.vue'),

  },
  {

    path: '/video',
    component: require('../sections/video.vue'),

  },
  {

    path: '/outdoor',
    component: require('../sections/outdoor.vue'),

  },
  {

    path: '/online',
    component: require('../sections/online.vue'),

  },

];

export default new VueRouter({

  routes,

});