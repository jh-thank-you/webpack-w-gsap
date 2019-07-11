<template>

  <div class="overlay"> <!-- START Modal -->

      <!-- IE Specific to remove tap highlight -->
      <meta name="msapplication-tap-highlight" content="no">

      <div id="button-close-vector" @click="$emit('close')">
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
          <div v-if="slideLeft"  @input="goToPrev()" @click="goToPrev()" class="btn-previous-wrap">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 100" style="enable-background:new 0 0 50 100;" xml:space="preserve" preserveAspectRatio="none" class="btn-previous-wrap">
            <g>
              <polygon class="prev-next-btn" points="0.5,1.2 49.3,50 0.5,98.8   "/>
              <path  class="prev-next-btn" d="M1,2.4L48.6,50L1,97.6V2.4 M0,0v100l50-50L0,0L0,0z"/>
            </g>
            </svg>
           </div>
        </transition>

        <transition name="fade">
          <div v-if="slideRight"  @input="goToNext()" @click="goToNext()" class="btn-next-wrap">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 100" style="enable-background:new 0 0 50 100;" xml:space="preserve" preserveAspectRatio="none" class="btn-next-wrap">
            <g>
              <polygon class="prev-next-btn" points="0.5,1.2 49.3,50 0.5,98.8   "/>
              <path  class="prev-next-btn" d="M1,2.4L48.6,50L1,97.6V2.4 M0,0v100l50-50L0,0L0,0z"/>
            </g>
            </svg>
          </div>
        </transition>

      </div>

      <div class="swipe-element">
        <div class="swipe-front">
          <transition
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-on:leave="leave"
            v-bind:css="false"
           >
              <modal-slide :slide="slides[currentIndex]" :key="currentIndex" class="current-slide">
              </modal-slide>

          </transition>
        </div>
      </div>
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
      currentIndex:            0,
      imagesource:             'default',
      swipeRevealItems:        [],
      swipeRevealItemElements: [],
      startCheckFirstRun:      true,
      swipeFrontElement:       [],
      swipeFronts:             [],
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
        // goToPrevSlide;
        self.goToPrev();
      } else if (event.keyCode == 39) {
        console.log('right-arrow-pressed');
        // goToNextSlide;
        self.goToNext();
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


    /* *******************************************************
                        Swipe Gesture
    ******************************************************* */

    // Shim for requestAnimationFrame from Paul Irishpaul ir
    // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    window.requestAnimFrame = (function(){
      'use strict';

      return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function( callback ){
                  window.setTimeout(callback, 1000 / 60);
                };
    })();

    /* // [START pointereventsupport] */
    // eslint-disable-next-line
    var pointerDownName = 'pointerdown';
    // eslint-disable-next-line
    var pointerUpName = 'pointerup';
    // eslint-disable-next-line
    var pointerMoveName = 'pointermove';

    if (window.navigator.msPointerEnabled) {
      pointerDownName = 'MSPointerDown';
      pointerUpName = 'MSPointerUp';
      pointerMoveName = 'MSPointerMove';
    }

    // Simple way to check if some form of pointerevents is enabled or not
    window.PointerEventsSupport = false;
    if (window.PointerEvent || window.navigator.msPointerEnabled) {
      window.PointerEventsSupport = true;
    }
    /* // [END pointereventsupport] */


    function SwipeRevealItem(element) {
      'use strict';

      // Gloabl state variables
      var swipeFrontElementLocal = element.querySelector('.swipe-front');
      this.swipeFrontElement = swipeFrontElementLocal;
      var swipeFrontElement = this.swipeFrontElement;
      var rafPending = false;
      var initialTouchPos = null;
      var lastTouchPos = null;
      var currentXPosition = 0;


      // Perform client width here as this can be expensive and doens't
      // change until window.onresize
      var itemWidth = swipeFrontElement.clientWidth;
      var slopValue = itemWidth * (1/4);

      // On resize, change the slop value
      this.resize = function() {
        itemWidth = swipeFrontElement.clientWidth;
        slopValue = itemWidth * (1/4);
      };

      /* // [START handle-start-gesture] */
      // Handle the start of gestures
      this.handleGestureStart = function(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        if (evt.touches && evt.touches.length > 1) {
          return;
        }

        // Add the move and end listeners
        if (window.PointerEvent) {
          evt.target.setPointerCapture(evt.pointerId);
        } else {
          // Add Mouse Listeners
          document.addEventListener('mousemove', this.handleGestureMove, true);
          document.addEventListener('mouseup', this.handleGestureEnd, true);
        }

        initialTouchPos = getGesturePointFromEvent(evt);

        // swipeFrontElement.style.transition = 'initial';
      }.bind(this);
      /* // [END handle-start-gesture] */

      // Handle move gestures
      //
      /* // [START handle-move] */
      this.handleGestureMove = function(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        if (!initialTouchPos) {
          return;
        }

        lastTouchPos = getGesturePointFromEvent(evt);

        if (rafPending) {
          return;
        }

        rafPending = true;

        window.requestAnimFrame(onAnimFrame);
      }.bind(this);
      /* // [END handle-move] */

      /* // [START handle-end-gesture] */
      // Handle end gestures
      this.handleGestureEnd = function(evt) {

        if (self.$root.debug) { console.log( evt.pointerId + ' = evt.pointerId value at start of handleGestureEnd function'); }

        evt.preventDefault();
        evt.stopPropagation();

        if (evt.touches && evt.touches.length > 0) {
          return;
        }

        rafPending = false;

        // Remove Event Listeners
        if (window.PointerEvent) {

          if (self.$root.debug) { console.log( evt.pointerId + ' = evt.pointerId value'); }

          if (self.$root.debug) { console.log( evt + ' = evt value'); }

          evt.target.releasePointerCapture(evt.pointerId);
        } else {
          // Remove Mouse Listeners
          document.removeEventListener('mousemove', this.handleGestureMove, true);
          document.removeEventListener('mouseup', this.handleGestureEnd, true);
        }

        updateSwipeRestPosition();

        initialTouchPos = null;
      }.bind(this);
      /* // [END handle-end-gesture] */

      function updateSwipeRestPosition() {

        if (initialTouchPos === null) {
          initialTouchPos = 0;
        }

        if (lastTouchPos === null) {
          lastTouchPos = 0;
        }

        var differenceInX = initialTouchPos.x - lastTouchPos.x;
        if (differenceInX === null) {
          differenceInX = 0;
        }

        currentXPosition = currentXPosition - differenceInX;
        if (currentXPosition === null) {
          currentXPosition = 0;
        }

        // Check if we need to change state to left or right based on slop value
        if (Math.abs(differenceInX) > slopValue) {
          if (differenceInX > 0) {
            self.goToNext();
          } else {
            self.goToPrev();
          } // END else
        } // END IF

      } // END updateSwipeRestPosition


      function getGesturePointFromEvent(evt) {
        var point = {};

        if (evt.targetTouches) {
          point.x = evt.targetTouches[0].clientX;
          point.y = evt.targetTouches[0].clientY;
        } else {
          // Either Mouse event or Pointer Event
          point.x = evt.clientX;
          point.y = evt.clientY;
        }

        return point;
      } // END getGesturePointFromEvent

      function onAnimFrame() {
        if (!rafPending) {
          return;
        }

        rafPending = false;
      } // END onAnimFrame

      /* // [START addlisteners] */
      // Check if pointer events are supported.
      if (window.PointerEvent) {
        // Add Pointer Event Listener
        swipeFrontElement.addEventListener('pointerdown', this.handleGestureStart, true);
        swipeFrontElement.addEventListener('pointermove', this.handleGestureMove, true);
        swipeFrontElement.addEventListener('pointerup', this.handleGestureEnd, true);
        swipeFrontElement.addEventListener('pointercancel', this.handleGestureEnd, true);
      } else {
        // Add Touch Listener
        swipeFrontElement.addEventListener('touchstart', this.handleGestureStart, true);
        swipeFrontElement.addEventListener('touchmove', this.handleGestureMove, true);
        swipeFrontElement.addEventListener('touchend', this.handleGestureEnd, true);
        swipeFrontElement.addEventListener('touchcancel', this.handleGestureEnd, true);

        // Add Mouse Listener
        swipeFrontElement.addEventListener('mousedown', this.handleGestureStart, true);
      }
      /* // [END addlisteners] */
    } // END SwipeRevealItem

    // var swipeRevealItems = [];

    if (this.$root.debug) { console.log( this.swipeRevealItems.length + ' = swipeRevealItems'); }

    function bindGestureNow() {
      'use strict';

      if (self.$root.debug) { console.log( ' bindGestureNow has been called'); }

      var swipeRevealItemElementsLocal = document.querySelectorAll('.swipe-element');
      self.swipeRevealItemElements = swipeRevealItemElementsLocal;

      if (self.$root.debug) { console.log( self.swipeFronts.length + ' = swipeFronts.length - current value'); }


      for (var i = 0; i < self.swipeRevealItemElements.length; i++) {
        self.swipeRevealItems.push(new SwipeRevealItem(self.swipeRevealItemElements[i]));
      }

      // We do this so :active pseudo classes are applied.
      window.onload = function(){
        if (/iP(hone|ad)/.test(window.navigator.userAgent)) {
          document.body.addEventListener('touchstart', function() {}, false);
        }
      }; //END mobileBindGestue
    } // END bindGestureNow


    window.onresize = function () {
      'use strict';
      for (var i = 0; i < self.swipeRevealItems.length; i++) {
        self.swipeRevealItems[i].resize();
      }
    };

    var registerInteraction = function () {
      'use strict';
      return;
    };


    // START Pageload check and bind gesture
    let stateCheck = setInterval(() => {
      if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        // document ready
        if (this.$root.debug) { console.log('page is loaded - call bindGestureNow'); }

        // emit the call to bindGesture function
        bindGestureNow();
      }
    }, 300); // END Pageload check and bind gesture


    this.swipeFronts = document.querySelectorAll('.swipe-front');

    for (var i = 0; i < this.swipeFronts.length; i++) {
      this.swipeFronts[i].addEventListener('touchstart', registerInteraction);
    }

  }, // END mounted
  updated() {

    // eventBus.$emit('removeGestureNow');

  }, // END updated
  methods: {


    /* ***************************************************************** */
    /* ********************** START NEW SLIDE LOGIC ******************** */
    /* ***************************************************************** */

    goToPrev() {
      event.preventDefault();
      event.stopPropagation();
      if ( this.currentIndex === 0 ) {
        return;
      } else {
        this.currentIndex--;
        console.log(this.currentIndex + ' = currentIndex - Go To Prev Slide');
      }
    }, // END goToPrev

    goToNext() {
      event.preventDefault();
      event.stopPropagation();
      if ( this.currentIndex === this.slides.length - 1 ) {
        return;
      } else {
        this.currentIndex++;
        console.log(this.currentIndex + ' = currentIndex - Go To Next Slide');
      }
    }, // END goToNext

    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: function(){
          done();
        },
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

    // remove the event listeners
    window.removeEventListener('keyup', this.arrowHandler);

    if (this.$root.debug) { console.log( this.swipeFronts.length + ' = swipeFronts.length - beforeDestroy'); }

    if (this.$root.debug) { console.log( this.swipeRevealItemElements.length + ' = swipeRevealItemElements.length - beforeDestroy'); }

    document.body.removeEventListener('touchstart', function() {}, false);

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

/* Swipe Elements */
.swipe-front {
  width: 100%;
  height: 100%;
  /*border: solid 1px red;*/
  -ms-touch-action: none;
  /* // [START touch-action-example] */
  /* Pass all touches to javascript */
  touch-action: none;
  /* // [END touch-action-example] */

  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}

.swipe-element {
  width: 100%;
  height: 100%;
}

</style>
