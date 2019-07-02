<template>

  <div class="center-name-and-tag">
  <transition name="fade-title">
    <div id="name-and-tag" v-if="titleVisibilty">
      <!-- <p class="tagline">bad name.&thinsp; &thinsp;good work.</p> -->
      <!-- <p class="tagline">&thinsp;good work.</p> -->

    </div>
     </transition>
  </div>


</template>


<script>

import { eventBus } from 'assets/main.js';

export default {
  data() {
    return {

      titleVisibilty: true,

    };
  }, // END data

  created() {

    const self = this;


    function widthChangeTitle(mq) {

      if (mq.matches) {


        if (self.$root.debug) { console.log(self.showSmallNav + ' = showSmallNav value'); }

        // eventBus.$emit('sectionIsClosed');
        self.titleVisibilty = true;

      } else {


        if (self.$root.debug) { console.log(self.showSmallNav + ' = showSmallNav value'); }

        // eventBus.$emit('sectionIsOpen');
        self.titleVisibilty = false;

      }
    } // END widthChange
    var mq = window.matchMedia('(min-width: 501px) and (min-height: 601px)');
    widthChangeTitle(mq);
    mq.addListener(widthChangeTitle);


    eventBus.$on('sectionIsOpen', () => {

      self.titleVisibilty = false;

    }); // END eventBus


    eventBus.$on('sectionIsClosed', () => {

      self.titleVisibilty = true;

    }); // END eventBus


  }, // END created

}; // END export default

</script>


<style scoped>

/* fade and scale in or out small nav */

.fade-title-enter {
  /* opacity: 0; */
  /* transform: scale(0.5,0.5); */
}

.fade-title-enter-active {
  /* transition: all 1s ease; */
  animation: title-in 1s ease-out forwards;
}

.fade-title-enter-to {
  /* transform: scale(1,1); */
}

.fade-title-leave {
  /* transform: scale(1,1); */
}

.fade-title-leave-active {
  /* transition: all 1s ease; */
  animation: title-out 1s ease-out forwards;
}

.fade-title-leave-to {
  /* opacity: 0; */
  /* transform: scale(0.5,0.5); */
}

@keyframes title-in {
    0% {
        opacity: 0;
    }
    33% {
        opacity: 0;
    }
    66% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes title-out {
    0% {
        opacity: 1;
    }
    33% {
        opacity: 0;
    }
    66% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}


</style>
