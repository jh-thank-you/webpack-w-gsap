<template>

      <div> <!-- START - No class Div Vue Passes the Class to Containing Div -->
        <div class="center-slide">

            <div v-if="slide.showImage" :style="{ 'background-image': 'url(' + slide.src + ')' }" :alt="slide.alt" class="slide-img-wrap">
            </div>

            <div v-if="slide.showVideo" class="slide-img-wrap video-wrap">
              <div class="flex-video widescreen vimeo">
                <iframe v-if="slide.showVideo" :src="slide.videoSrc" :alt="slide.alt" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>
            </div>

            <div v-if="slide.showText" class="center-slide modal-description">
              <h1 class="handwritten">{{ slide.client }}</h1>
              <p> {{ slide.pText }} </p>
            </div>

        </div>
      </div> <!-- END - No class Div Vue Passes the Class to Containing Div -->

</template>


<script>

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


  /* Original Flex Video CSS */
  /* .flex-video {
    position: relative;
    padding-top: 25px;
    padding-bottom: 67.5%;
    height: 0;
    margin-bottom: 16px;
    overflow: hidden;
  }

  .flex-video.widescreen { padding-bottom: 57.25%; }

  .flex-video.vimeo {
    padding-top: 0;
    margin: 0;
  }

  .flex-video iframe,
  .flex-video object,
  .flex-video embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-device-width: 800px), only screen and (device-width: 1024px) and (device-height: 600px), only screen and (width: 1280px) and (orientation: landscape), only screen and (device-width: 800px), only screen and (max-width: 767px) {
    .flex-video { padding-top: 0; }
  }*/


</style>
