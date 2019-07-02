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

        {id: 'nav-work', section: 'work' },
        {id: 'nav-personal', section: 'personal' },
        {id: 'nav-bio', section: 'bio' },
        {id: 'nav-contact', section: 'contact' },


      ], // END navButtons

      id:           '',
      section:      '',
      sectionOpen:  false,
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

    eventBus.$on('sectionIsClosed', () => {
      // Brink back corner nav

      self.sectionOpen = false;
      this.cornerNavAnimation();

    }); // END eventBus

    eventBus.$on('sectionIsOpen', () => {
      // Brink back corner nav

      self.sectionOpen = true;
      this.cornerNavAnimation();

    }); // END eventBus


    // media query change
    function widthChange(mq) {
      if (mq.matches) {

        // window width is at least 500px
        self.showSmallNav = false;

        if (self.$root.debug) { console.log(self.showSmallNav + ' = showSmallNav value'); }

        // this tells name-title-tag component to show the logo
        eventBus.$emit('sectionIsClosed');
        self.cornerNavAnimation();

      } else {
        // window width is less than 500px
        self.showSmallNav = true;

        if (self.$root.debug) { console.log(self.showSmallNav + ' = showSmallNav value'); }

        // this tells name-title-tag component to hide the logo
        eventBus.$emit('sectionIsOpen');
        self.cornerNavAnimation();

      }
    }
    var mq = window.matchMedia('(min-width: 501px) and (min-height: 601px)');
    widthChange(mq);
    mq.addListener(widthChange);

  }, // END created
  methods: {


    cornerNavAnimation() {

      if (this.$root.debug) { console.log(this.sectionOpen + ' = sectionOpen - cornerNavAnimation'); }

      if (this.sectionOpen == true || this.showSmallNav == true) {
        // Move corner Nav buttons out of window frame
        if (this.$root.debug) { console.log('cornerNavAnimation - moving nav OUT of window'); }


        TweenLite.to('#nav-work', 0.3, {
          top:   '-66vh',
          left:  0,
          delay: 0,
          ease:  Power1.easeIn,
        });

        TweenLite.to('#nav-bio', 0.3, {
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

        TweenLite.to('#nav-bio', 0.3, {
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
