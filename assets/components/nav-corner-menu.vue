<template>


  <div>

    <transition name="fade-sm-nav">
      <nav-small-screen-menu v-if="showSmallNav"></nav-small-screen-menu>
    </transition>

    <nav class="corner-nav" @click="cornerNavAnimation()">
      <nav-button v-for="navigationButton in navigationButtons" :key="navigationButton.id" :id="navigationButton.id" :section="navigationButton.section"></nav-button>
    </nav>

  </div>

</template>


<script>

// import { eventBus } from 'assets/main.js';

import { mapState } from 'vuex';

import { mapActions} from 'vuex';

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

        {id: 'nav-work', section: 'work' },
        {id: 'nav-personal', section: 'personal' },
        {id: 'nav-about', section: 'about' },
        {id: 'nav-contact', section: 'contact' },


      ], // END navButtons

      id:      '',
      section: '',
      /* 
          sectionOpen and showSmallNav 
          props handles by Vuex State now 
      */

    }; // END return
  }, // END data
  computed: mapState([
    'showSmallNav',
    'getSectionStatus',
    'getSmallNavStatus',

  ]), // END computed
  created() {

    /* 
        The keyword "this" in javascript works differently;
        where you would normally target the data property with 
        this.myProp you need to target with self.myProp and set 
        the const self = this; outside of the callback.
        see: https://forum.vuejs.org/t/cannot-set-property/12272/3
    */
    const self = this;

    // media query change
    function widthChange(mq) {
      if (mq.matches) {

        // window height and width are big enough for 
        // the coner nav - hide small nav screen

        self.$store.dispatch('smallNavClose');

        if (self.$root.debug) { console.log(self.showSmallNav + ' = showSmallNav value'); }

        // move corner nav back in
        self.cornerNavAnimation();

      } else {
        // window height and width are too small for 
        // the coner nav - show small nav screen

        self.$store.dispatch('smallNavOpen');

        // move corner nav out
        self.cornerNavAnimation();

      }
    }
    var mq = window.matchMedia('(min-width: 501px) and (min-height: 601px)');
    widthChange(mq);
    mq.addListener(widthChange);

  }, // END created
  mounted() {

    const self = this;

    this.$store.watch(
      state => state.sectionOpen,
      () => {

        if (this.$root.debug) { console.log('cornerNavAnimation - moving nav'); }

        self.cornerNavAnimation();

      }
    ); // END watch

    this.$store.watch(
      state => state.showSmallNav,
      () => {

        // self.currentSmallNavStatus = true;

      }
    ); // END watch

  }, // END mounted
  methods: {

    ...mapActions(['setSmallNavStatus']),


    cornerNavAnimation() {

      if (this.$root.debug) { console.log(this.sectionOpen + ' = sectionOpen - cornerNavAnimation'); }

      if (this.$store.state.sectionOpen == true || this.$store.state.showSmallNav == true) {
        // Move corner Nav buttons out of window frame
        if (this.$root.debug) { console.log('cornerNavAnimation - moving nav OUT of window'); }


        TweenLite.to('#nav-work', 0.3, {
          top:   '-66vh',
          left:  0,
          delay: 0,
          ease:  Power1.easeIn,
        });

        TweenLite.to('#nav-about', 0.3, {
          top:   '-66vh',
          right: 0,
          delay: 0.4,
          ease:  Power1.easeIn,
        });

        TweenLite.to('#nav-personal', 0.3, {
          bottom: '-66vh',
          left:   0,
          delay:  0.6,
          ease:   Power1.easeIn,
        });

        TweenLite.to('#nav-contact', 0.3, {
          bottom: '-66vh',
          right:  0,
          delay:  0.2,
          ease:   Power1.easeIn,
        });

      } else {
        // Move corner Nav buttons back into window frame
        if (this.$root.debug) { console.log('cornerNavAnimation - moving nav INTO window'); }

        TweenLite.to('#nav-work', 0.3, {
          top:   0,
          left:  0,
          delay: 0,
          ease:  Power1.easeOut,
        });

        TweenLite.to('#nav-about', 0.3, {
          top:   0,
          right: 0,
          delay: 0.4,
          ease:  Power1.easeOut,
        });

        TweenLite.to('#nav-personal', 0.3, {
          bottom: 0,
          left:   0,
          delay:  0.6,
          ease:   Power1.easeOut,
        });

        TweenLite.to('#nav-contact', 0.3, {
          bottom: 0,
          right:  0,
          delay:  0.2,
          ease:   Power1.easeOut,
        });


      } // END IF-Else

    }, // END moveCornerNav

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
