<template>

<div :id="id" class="section-wrap texture-paper-bkg">

  <transition name="slide-up" mode="out-in">

    <div v-cloak v-if="sectionActive" :key="this.id" id="section-content" class="justify-content handwritten">

      <div id="section-content-inner-wrap" class="section-content-inner-wrap flex-container">

              <button-close-section-raster></button-close-section-raster>

                  <div id="preferences-form" class="row"> <!-- START preferences-form -->
                    <div class="form-section">
                      <legend><h4 class="handwritten">Contact Info</h4></legend>
                      <p>Jim Hainis | Art Director | <a href="tel:973-415-8869">973.415.8869</a> |<a href="mailto:jim@hainis.net?Subject=We%20want%20to%20hire%20you%21"> jim@hainis.net</a></p>

                      <div>
                        <div class="linkedin-icon" onclick=" window.open('http://www.linkedin.com/pub/jim-hainis/3/9a5/185','_blank')"></div>

                        <div class="instagram-icon" onclick=" window.open('https://www.instagram.com/hainisad/','_blank')"></div>

                        <div class="twitter-icon" onclick=" window.open('https://twitter.com/hainis9','_blank')"></div>

                        <div class="vimeo-icon" onclick=" window.open('https://vimeo.com/user7076658','_blank')"></div>
                      </div>
                    </div>

                    <div class="form-section">
                      <legend><h4 class="handwritten review-baseline">Thanks for Stopping By</h4></legend>
                      <p class="review">Well, you have either looked at all my work and are ready to hire me or you just want to chew the fat. Either way I'm happy to chat.</p>
                    </div>

                    <hr>

                    <div class="form-section">
                      <legend><h4 class="handwritten">Thanks GreenSock Team!</h4></legend>
                      <p>To say you ROCK!!! would be selling you short. Thanks again gents for all your help. An extra shout-out to Blake and Dipscom!<a href="https://greensock.com/" target="_blank"> GreenSock.com</a></p>
                    </div>

                    <div class="form-section">
                      <legend><h4 class="handwritten">Thanks Sven Vilters!</h4></legend>
                      <p>I can't thank you enough for all your time, patience and guidance.<a href="https://github.com/svevil" target="_blank"> GitHub &#124; Sven Vilters</a></p>
                    </div>

                    <div class="form-section">
                      <legend><h4 class="handwritten">Thanks Juho Vepsalainen!</h4></legend>
                      <p>Your kindness and willingness to help others is only surpassed by your webpack knowledge. Thanks again for sharing your webpack book with the community.<a href="https://survivejs.com/webpack/" target="_blank"> SurviveJs &#124; Webpack from Apprentice to Master</a></p>
                    </div>

                    <div class="form-section">
                      <legend><h4 class="handwritten">Thanks Bogdan Luca!</h4></legend>
                      <p>A BIG thank you to Bogdan. I appreciate all your VueJS help and especially with your willingness to teach and not just critique.<a href="https://github.com/lbogdan" target="_blank"> GitHub &#124; Bogdan Luca &#124; lbogdan</a></p>
                    </div>

                    <div class="form-section">
                      <legend><h4 class="handwritten">Thanks Vue Discord Community (Vue Land)!</h4></legend>
                      <p>What a great, friendly, dev community. Thank you everyone sharing your knowledge and making Vue Land such a great place.<a href="https://chat.vuejs.org/" target="_blank"> Discord Server &#124; Vue Land</a></p>
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


  }, // END mounted
  methods: {


  }, // END methods
  beforeDestroy() {

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
