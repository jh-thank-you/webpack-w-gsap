<template>

  <div class="center-name-and-tag">
  <transition name="fade-title">
    <div id="name-and-tag" v-if="!showSmallNav">
      <!-- <p class="tagline">bad name.&thinsp; &thinsp;good work.</p> -->
      <!-- <p class="tagline">&thinsp;good work.</p> -->

    </div>
     </transition>
  </div>


</template>


<script>

import { mapState } from 'vuex';

export default {
  data() {
    return {


    };
  }, // END data
  computed: mapState(['showSmallNav']), // END computed
  created() {


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
