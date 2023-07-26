<template>

  <div :id="id" class="section-wrap texture-paper-bkg"> <!-- START section-wrap texture-paper-bkg -->

    <modal-password></modal-password>

    <button-close-section-raster></button-close-section-raster>

    <!-- See notes in CSS about CSS transition listeners -->

    <!-- display selected slideshow -->
    <router-view></router-view>

    <!--
    have to research v-cloak more:
    https://stackoverflow.com/questions/34870926/v-cloak-does-not-work-in-vue-js
    -->
    <transition name="slide-up" mode="out-in">
      <div v-cloak v-if="sectionActive" :key="this.id" id="section-content" class="justify-content handwritten">
        <div id="section-content-inner-wrap" class="section-content-inner-wrap flex-container">

          <transition-group name="slideme" mode="out-in" :key="keyValue">
              <modal-button v-for="example in getExamples()" :key="example.exampleid" :id="example.exampleid" :client="example.client" :sector="example.sector" :alt="example.alt" :access="example.access"></modal-button>
          </transition-group>

        </div>
      </div>
    </transition>

  </div> <!-- END section-wrap texture-paper-bkg -->

</template>


<script>

import { eventBus } from 'assets/main.js';
import modalPassword from 'components/modal-password.vue';

import buttonCloseSectionRaster from 'components/button-close-section-raster.vue';
import heroImage from 'components/hero-image.vue';
import modalSlideshow from 'components/modal-slideshow.vue';
import modalButton from 'components/modal-button.vue';

import { mapState } from 'vuex';

import { mapActions} from 'vuex';

import { mapGetters} from 'vuex';

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

      exampleid:     '',
      client:        '',
      sector:        '',
      alt:           '',
      access:        '',
      selected:      [],
      examples:      currentExamples,
      sectionActive: false,
      sectionStyles: '',
      currentSprite: '',
      heroActive:    false,
      keyValue:      false,
      modalPath:     '',
    };
  }, // END data
  computed: {

    ...mapState(['imageSrc', 'showModal']), // END mapState

    ...mapGetters(['getModalStatus']), // END mapGetters

  },// END computed
  watch: {

    '$route': 'resetTransition',

  }, // END watch
  created() {

    // Clear the Vuex Store imageSrc value
    this.$store.dispatch('clearImageSrc');


    eventBus.$on('resetTransitionGroup', () => {
      // reset the transition group for pharma, personal and archived work
      this.keyValue = !this.keyValue;
      if (this.$root.debug) { console.log('resetting the Transition Group'); }

    }); // END eventBus


    if (this.$root.debug) { console.log( this.$route.path + ' = this.$route.path value'); }


    if (this.$root.debug) { console.log('im created'); }

    // default selected - this loads before local storage data is created
    this.selected='beauty,branding,cleaning,fashion,finearts,financial,fitness,healthcare,pharma,publicservice,sports,technology,tourism,transportation';

    eventBus.$on('selectedChanged', (selected) => {
      this.selected = selected;

      if (this.$root.debug) { console.log(selected + ' = checkbox selected value passed to section.vue'); }
    }); // END eventBus

  }, // END created
  mounted() {


    window.addEventListener('resize', this.resize);

    this.sectionActive = true;

  }, // END mounted
  methods: {

    ...mapActions(['closeModal', 'clearImageSrc']),

    resetTransition() {

      eventBus.$emit('resetTransitionGroup');

    }, // END resetTransition


    // dynamically set which array is passed based on the Parent ID data
    getExamples() {

      if (this.$root.debug) { console.log('getExamples called'); }
      eventBus.$emit('sendSelected'); // get the current preferece form value from the section-settings component

      /* ******************************************************
            
          was using: var currentID = this.id; to
          check for which route was selected

          Tyrying to DRY things up this section-content
          component was duplicated for section-work,
          section-personal, section-pharma. Now it is 
          a componet and as such is the child of 
          section-work. The issue was the ID prop that 
          was passed via Vue Router was coming up as 
          undefined which prevernted the proper examples
          from being loaded.

          chnages the logic to check for path instead.
          All is working well.

      ****************************************************** */
      // var currentSectionID = this.id;

      var currentSectionID = this.$route.path;

      if (this.$root.debug) { console.log( currentSectionID + ' = currentSectionID'); }

      if (currentSectionID == '/work') {

        // section-work

        if (this.$root.debug) { console.log( currentSectionID + ' = currentSectionID Print Examples'); }

        currentExamples = [

          {exampleid: 'modal-advil', alt: 'Advil Print Communication Pieces', client: 'Advil', sector: ['default', 'healthcare', 'pharma'], access: 'unlocked' },

          {exampleid: 'modal-amex', alt: 'Amex Print Communication Pieces', client: 'Amex', sector: ['default', 'financial'], access: 'unlocked' },

          {exampleid: 'modal-cigna', alt: 'CIGNA Print Communication Pieces', client: 'CIGNA', sector: ['default', 'btob', 'insurance', 'healthcare'], access: 'unlocked' },

          {exampleid: 'modal-credit-suisse', alt: 'Credit Suisse Print Communication Pieces', client: 'Credit Suisse', sector: ['default', 'financial'], access: 'unlocked' },

          {exampleid: 'modal-csfb-direct', alt: 'CSFB Direct Print Communication Pieces', client: 'CSFB Direct', sector: ['default', 'financial'], access: 'unlocked' },

          {exampleid: 'modal-eleven-sports', alt: 'Eleven Sports Network', client: 'Eleven Sports Network', sector: ['default', 'entertainment', 'fitness', 'sports'], access: 'unlocked' },

          {exampleid: 'modal-ellis-island', alt: 'Ellis Island Print Communication Pieces', client: 'Ellis Island', sector: ['default', 'tourism'], access: 'unlocked' },

          {exampleid: 'modal-fl-intl-museum', alt: 'Florida International Museum Print Communication Pieces', client: 'FL Intl. Museum', sector: ['default', 'tourism'], access: 'unlocked' },

          {exampleid: 'modal-ginkoba', alt: 'Ginkoba Print Communication Pieces', client: 'Ginkoba', sector: ['default', 'healthcare', 'pharma', 'nutrition'], access: 'unlocked' },

          {exampleid: 'modal-ko-fightgear', alt: 'KO Fightgear Print Communication Pieces', client: 'KO Fightgear', sector: ['default', 'fitness', 'sports' ], access: 'unlocked' },

          {exampleid: 'modal-last-week-tonight', alt: 'Last Week Tonight', client: 'Last Week Tonight', sector: ['default', 'entertainment', 'publicservice' ], access: 'unlocked' },

          {exampleid: 'modal-lucha-underground', alt: 'Lucha Underground Wrestling', client: 'Lucha Underground', sector: ['default', 'entertainment', 'fitness', 'sports' ], access: 'unlocked' },

          {exampleid: 'modal-gte', alt: 'GTE Outdoor Communication Pieces', client: 'GTE', sector: ['default', 'financial'], access: 'unlocked' },

          {exampleid: 'modal-logos', alt: 'Logos Various', client: 'Logos', sector: ['default', 'branding', 'btob', 'healthcare', 'fitness', 'publicservice', 'sports'], access: 'unlocked' },

          {exampleid: 'modal-mistral', alt: 'Mistral Print Communication Pieces', client: 'Mistral', sector: ['default', 'fitness', 'sports' ], access: 'unlocked' },

          {exampleid: 'modal-mta', alt: 'MTA Metro Card Print Communication Pieces', client: 'MTA', sector: ['default', 'transportation', 'tourism'], access: 'unlocked' },

          {exampleid: 'modal-ny-blood-center', alt: 'NY Blood Center Print Communication Pieces', client: 'NY Blood Center', sector: ['default', 'healthcare', 'publicservice'], access: 'unlocked' },

          {exampleid: 'modal-oyama-karate', alt: 'Oyama Karate Print Communication Pieces', client: 'Oyama Karate', sector: ['default', 'fitness', 'sports' ], access: 'unlocked' },

          {exampleid: 'modal-personal', alt: 'Personal Work', client: 'Personal', sector: ['default', 'finearts'], access: 'unlocked' },

          {exampleid: 'modal-pfl', alt: 'Professional Fighters League', client: 'PFL', sector: ['default', 'fitness', 'sports' ], access: 'unlocked' },

          {exampleid: 'modal-self-promotion', alt: 'Online Digital Self-Promotion', client: 'Slef-promotion', sector: ['default', 'branding', 'btob', 'communication'], access: 'unlocked' },

          {exampleid: 'modal-tradestream', alt: 'Tradestream Print Communication Pieces', client: 'Tradestream', sector: ['default', 'btob', 'shipping', 'technology'], access: 'unlocked' },

          {exampleid: 'modal-vertex-linen', alt: 'Vertex Linens Print Communication Pieces', client: 'Vertex Linen', sector: ['default', 'btob', 'cleaning'], access: 'unlocked' },

          {exampleid: 'modal-pharma', alt: 'Pharma Various Clients', client: 'Pharma Various', sector: ['default', 'healthcare', 'pharma'], access: 'locked' },

          // {exampleid: 'modal-archive', alt: 'Various Archived Client Work', client: 'Archived Work', sector: ['default', 'btob', 'financial', 'fitness', 'healthcare', 'sports' ], access: 'locked' },

        ]; // END currentExamples

        return this.filteredExamples(currentExamples);

      } else if (currentSectionID == '/personal') {

        // section-personal-work

        if (this.$root.debug) { console.log( currentSectionID + ' = currentSectionID Personal Work'); }

        currentExamples = [

          {exampleid: 'modal-personal-01', alt: 'Feamle Nude Ink and Conte', client: 'Nude Ink and Conte', sector: ['default', 'finearts'], access: 'unlocked' },

          {exampleid: 'modal-personal-02', alt: 'Male Nude Charcoal', client: 'Nude Charcoal', sector: ['default', 'finearts'], access: 'unlocked' },

          {exampleid: 'modal-personal-03', alt: 'Female Nude Charcoal', client: 'Nude Charcoal', sector: ['default', 'finearts'], access: 'unlocked' },

          {exampleid: 'modal-personal-04', alt: 'Female Nude Charcoal', client: 'Nude Charcoal', sector: ['default', 'finearts'], access: 'unlocked' },

          {exampleid: 'modal-personal-05', alt: 'Female Portrait Graphite', client: 'Portrait Graphite', sector: ['default', 'finearts'], access: 'unlocked' },

          {exampleid: 'modal-personal-06', alt: 'Male Portrait Oil Pastel', client: 'Portrait Oil Pastel', sector: ['default', 'finearts'], access: 'unlocked' },

          {exampleid: 'modal-personal-07', alt: 'Feet Graphite', client: 'Feet Graphite', sector: ['default', 'finearts'], access: 'unlocked' },

          {exampleid: 'modal-personal-08', alt: 'Human Eye Oil Pastel', client: 'Human Eye Oil Pastel', sector: ['default', 'finearts'], access: 'unlocked' },

          {exampleid: 'modal-personal-09', alt: 'Towel Graphite', client: 'Towel Graphite', sector: ['default', 'finearts'], access: 'unlocked' },

          {exampleid: 'modal-personal-12', alt: 'Aids Poster - Mixed Media', client: 'Poster Mixed Media', sector: ['default', 'finearts'], access: 'unlocked' },

          {exampleid: 'modal-personal-13', alt: 'CD Cover - Mixed Media', client: 'CD Cover Mixed Media', sector: ['default', 'finearts'], access: 'unlocked' },

          {exampleid: 'modal-personal-14', alt: 'Metropolis Cover Design - Mixed Media', client: 'Cover Mixed Media', sector: ['default', 'finearts'], access: 'unlocked' },

        ]; // END currentExamples

        return this.filteredExamples(currentExamples);

      } else if (currentSectionID == '/pharma') {

        //section-pharma-work

        if (this.$root.debug) { console.log( currentSectionID + ' = currentSectionID Pharma Work'); }

        currentExamples = [

          {exampleid: 'modal-advil', alt: 'Advil Print Communication Pieces', client: 'Advil', sector: ['default', 'healthcare', 'pharma'], access: 'unlocked' },

          {exampleid: 'modal-bayer', alt: 'Bayer Print Communication Pieces', client: 'Bayer', sector: ['default', 'healthcare', 'pharma'], access: 'unlocked' },

          {exampleid: 'modal-cardene-iv', alt: 'Cardene I.V. Print Communication Pieces', client: 'Cardene I.V.', sector: ['healthcare', 'pharma'], access: 'unlocked' },

          {exampleid: 'modal-cimzia', alt: 'Cimzia Print Communication Pieces', client: 'Cimzia', sector: ['default', 'healthcare', 'pharma'], access: 'unlocked' },

          {exampleid: 'modal-ginkoba', alt: 'Ginkoba Print Communication Pieces', client: 'Ginkoba', sector: ['default', 'healthcare', 'pharma', 'nutrition'], access: 'unlocked' },

          {exampleid: 'modal-levemir', alt: 'Levemir Print Communication Pieces', client: 'Levemir', sector: ['healthcare', 'pharma'], access: 'unlocked' },

          {exampleid: 'modal-ny-blood-center', alt: 'NY Blood Center Print Communication Pieces', client: 'NY Blood Center', sector: ['default', 'healthcare', 'publicservice'], access: 'unlocked' },

          {exampleid: 'modal-premarin', alt: 'Premarin 360 Campaign Communication Pieces', client: 'Premarin', sector: ['healthcare', 'pharma'], access: 'unlocked' },

          {exampleid: 'modal-spiriva', alt: 'Spiriva Print Communication Pieces', client: 'Spiriva', sector: ['healthcare', 'pharma'], access: 'unlocked' },


        ]; // END currentExamples

        return this.filteredExamples(currentExamples);

      } else if (currentSectionID == '/archive') {

        // section-archived-work

        if (this.$root.debug) { console.log( currentSectionID + ' = currentSectionID Archived Work'); }

        currentExamples = [

          {exampleid: 'modal-amtrak', alt: 'Amtrak Print Communication Pieces', client: 'Amtrak', sector: ['default', 'transportation', 'tourism'], access: 'unlocked' },

          {exampleid: 'modal-bayer', alt: 'Bayer Print Communication Pieces', client: 'Bayer', sector: ['default', 'healthcare', 'pharma'], access: 'unlocked' },

          {exampleid: 'modal-dell', alt: 'Dell Print Communication Pieces', client: 'Dell', sector: ['default', 'technology'], access: 'unlocked' },

          {exampleid: 'modal-goldman-sachs', alt: 'Goldman Sachs Print Communication Pieces', client: 'Goldman Sachs', sector: ['financial'], access: 'unlocked' },

          {exampleid: 'modal-lcc', alt: 'LCC Print Communication Pieces', client: 'LCC', sector: ['publicservice'], access: 'unlocked' },

          {exampleid: 'modal-mally-beauty', alt: 'Mally Beauty Outdoor Communication Pieces', client: 'Mally Beauty', sector: ['default', 'beauty', 'fashion', 'fragrance'], access: 'unlocked' },

        ]; // END currentExamples

        return this.filteredExamples(currentExamples);

      } else {
        if (this.$root.debug) { console.log(currentSectionID + ' - Error no data for examples in section.vue component'); }
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

    /* *****************************************************
        note with new structure you need to keep eventBus 
        modalVisibility alive - DO NOT DESTROY 
        otherwise Modal Viability will not work for
        the newly added Pharma, Personal Work and
        Archived Work Sections 
    ****************************************************** */

    eventBus.$off('selectedChanged');

    // eventBus.$off('clearImageSourceValue');

    eventBus.$off('tellSectionWorkBringBackCornerNav');

    window.removeEventListener('resize', this.resize);

    eventBus.$off('tellSectionToResetAnimation');

  }, // END beforeDestroy
  destroyed() {

    // turn off binding to prevent multiple instances
    // Also NOT turning this off caused getExamples(), 
    // found in section.vue, to run in an infinite loop. 
    eventBus.$off('sendSelected');


    // turn off binding to prevent multiple instances
    // Also NOT turning this off caused getExamples(), 
    // found in section.vue, to run in an infinite loop.  
    this.$off('imageSelectChanged');

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
    transition-delay: 1.75s;
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
