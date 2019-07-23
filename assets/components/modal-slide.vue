<template>

      <div> <!-- START - No class Div Vue Passes the Class to Containing Div -->
        <div class="center-slide">

            <div v-if="slide.showImage" :style="{ 'background-image': 'url(' + slide.src + ')' }" :alt="slide.alt" class="slide-img-wrap">
            </div>

            <div v-if="slide.showVideo" class="slide-img-wrap video-wrap">
              <div class="flex-video widescreen vimeo">
                <iframe v-if="slide.showVideo" class="" :src="slide.videoSrc" :alt="slide.alt" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>
            </div>

            <div v-if="slide.showText" class="center-slide modal-description">
              <h1 class="handwritten">{{ slide.client }}</h1>
              <p class="slide-paragraph"> {{ slide.pText }} </p>
            </div>

        </div>
      </div> <!-- END - No class Div Vue Passes the Class to Containing Div -->

</template>


<script>

import { wt } from 'widowtamer-npm';


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

    wt.fix({
      elements: '.slide-paragraph',
      chars:    10,
      method:   'padding-right',
      event:    'resize',
    });

    wt.fix({
      elements: '.slide-paragraph',
      chars:    10,
      method:   'padding-right',
      event:    'orientationchange',
    });

    wt.fix({
      elements: '.slide-paragraph',
      chars:    10,
      method:   'padding-right',
      event:    'pageshow',
    });

  }, // END mounted
  beforeDestroy() {

    window.removeEventListener('beforeunload', this.wt);
    window.removeEventListener('load', this.wt);
    window.removeEventListener('orientationchange', this.wt);
    window.removeEventListener('pageshow', this.wt);
    window.removeEventListener('unload', this.wt);
    window.removeEventListener('pageshow', this.wt);
    window.removeEventListener('popstate', this.wt);
    window.removeEventListener('unload', this.wt);

  }, // END beforeDestroy
  methods: {


  }, // END methods

}; // END export default

</script>


<style scoped>

 /* video set to 4:3 aspect ratio with flex-video */
 .flex-video {
    position: relative;
    display: flex;
    padding-top: 0;
    width: 65vw;
    max-width: 65vh;
    height:  50.5vw;
    max-height: 50.5vh;
    overflow: hidden;
    margin: 0 0 0 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .flex-video iframe,
  .flex-video object,
  .flex-video embed {
    position: absolute;
    display: block;
    flex-grow: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    max-width: 640px;
    max-height: 480px;
    background-color: transparent !important;
  }

  .video-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    max-width: 632px;
    max-height: 472px;
  }

</style>
