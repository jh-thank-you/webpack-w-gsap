<template>

  <div class="overlay"> <!-- START Modal -->

    <div id="button-close-vector" @click="$emit('close'), hideTab()">
      <div aria-hidden='true'>&times;</div>
    </div>

    <div class="btn-group-wrap">
      <div class="btn-group">
        <div
             v-for="(slide, index) in slides"
             :key="slide.id"
             type="button" @click="currentIndex = index"
             :class="['btn', { 'btn-primary': index === currentIndex, 'btn-default': index !== currentIndex }]"
             >
        </div>
      </div>

      <transition name="fade">
        <div v-if="slideLeft"  @input="gotToPrev()" @click="gotToPrev()" class="btn-previous-wrap">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 100" style="enable-background:new 0 0 50 100;" xml:space="preserve" preserveAspectRatio="none" class="btn-previous-wrap">
          <g>
            <polygon class="prev-next-btn" points="0.5,1.2 49.3,50 0.5,98.8   "/>
            <path  class="prev-next-btn" d="M1,2.4L48.6,50L1,97.6V2.4 M0,0v100l50-50L0,0L0,0z"/>
          </g>
          </svg>
         </div>
      </transition>

      <transition name="fade">
        <div v-if="slideRight"  @input="gotToNext()" @click="gotToNext()" class="btn-next-wrap">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 100" style="enable-background:new 0 0 50 100;" xml:space="preserve" preserveAspectRatio="none" class="btn-next-wrap">
          <g>
            <polygon class="prev-next-btn" points="0.5,1.2 49.3,50 0.5,98.8   "/>
            <path  class="prev-next-btn" d="M1,2.4L48.6,50L1,97.6V2.4 M0,0v100l50-50L0,0L0,0z"/>
          </g>
          </svg>
        </div>
      </transition>

    </div>

    <transition
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:leave="leave"
      v-bind:css="false"
     >
      <modal-slide :slide="slides[currentIndex]" :key="currentIndex" class="current-slide swipe-me">
      </modal-slide>

    </transition>
    <!-- END New Slideshow -->

  </div> <!-- END Modal -->

</template>

<script>

import { eventBus } from 'assets/main.js';

import modalSlide from 'components/modal-slide.vue';

export default {

  components: { modalSlide }, // END components
  props:      [ 'imageSrc' ],// END props
  data() {
    return {
      slides: [

        {
          'navID':     '',
          'client':    '',
          'alt':       '',
          'showImage': '',
          'src':       '',
          'showVideo': '',
          'videoSrc':  '',
          'showText':  '',
          'pText':     '',
        },

      ],
      currentIndex: 0,
      imagesource:  'default',
    };
  }, // END data
  computed: {

    slideLeft() {
      if ( this.currentIndex === 0 ) {
        return false;
      } else {
        return true;
      }

    },

    slideRight() {
      if ( this.currentIndex === this.slides.length - 1 ) {
        return false;
      } else {
        return true;
      }
    },
  }, // END computed
  beforeCreated() {


  }, // END beforeCreated
  created() {


  }, // END created
  mounted() {
    /* *****************************************************************

        Global Key Press Listener - For Previous and Next Buttons
        Since these buttons are not part of a form with an Input Field
        they do not have focus.
        Using Vue's @keyup or @keyup.native did not work. Vue forums 
        and Laracst talk about a global listener to solve this 

    ***************************************************************** */

    // name the event listener so you can destroy/remove it later.
    const self = this;
    var arrowHandler = function (event) {
      // If left or right arrow was pressed.
      if (event.keyCode == 37) {
        console.log('left-arrow-pressed');
        // gotToPrevSlide;
        self.gotToPrev();
      } else if (event.keyCode == 39) {
        console.log('right-arrow-pressed');
        // gotToNextSlide;
        self.gotToNext();
      } else {
        return;
      }
    }; // END arrowHandler

    window.addEventListener('keyup', arrowHandler);

    eventBus.$on('noActiveClient', () => {
      this.imagesource = 'modal-default-selection';

      if (this.$root.debug) { console.log( this.imagesource + ' = noActiveClient - No active client work section now closing'); }
    }); // END eventBus


    if (this.$root.debug) { console.log( this.imageSrc + ' = this.imageSrc modal-slideshow created'); }

    // No need for Axios
    // Added benefit - Webpack is able to traverse the dynamic require links. Also Webpack now hashes the links and their resource. 
    const currentSlides = require(`assets/modals/${this.imageSrc}.js`);
    this.slides = currentSlides.sendSlideData();


  }, // END created
  methods: {

    hideTab() {
      // if (this.$root.debug) { console.log( 'hideTab - closing client login'); }
      var tabHidden = false;
      eventBus.$emit('tabVisibility', tabHidden);


      if (this.imagesource === 'modal-default-selection' ) {
        // Go to Main Home page

        // if (this.$root.debug) { console.log( 'closing client login'); }
        eventBus.$emit('bringBackCornerNav');

        if (this.$root.debug) { console.log('noActiveClient - Bye Nonactive Client. Have a nice day'); }

        this.$router.push('/');

      } else {

        return;

      } // END IF ELSE

    }, // END hideTab


    /* ***************************************************************** */
    /* ********************** START NEW SLIDE LOGIC ******************** */
    /* ***************************************************************** */

    gotToPrev() {
      if ( this.currentIndex === 0 ) {
        return;
      } else {
        this.currentIndex--;
        console.log(this.currentIndex + ' = currentIndex - got To Prev Slide');
        // this.currentSelect = 'slide-' + `${this.currentIndex}`;
      }
    }, // END gotToPrev

    gotToNext() {
      if ( this.currentIndex === this.slides.length - 1 ) {
        return;
      } else {
        this.currentIndex++;
        console.log(this.currentIndex + ' = currentIndex - got To Next Slide');
      }
    }, // END gotToNext

    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: done,
      });

      tl.set(el, {
        x:               window.innerWidth * 1.5,
        scale:           0.7,
        transformOrigin: '50% 50%',
      });

      tl.to(el, 0.5, {
        x:    0,
        ease: Power4.easeOut,
      });

      tl.to(el, 1, {
        scale: 1,
        ease:  Power4.easeOut,
      });
    },
    afterEnter() {
      /* Nothing to do */
    },
    leave(el, done) {
      TweenLite.fromTo(el, 1, {
        autoAlpha: 1,
      }, {
        autoAlpha:  0,
        ease:       Power4.easeOut,
        onComplete: done,
      });
    },

  }, // END methods
  beforeDestroy() {

    // remove the event listener
    window.removeEventListener('keyup', this.arrowHandler);

  }, // END beforeDestroy

}; // END export default

</script>


<style scoped>


/* Could Use GSAP here as well */
/* Vue JS - Transition Classes */
/* fade in or out - Previous and Next Buttons */

.fade-enter
{
    opacity: 0;
}

.fade-enter-active
{
    transition: opacity 4s ease;
}

.fade-enter-to
{
    /* Vue JS Default is opacity: 1; */
}

.fade-leave
{
    /* Vue JS Default is opacity: 1; */
}

.fade-leave-active
{
    transition: opacity 4s ease;
}

.fade-leave-to
{
    opacity: 0;
}


</style>
