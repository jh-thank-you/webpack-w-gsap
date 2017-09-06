<template>

  <div :id="id" class="section-wrap texture-paper-bkg">

      <modal-password></modal-password>

      <button-close-section-raster></button-close-section-raster>

      <!-- See notes in CSS about CSS transition listeners -->
      <div :class="heroVisibilityClass">

        <transition @enter="enter" :css="false" @after-enter="sectionActive = true">
          <div v-if="heroActive" :class="'sprite-' + this.id +'-wrap'">

              <canvas id="the-canvas" :class="currentSpriteImage()"></canvas>

              <div @click="sectionActive = true, updateHeroClass()" type="button" class="skip handwritten"><p>skip</p></div>

          </div>
        </transition>
      </div>

    <transition name="fade-slideshow">
    <modal-slideshow v-if="showModal" @close="showModal = false" :imageSrc="imagesource"></modal-slideshow>
    </transition>

    <!--
    have too research v-cloak more:
    https://stackoverflow.com/questions/34870926/v-cloak-does-not-work-in-vue-js
    -->
    <transition name="slide-up" @enter="updateHeroClass()">
      <div v-cloak v-if="sectionActive" :key="this.id" id="section-content" class="justify-content handwritten">
        <div id="section-content-inner-wrap" class="section-content-inner-wrap flex-container">

          <transition-group name="slideme" mode="out-in">
            <modal-button v-for="example in getExamples()" :key="example.exampleid" :id="example.exampleid" :client="example.client" :sector="example.sector" :alt="example.alt" :access="example.access" @imageSelectChanged="imagesource = $event"></modal-button>
          </transition-group>
        </div>
      </div>
    </transition>

  </div>

</template>


<script>

import { eventBus } from 'assets/main.js';
import modalPassword from 'components/modal-password.vue';

import buttonCloseSectionRaster from 'components/button-close-section-raster.vue';
import heroImage from 'components/hero-image.vue';
import modalSlideshow from 'components/modal-slideshow.vue';
import modalButton from 'components/modal-button.vue';

let currentExamples = null;

export default {

  components: {

    modalPassword,
    buttonCloseSectionRaster,
    heroImage,
    modalSlideshow,
    modalButton,

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

    eventBus.$on('selectedChanged', (selected) => {
      this.selected = selected;

      if (this.$root.debug) { console.log(selected + ' = checkbox selected value passed to section.vue'); }
    }); // END eventBus

  }, // END created
  mounted() {

    if (this.$root.debug) { console.log(this.heroActive + ' = this.heroActive value before call'); }

    this.heroIsActive();

    if (this.$root.debug) { console.log(this.heroActive + ' = this.heroActive value after call'); }

    window.addEventListener('resize', this.resize);

  }, // END mounted
  methods: {

    updateHeroClass() {
      var updatedHeroClass = 'fade-me sprite-wrap outer-sprite-container';
      this.heroVisibilityClass = updatedHeroClass;
      if (this.$root.debug) { console.log(this.heroVisibilityClass + ' = this.heroVisibilityClass - Updated sprite-wrap outer-sprite-container'); }
    }, // END updateHeroClass

    currentSpriteImage() {
      this.currentSprite = 'sprite-' + `${this.id}` + ' current-animation sprite';
      return this.currentSprite;
    }, // END currentSprite

    heroIsActive() {
      this.heroActive = true;
    }, // END sectionIsActive

    enter(el, done) {

      var self = this;
      var spriteImage = this.id;
      var canvas = document.getElementById('the-canvas');
      var ctx = canvas.getContext('2d');


      var frameSize = 500;
      var totalFrames = 64;
      var sheetFrames = 16;
      var sheetRows = 4;
      var sheetCols = 4;

      var sprite = {
        frame: 0,
      };

      var frameData = [];
      var lastFrame = -1;

      canvas.width = frameSize;
      canvas.height = frameSize;

      // div.appendChild(canvas);


      var sheet1 = new Image();
      sheet1.onload = onLoad;

      var sheet2 = new Image();
      sheet2.onload = onLoad;

      var sheet3 = new Image();
      sheet3.onload = onLoad;

      var sheet4 = new Image();
      sheet4.onload = onLoad;

      var spriteSheets = [sheet1, sheet2, sheet3, sheet4];
      var loadingCount = spriteSheets.length;

      for (var i = 0; i < totalFrames; i++) {

        frameData.push({
          sheet: spriteSheets[Math.floor(i / sheetFrames)],
          x:     (i % sheetCols) * frameSize,
          y:     Math.floor((i % sheetFrames) / sheetRows) * frameSize,
        });
      }

      // Setting the src for an image will kick off the loading
      // This can happen immediately so you should set the src after 
      // setting the callback or it might get skipped
      // Note: using CopyWebpackPlugin to copy sprite sheets to assets folder.
      sheet1.src = 'assets/img/sprite-sheets/sprite-' + spriteImage + '/sprite-' + spriteImage + '-0.png';

      sheet2.src = 'assets/img/sprite-sheets/sprite-' + spriteImage + '/sprite-' + spriteImage + '-1.png';

      sheet3.src = 'assets/img/sprite-sheets/sprite-' + spriteImage + '/sprite-' + spriteImage + '-2.png';

      sheet4.src = 'assets/img/sprite-sheets/sprite-' + spriteImage + '/sprite-' + spriteImage + '-3.png';


      function onLoad() {

        loadingCount--;
        this.onload = undefined; // remove onload callback from image

        if (loadingCount == 0) {

          this.animation = TweenLite.to(sprite, 3, {
            frame:      totalFrames - 1,
            onUpdate:   draw,
            onComplete: function() {

              done();

              if (self.$root.debug) { console.log('lastframe - hero sprite animation is done'); }
            },
            ease:       Linear.easeNone,
            roundProps: 'frame',
          });
        }
      } // END onLoad

      function draw() {

        // No need to update
        if (sprite.frame === lastFrame) {
          return;
        }

        var frame = frameData[sprite.frame];
        // ctx.globalAlpha = sprite.alpha;
        ctx.clearRect(0, 0, frameSize, frameSize);
        ctx.drawImage(frame.sheet, frame.x, frame.y, frameSize, frameSize, 0, 0, frameSize, frameSize);

        lastFrame = sprite.frame;
      } // END draw

    }, // END enter


    // dynamically set which array is passed based on the Parent ID data
    getExamples() {

      if (this.$root.debug) { console.log('getExamples called'); }
      eventBus.$emit('sendSelected'); // get the current preferece form value from the contacts-and-prefs component

      var currentID = this.id;

      if (currentID == 'section-print') {

        if (this.$root.debug) { console.log( currentID + ' = currentID Print Examples'); }

        currentExamples = [

          {exampleid: 'modal-print-advil', alt: 'Advil Ad Blah Blah Blah', client: 'Advil', sector: ['default', 'healthcare', 'pharma'], access: 'unlocked' },

          {exampleid: 'modal-print-amnh', alt: 'American Museum of Natural History Ad', client: 'AMNH', sector: ['tourism'], access: 'unlocked' },

          {exampleid: 'modal-print-amex', alt: 'Amex Ad', client: 'Amex', sector: ['financial'], access: 'unlocked' },

          {exampleid: 'modal-print-amtrak', alt: 'Amtrak Ad', client: 'Amtrak', sector: ['default', 'transportation', 'tourism'], access: 'unlocked' },

          {exampleid: 'modal-print-bayer', alt: 'Bayer Ad', client: 'Bayer', sector: ['default', 'healthcare', 'pharma'], access: 'unlocked' },

          {exampleid: 'modal-print-bonita-bay', alt: 'Bonita Bay Ad', client: 'Bonita Bay', sector: ['realestate', 'hotel'], access: 'unlocked' },

          {exampleid: 'modal-print-cardene-iv', alt: 'Cardene I.V. Ad', client: 'Cardene I.V.', sector: ['healthcare', 'pharma'], access: 'locked' },

          {exampleid: 'modal-print-cigna', alt: 'CIGNA Ad', client: 'CIGNA', sector: ['default', 'btob', 'insurance', 'healthcare'], access: 'unlocked' },

          {exampleid: 'modal-print-cimzia', alt: 'Cimzia Ad', client: 'Cimzia', sector: ['default', 'healthcare', 'pharma'], access: 'locked' },

          {exampleid: 'modal-print-dell', alt: 'Dell Ad', client: 'Dell', sector: ['default', 'technology'], access: 'unlocked' },

          {exampleid: 'modal-print-credit-suisse', alt: 'Credit Suisse Ad', client: 'Credit Suisse', sector: ['default', 'financial'], access: 'unlocked' },

          {exampleid: 'modal-print-ellis-island', alt: 'Ellis Island Ad', client: 'Ellis Island', sector: ['default', 'tourism'], access: 'unlocked' },

          {exampleid: 'modal-print-espn', alt: 'ESPN Ad', client: 'ESPN', sector: ['default', 'sports', 'fitness'], access: 'unlocked' },

          {exampleid: 'modal-print-fl-intl-museum', alt: 'Florida International Museum Ad', client: 'FL Intl. Museum', sector: ['default', 'tourism'], access: 'unlocked' },

          {exampleid: 'modal-print-ginkoba', alt: 'Ginkoba Ad', client: 'Ginkoba', sector: ['default', 'healthcare', 'pharma', 'nutrition'], access: 'unlocked' },

          {exampleid: 'modal-print-goldman-sachs', alt: 'Goldman Sachs Ad', client: 'Goldman Sachs', sector: ['financial'], access: 'unlocked' },

          {exampleid: 'modal-print-ko-fightgear', alt: 'KO Fightgear Ad', client: 'KO Fightgear', sector: ['default', 'sports', 'fitness'], access: 'unlocked' },

          {exampleid: 'modal-print-lcc', alt: 'LCC Ad', client: 'LCC', sector: ['publicservice'], access: 'unlocked' },

          {exampleid: 'modal-print-levemir', alt: 'Levemir Ad', client: 'Levemir', sector: ['healthcare', 'pharma'], access: 'locked' },

          {exampleid: 'modal-print-logos', alt: 'Logos Various', client: 'Logos', sector: ['default', 'branding', 'btob', 'healthcare', 'fitness', 'publicservice', 'sports'], access: 'unlocked' },

          {exampleid: 'modal-print-mally-beauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: ['default', 'beauty', 'fashion', 'fragrance'], access: 'unlocked' },

          {exampleid: 'modal-print-mistral', alt: 'Mistral Ad', client: 'Mistral', sector: ['default', 'sports', 'fitness'], access: 'unlocked' },

          {exampleid: 'modal-print-ny-blood-center', alt: 'NY Blood Center Ad', client: 'NY Blood Center', sector: ['default', 'healthcare', 'publicservice'], access: 'unlocked' },

          {exampleid: 'modal-print-oyama-karate', alt: 'Oyama Karate Ad', client: 'Oyama Karate', sector: ['default', 'sports', 'fitness'], access: 'unlocked' },

          {exampleid: 'modal-print-spiriva', alt: 'Spiriva Ad', client: 'Spiriva', sector: ['healthcare', 'pharma'], access: 'locked' },

          {exampleid: 'modal-print-tradestream', alt: 'Tradestream Ad', client: 'Tradestream', sector: ['btob', 'shipping'], access: 'unlocked' },

          {exampleid: 'modal-print-vertex-linens', alt: 'Vertex Linens Ad', client: 'Vertex Linens', sector: ['btob', 'cleaning'], access: 'unlocked' },

        ]; // END currentExamples

        return this.filteredExamples(currentExamples);

      } else if (currentID == 'section-video') {

        if (this.$root.debug) { console.log( currentID + ' = currentID Video Examples'); }

        currentExamples = [

          {exampleid: 'modal-print-advil', alt: 'Advil Video Campaign', client: 'Advil', sector: ['default', 'healthcare', 'pharma'], access: 'unlocked' },

          {exampleid: 'modal-print-cimzia', alt: 'Cimzia Video Campaign', client: 'Cimzia', sector: ['default', 'healthcare', 'pharma'], access: 'locked' },

          {exampleid: 'modal-print-credit-suisse', alt: 'Credit Suisse Video Campaign', client: 'Credit Suisse', sector: ['default', 'financial'], access: 'unlocked' },

          {exampleid: 'modal-print-csfb-direct', alt: 'CSFB Direct Video Campaign', client: 'CSFB Direct', sector: ['default', 'financial'], access: 'unlocked' },

          {exampleid: 'modal-print-ginkoba', alt: 'Ginkoba Video Campaign', client: 'Ginkoba', sector: ['default', 'healthcare', 'pharma', 'nutrition'], access: 'unlocked' },

          {exampleid: 'modal-print-ny-blood-center', alt: 'NY Blood Center Video Campaign', client: 'NY Blood Center', sector: ['default', 'healthcare', 'publicservice'], access: 'unlocked' },

        ]; // END currentExamples

        return this.filteredExamples(currentExamples);

      } else if (currentID == 'section-outdoor') {

        if (this.$root.debug) { console.log( currentID + ' = currentID Outdoor Examples'); }

        currentExamples = [

          {exampleid: 'modal-print-cimzia', alt: 'Cimzia Ad', client: 'Cimzia', sector: ['default', 'healthcare', 'pharma'], access: 'locked' },

          {exampleid: 'modal-print-ginkoba', alt: 'Ginkoba Ad', client: 'Ginkoba', sector: ['default', 'healthcare', 'pharma', 'nutrition'], access: 'unlocked' },

          {exampleid: 'modal-print-goldman-sachs', alt: 'Goldman Sachs Ad', client: 'GTE', sector: ['financial'], access: 'unlocked' },

          {exampleid: 'modal-print-mally-beauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: ['default', 'beauty', 'fashion', 'fragrance'], access: 'unlocked' },

          {exampleid: 'modal-print-vertex-linens', alt: 'Vertex Linens Ad', client: 'Metro Card', sector: ['btob', 'cleaning'], access: 'unlocked' },

        ]; // END currentExamples

        return this.filteredExamples(currentExamples);

      } else if (currentID == 'section-online') {

        if (this.$root.debug) { console.log( currentID + ' = currentID Online Examples'); }

        currentExamples = [

          {exampleid: 'modal-print-dell', alt: 'Dell Ad', client: 'Dell', sector: ['default', 'technology'], access: 'unlocked' },

          {exampleid: 'modal-print-credit-suisse', alt: 'Credit Suisse Ad', client: 'Credit Suisse', sector: ['default', 'financial'], access: 'unlocked' },

          {exampleid: 'modal-print-ko-fightgear', alt: 'KO Fightgear Ad', client: 'KO Fightgear', sector: ['default', 'sports', 'fitness'], access: 'unlocked' },

          {exampleid: 'modal-print-mally-beauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: ['default', 'beauty', 'fashion', 'fragrance'], access: 'unlocked' },

          {exampleid: 'modal-print-vertex-linens', alt: 'Vertex Linens Ad', client: 'Vertex Linens', sector: ['btob', 'cleaning'], access: 'unlocked' },

        ]; // END currentExamples

        return this.filteredExamples(currentExamples);

      } else {
        if (this.$root.debug) { console.log(this.id + ' - Error no data for examples in section.vue component'); }
      } // END If - Else Examples

    }, // END getExamples

    /* ****************************************************** 
          A Big thank you to Sven for helping me with
          the filter and eventBus communication.
          https://github.com/svevil

          To Everyone, he is Super nice! 
          Super fast! and Super knowledgeable!

            - P.S. Sven, I promise to learn Vuex!
     ******************************************************* */

    // Filter the results from the checkboxes
    filteredExamples(currentExamples) {
      if (this.$root.debug) { console.log(this.selected + ' = filteredExamples - current selected industries form value'); }

      return currentExamples.filter((sector) => { // loop over all items in currentExamples
        return sector.sector.some((el) => { // check every item in the 'sector' array
          return this.selected.indexOf(el) > -1; // check if it exists in this.selected
        });
      });
    }, // END filteredExamples

  }, // END methods
  beforeDestroy() {

    eventBus.$off('modalVisibility');

    eventBus.$off('selectedChanged');

    window.removeEventListener('resize', this.resize);

  }, // END destroyed

}; // END export default

</script>


<style scoped>

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
