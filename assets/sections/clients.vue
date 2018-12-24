<template>

  <div id="section-clients" class="section-wrap">

      <client-password></client-password>

      <!-- <button-close-section-raster @click.native="updateCornerNav()"></button-close-section-raster> -->


    <transition name="fade-slideshow">
    <modal-slideshow v-if="showModal" @close="showModal = false" :imageSrc="imagesource"></modal-slideshow>
    </transition>

  </div>

</template>


<script>

import { eventBus } from 'assets/main.js';
import clientPassword from 'components/client-password.vue';
// import showPasswordModal from 'components/client-password.vue';

import buttonCloseSectionRaster from 'components/button-close-section-raster.vue';
import heroImage from 'components/hero-image.vue';
import modalSlideshow from 'components/modal-slideshow.vue';
import modalButton from 'components/modal-button.vue';

let currentExamples = null;

export default {

  components: {

    clientPassword,
    buttonCloseSectionRaster,
    heroImage,
    modalSlideshow,
    modalButton,
    // showPasswordModal,

  }, // END components
  // passing in ID data from nav-button to hero-image through vue-router 
  // needs to be passed here in the parent level vs at the hero-image child level
  props: [ 'id' ],// END props
  data() {
    return {

      showModal:           false,
      exampleid:           '',
      client:              '',
      sector:              '',
      alt:                 '',
      imagesource:         '',
      access:              '',
      selected:            [],
      examples:            currentExamples,
      sectionActive:       false,
      sectionStyles:       '',
      currentSprite:       '',
      heroActive:          false,
      heroVisibilityClass: 'sprite-wrap outer-sprite-container',
    };
  }, // END data
  created() {

    if (this.$root.debug) { console.log('im created'); }

    eventBus.$on('modalVisibility', (showModal) => {
      this.showModal = showModal;
    }); // END eventBus

    // default selected - this loads before local storage data is created
    this.selected='beauty,branding,fashion,financial,fitness,healthcare,pharma,publicservice,sports,technology,tourism,transportation';

    eventBus.$on('selectedChanged', (selected) => {
      this.selected = selected;

      if (this.$root.debug) { console.log(selected + ' = checkbox selected value passed to section.vue'); }
    }); // END eventBus


  }, // END created
  mounted() {

    if (this.$root.debug) { console.log(this.heroActive + ' = this.heroActive value before call'); }


    if (this.$root.debug) { console.log(this.heroActive + ' = this.heroActive value after call'); }

    window.addEventListener('resize', this.resize);

    this.sectionActive = true;

    this.showPasswordModal = true;

  }, // END mounted
  methods: {

    updateCornerNav() {
      // tell corner nav to move back into window frame
      eventBus.$emit('bringBackCornerNav');

      if (this.$root.debug) { console.log('bringBackCornerNav'); }

    }, // END updateCornernav


  }, // END methods
  beforeDestroy() {

    eventBus.$off('modalVisibility');

    eventBus.$off('selectedChanged');

    window.removeEventListener('resize', this.resize);

  }, // END destroyed

}; // END export default

</script>


<style scoped>

/* legal notice in boxframe */

.legal-block {
  width: 100%;
  height: auto;
  cursor: default;
  margin: 0 auto;
}

.legal-copy {
  font-size: .75em !important;
  font-weight: normal;
  font-variant: normal;
  font-stretch: normal;
  line-height: 1.25;
  max-width: 100vw;
  height: 100%;
  margin: 0 auto;
  padding: 0 0 0 0;
  text-align: center;
  color: black;
}

  /* hero animation sprite */

  .outer-sprite-container {
    display: flex;
  }

  #current-sprite-image {
    position: absolute;
    display: block;
    flex-grow: 1;
    top: 50%;
    left:50%;
    width: 65vw;
    height: 65vh;
    max-width: 65vw;
    max-height: 65vh;
    transform: translate(-50%, -50%);
  }

  #the-canvas {
    position: relative;
    display: block;
    top: 50%;
    left: 50%;
    max-width: 65vw;
    max-height: 65vh;
    transform: translate(-50%, -50%);
  }

  /* slideme in or out - modal-button */

  .slideme-enter {
    opacity: 0;
    width: 0;
    /* height: 0; */
  }

  .slideme-enter-active {
    transition: all .35s ease-in;
  }


  @media all and (min-width: 801px) {
    .slideme-enter-to {
      /* Vue JS Default is opacity: 1; */
      width: 32%;
      /* height: 100%; */
    }
  }

  @media all and (min-width: 501px) and (max-width: 800px) {
    .slideme-enter-to {
      /* Vue JS Default is opacity: 1; */
      width: 49%;
      /* height: 100%; */
    }
  }

  @media all and (max-width: 500px) {
    .slideme-enter-to {
      /* Vue JS Default is opacity: 1; */
      width: 100%;
      /* height: 100%; */
    }
  }


  @media all and (min-width: 801px) {
    .slideme-leave {
      /* Vue JS Default is opacity: 1; */
      width: 32%;
      /* height: 100%; */
    }
  }

  @media all and (min-width: 501px) and (max-width: 800px) {
    .slideme-leave {
      /* Vue JS Default is opacity: 1; */
      width: 49%;
      /* height: 100%; */
    }
  }

  @media all and (max-width: 500px) {
    .slideme-leave {
      /* Vue JS Default is opacity: 1; */
      width: 100%;
      /* height: 100%; */
    }
  }

  .slideme-leave-active {
    transition: all .35s ease-out;
    /* position: absolute; */
    /* would normally result in a smoother
    animation but div size is based on a
    percentage when position is absolute
    it scales too large */
  }

  .slideme-leave-to {
    opacity: 0;
    width: 0;
    /* height: 0; */
  }

  .slideme-move {
    transition: transform .35s;
  }


/* fade and scale in or out small nav */

.slide-up-enter {
  opacity: 1;
  /* transform: scale(0.5,0.5); */
}

.slide-up-enter-active {
  transition: all 1.4s ease;
  animation: slidein 1.4s ease-out forwards;
}

.slide-up-enter-to {
  /* transform: scale(1,1); */
}

.slide-up-leave {
  /* transform: scale(1,1); */
}

.slide-up-leave-active {
  transition: all .35s ease;
  animation: slideout 1.4s ease-out forwards;
}

.slide-up-leave-to {
  opacity: 1;
  /* transform: scale(0.5,0.5); */
}

@keyframes slidein {
    0% {
        height: 0;
    }
    50% {
        height: 0;
    }
    100% {
        height: 100%;
    }
}

/* slideout never reached since v-if is only triggered once on mount */

@keyframes slideout {
    0% {
        height: 100%;
    }
    33% {
        height: 100%;
    }
    66% {
        height: 100%;
    }
    100% {
        height: 100%;
    }
}

.fade-me {
  /* Important Set the value you want to end up with here.  After the animation completes the keyframe goes back to the initial value */
  opacity: 0;
  animation: fade-it .35s ease-out;
}

@keyframes fade-it {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
}

</style>
