<template>

      <div> <!-- START - No class Div Vue Passes the Class to Containing Div -->
        <div :class="['center-slide', { 'banner-web-mockup': slide.mediaID === 'Banner' }]">

            <div v-if="slide.showImage" :class="{ 'video-wrapper': slide.mediaID === 'Social', 'six-hundred-pxl': slide.client === 'Last Week Tonight' && slide.mediaID === 'Print' }" :style="{ 'background-image': 'url(' + slide.src + ')' }" :alt="slide.alt" class="slide-img-wrap">

                    <video v-if="slide.htmVideo" class="video-inner-mobile" :poster="slide.videoPoster" preload="metadata" controls muted playsinline crossOrigin="anonymous">

                        <!-- NOTE: html 5 video needs the setitngs listed below for looping video and autoplay attributes to be enabled. The attributes to be placed in the opening vidoe tag.

                             For example:
                             <videoclass="video" preload="metadata" controls autoplay loop muted playsinline crossOrigin="anonymous"></video>

                                 - autoplay
                                 - loop
                                 - muted (needed for autoplay on Chrome and Firefox)
                                 - playsinline  (needed to avoid issues of autoplay on iOS Safari)

                             For details see: https://stackoverflow.com/questions/10377453/play-infinitely-looping-video-on-load-in-html5

                        END NOTE -->

                        <source :src="slide.videoSrc" type="video/mp4">
                        <source :src="slide.videoSrcAlt" type="video/webm">
                        <track label="English subtitles" kind="subtitles" srclang="en" mode="hidden"
                               :src="slide.videoSubtitles" default>
                     </video>

            </div>

            <div v-if="slide.mediaID === 'Banner'" class="banner-cta-text"><p>click, tap or hover me</p></div>

                <div v-if="slide.showVideo" :class="['fitVids-wrapper', { 'aspect-square':slide.videoSquare, 'aspect-sixteen-nine':slide.videoSixteenNine, 'aspect-nine-sixteen':slide.videoNineSixteen, 'aspect-four-three':slide.videoFourThree, 'website-frame': slide.mediaID === 'Web' || slide.mediaID === 'Social' }]">
                  <iframe v-if="slide.showVideo" class="videoframe" :src="slide.videoSrc" :alt="slide.alt" :width="slide.videoWidth" :height="slide.videoHeight" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
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

    var video = document.querySelector('video');
    // var select = document.querySelector('select');

    function hideTracks() {
      for (var i = 0; i < video.textTracks.length; i++) {
        video.textTracks[i].mode = 'hidden';
      }
    }


    if (this.slide.mediaID === 'Social') {

      hideTracks();

    } else {
      return;
    }


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

   iframe,
   object,
   embed,
   .videoframe {
    background-color: transparent !important;
  }


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
  }

  .website-frame iframe {
    background: linear-gradient(to right, rgb(134 134 134), rgb(80 80 80));
    padding: 15px 0px 0px 0px;
    filter: drop-shadow(0px 0px 30px rgba(0,0,0,.5));
    overflow-x: hidden;
  }

  .website-frame::after {
    position: absolute;
    display: block;
    content: '';
    left: 4px;
    top: 3px;
    background-image: url('~img/ui-elements/browser-frame-dots.png');
    background-repeat: no-repeat;
    background-size: contain;
    height: 14px;
    width: 30px;
  }

  .six-hundred-pxl {
    max-width: 600px;
  }


    .video-wrapper {
      /*position: absolute;*/
      /*display: block;*/
      /*top: 50%;*/
      /*left: 50%;*/
      /*transform: translate(-50%, -50%);*/
      width: 100vmin;
      max-width: 100vmin;
      height: calc(100vmin * .6273);
      /*border: 1px solid green;*/
      /*border: 5px solid green;*/
      padding: 0;
      /*background: url(https://pluspng.com/img-png/free-png-laptop-mac-laptop-png-image-6759-1260.png) center center no-repeat;*/
        /*background-size: contain;*/
    }

   .video-inner-mobile {
        box-sizing: border-box;
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100vmin * (9/16) - 26.75%);
        height: 100%;
        margin: 0 auto;
        padding: 6% .45% 9% 0.65%;
        /*border: 1px solid red;*/
        overflow: hidden;
    }

    .video-inner-mobile:focus {
      outline: blue;
    }

    .banner-web-mockup {
      background-image: url('~img/modal-slides/website-browser-mockup.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
    }

</style>
