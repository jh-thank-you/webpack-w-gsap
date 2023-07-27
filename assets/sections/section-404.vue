<template>

<div :id="id" class="section-wrap texture-paper-bkg">

  <transition name="slide-up" mode="out-in">

    <div v-cloak v-if="sectionActive" :key="this.id" id="section-content" class="justify-content handwritten">

      <div id="section-content-inner-wrap" class="section-content-inner-wrap flex-container">

              <button-close-section-raster></button-close-section-raster>

                  <div id="preferences-form" class="row"> <!-- START preferences-form -->

                    <div class="form-section">
                      <legend><h4 class="handwritten review-baseline">404 - Page Not Found</h4></legend>
                      <p class="review">Well, that really stinks. You missed out, that content is gone... forever lost. Hope you're not too sad.</p>

                      <p class="review">To cheer you up here is a little joke (courtesy of Mr. K - Retired 5th grade teacher):</p>

                      <div class="joke">
                        <div class="chips"></div>

                        <p class="review">10 potato chips were traveling merrily along a road when they came upon a bridge.</p>

                        <p class="review">9 potato chips jumped off the bridge to their soggy deaths.</p>

                        <p class="review">Why didn't the 10th potato chip jump off the bridge?</p>

                        <p class="review">Because, it's a <b><i>Wise</i></b> potato chip!</p>
                    </div>

                    </div>

                    <div class="end-spacer"><!-- Empty Spacer Div for Scroll --></div>

                  </div> <!-- END preferences-form -->
        </div>
      </div>
  </transition>
</div>

</template>


<script>

import buttonCloseSectionRaster from 'components/button-close-section-raster.vue';

import { wt } from 'widowtamer-npm';

export default {

  components: {

    buttonCloseSectionRaster,

  }, // END components
  // passing in ID data from nav-button to hero-image through vue-router 
  // needs to be passed here in the parent level vs at the hero-image child level
  props: [ 'id' ],// END props
  data() {
    return {

      showModal:     false,
      sectionActive: false,
    };
  }, // END data
  created() {


  }, // END created
  mounted() {


    window.addEventListener('resize', this.resize);

    this.sectionActive = true;


    // Widowtamer settings
    wt.fix({
      elements: '.form-section legend h4',
      chars:    10,
      method:   'nbsp',
      event:    'resize',
    });

    wt.fix({
      elements: '.form-section legend h4',
      chars:    10,
      method:   'nbsp',
      event:    'orientationchange',
    });

    wt.fix({
      elements: '.form-section legend h4',
      chars:    10,
      method:   'nbsp',
      event:    'pageshow',
    });


    wt.fix({
      elements: '.review',
      chars:    10,
      method:   'padding-right',
      event:    'resize',
    });

    wt.fix({
      elements: '.review',
      chars:    10,
      method:   'padding-right',
      event:    'orientationchange',
    });

    wt.fix({
      elements: '.review',
      chars:    10,
      method:   'padding-right',
      event:    'pageshow',
    });


  }, // END mounted
  methods: {


  }, // END methods
  beforeUpdate() {


  }, // END beforeUpdate
  beforeDestroy() {

    window.removeEventListener('resize', this.resize);

    window.removeEventListener('beforeunload', this.wt);
    window.removeEventListener('load', this.wt);
    window.removeEventListener('orientationchange', this.wt);
    window.removeEventListener('pageshow', this.wt);
    window.removeEventListener('unload', this.wt);
    window.removeEventListener('pageshow', this.wt);
    window.removeEventListener('popstate', this.wt);
    window.removeEventListener('unload', this.wt);


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
      width: 32%;
    }
  }

  @media all and (min-width: 501px) and (max-width: 800px) {
    .slideme-enter-to {
      width: 49%;
    }
  }

  @media all and (max-width: 500px) {
    .slideme-enter-to {
      width: 100%;
    }
  }


  @media all and (min-width: 801px) {
    .slideme-leave {
      width: 32%;
    }
  }

  @media all and (min-width: 501px) and (max-width: 800px) {
    .slideme-leave {
      width: 49%;
    }
  }

  @media all and (max-width: 500px) {
    .slideme-leave {
      width: 100%;
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
}

.slide-up-enter-active {
  transition: all 1.4s ease;
  animation: slidein 1.4s ease-out forwards;
}


.slide-up-leave-active {
  transition: all .35s ease;
  animation: slideout 1.4s ease-out forwards;
}

.slide-up-leave-to {
  opacity: 1;
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
