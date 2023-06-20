<template>

      <div> <!-- START - No class Div Vue Passes the Class to Containing Div -->
        <div class="center-slide">

            <div v-if="slide.showImage" :style="{ 'background-image': 'url(' + slide.src + ')' }" :alt="slide.alt" class="slide-img-wrap">
            </div>

                <div v-if="slide.showVideo" :class="['fitVids-wrapper', { 'aspect-square':slide.videoSquare, 'aspect-sixteen-nine':slide.videoSixteenNine, 'aspect-nine-sixteen':slide.videoNineSixteen, 'aspect-four-three':slide.videoFourThree, }]">
                  <iframe v-if="slide.showVideo" class="videoframe" :src="slide.videoSrc" :alt="slide.alt" :width="slide.videoWidth" :height="slide.videoHeight" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>

            <div v-if="slide.showText" class="center-slide modal-description">
              <h1 class="handwritten">{{ slide.client }}</h1>
              <p class="slide-paragraph widowtamed">{{ slide.pText }}</p>
            </div>

        </div>
      </div> <!-- END - No class Div Vue Passes the Class to Containing Div -->

</template>


<script>

// import { wt } from 'widowtamer-npm';


export default {
  props: {
    slide: {
      required: true,
      type:     Object,
    },
  }, // END props
  data() {
    return {

    };
  }, // END data
  created() {


  }, // END created
  mounted() {

    // window.addEventListener('resize', this.resize);

    // Widowtamer settings
    // wt.fix({
    //   elements: '.slide-paragraph .widowtamed p',
    //   chars:    10,
    //   method:   'padding-right',
    //   event:    'resize',
    // });

    // wt.fix({
    //   elements: '.slide-paragraph .widowtamed p',
    //   chars:    10,
    //   method:   'padding-right',
    //   event:    'orientationchange',
    // });

    // wt.fix({
    //   elements: '.slide-paragraph .widowtamed p',
    //   chars:    10,
    //   method:   'padding-right',
    //   event:    'pageshow',
    // });


  }, // END mounted
  beforeDestroy() {

    // window.removeEventListener('beforeunload', this.wt);
    // window.removeEventListener('load', this.wt);
    // window.removeEventListener('orientationchange', this.wt);
    // window.removeEventListener('pageshow', this.wt);
    // window.removeEventListener('unload', this.wt);
    // window.removeEventListener('pageshow', this.wt);
    // window.removeEventListener('popstate', this.wt);
    // window.removeEventListener('unload', this.wt);
    // window.removeEventListener('resize', this.wt);

  }, // END beforeDestroy
  methods: {


  }, // END methods

}; // END export default

</script>


<style scoped>

 /* .videoframe {
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-width: 1150px;
    margin: 0 auto;
    background-color: transparent !important;
    border: 1px solid red;
  }*/

  .fitVids-wrapper {
    position: relative;
    padding-bottom: 0;
    top: 50%;
    left: -50%;
    transform: translate(50%, -50%);
    /*width: 100%;*/
    max-width: 1150px;
    height:0;
    /*border: 1px solid orange;*/
  }

  .aspect-square {
    /*padding-bottom: 100%;*/
    width: 100%;
    height: 100%;
  }

  .aspect-sixteen-nine {
    /*padding-bottom: 56.25%;*/
    width: 100%;
    height: 100%;
  }

  .aspect-nine-sixteen {
    /*padding-bottom: 75%;*/
    width: 100%;
    height: 100%;
  }

  .aspect-four-three {
    /*padding-bottom: 75%;*/
    width: 100%;
    height: 100%;
  }

  .fitVids-wrapper object,
  .fitVids-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*border: 1px solid red;*/
  }

</style>
