<template>


  <div>

    <transition name="fade-sm-nav">
      <nav-small-screen-menu v-if="showSmallNav"></nav-small-screen-menu>
    </transition>

    <nav class="corner-nav">
      <nav-button v-for="navigationButton in navigationButtons" :key="navigationButton.id" :id="navigationButton.id" :section="navigationButton.section"></nav-button>
    </nav>

  </div>

</template>


<script>

import { eventBus } from 'assets/main.js';

import navButton from 'components/nav-button.vue';

import navSmallScreenMenu from 'components/nav-small-screen-menu.vue';

export default {

  components: {

    navButton,
    navSmallScreenMenu,

  }, // END components
  data() {
    return {

      navigationButtons: [

        {id: 'nav-print', section: 'PRINT' },
        {id: 'nav-video', section: 'VIDEO' },
        {id: 'nav-outdoor', section: 'OUTDOOR' },
        {id: 'nav-online', section: 'ONLINE' },

      ], // END navButtons

      id:           '',
      section:      '',
      showSmallNav: false,

    }; // END return
  }, // END data
  created() {

    /* 
        The keyword "this" in javascript works differently;
        where you would normally target the data property with 
        this.myProp you need to target with self.myProp and set 
        the const self = this; outside of the callback.
        see: https://forum.vuejs.org/t/cannot-set-property/12272/3
    */
    const self = this;

    // media query event handler
    if (matchMedia) {
      var mq = window.matchMedia('(min-width: 501px) and (min-height: 601px)');
      // mq.addListener(widthChange);
      widthChange(mq);
    }

    // media query change
    function widthChange(mq) {

      if (mq.matches) {

        // window width is at least 500px
        self.showSmallNav = false;

        if (self.$root.debug) { console.log(self.showSmallNav + ' = showSmallNav value'); }

        self.emitSmallNavVisibilty();

        return self.showSmallNav;

        // GSAP timeline show corner nav buttons

      } else {
        // window width is less than 500px
        self.showSmallNav = true;

        if (self.$root.debug) { console.log(self.showSmallNav + ' = showSmallNav value'); }

        self.emitSmallNavVisibilty();

        return self.showSmallNav;

        // GSAP timeline hide corner nav buttons

      }
    }
    mq.addListener(widthChange);

  }, // END created
  methods: {

    emitSmallNavVisibilty() {

      let currentShowSmallNav = this.showSmallNav;

      if (this.$root.debug) { console.log(currentShowSmallNav + ' = small nav visibility'); }
      eventBus.$emit('smallNavVisibilty', currentShowSmallNav);

    }, // END emitSmallNavVisibilty


  }, // END methods

}; // END export default

</script>


<style scoped>

/* fade and scale in or out small nav */

.fade-sm-nav-enter {
  opacity: 0;
  /* transform: scale(0.5,0.5); */
}

.fade-sm-nav-enter-active {
  transition: all .35s ease;
  animation: send-in .35s ease-out forwards;
}

.fade-sm-nav-enter-to {
  /* transform: scale(1,1); */
}

.fade-sm-nav-leave {
  /* transform: scale(1,1); */
}

.fade-sm-nav-leave-active {
  transition: all .35s ease;
  animation: send-out .35s ease-out forwards;
}

.fade-sm-nav-leave-to {
  opacity: 0;
  /* transform: scale(0.5,0.5); */
}

@keyframes send-in {
    0% {
        transform: scale(1.1);
    }
    33% {
        transform: scale(1);
    }
    66% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes send-out {
    0% {
        transform: scale(1);
    }
    33% {
        transform: scale(1.1);
    }
    66% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.1);
    }
}


</style>
