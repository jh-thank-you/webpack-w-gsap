<template>

  <nav class="corner-nav-small">

      <div id="name-and-tag-small">
        <p id="name-title">Hainis Art Direction</p>
        <p id="tagline">&thinsp;bad name. good work.</p>
      </div>

    <div class="inner-wrap-fixed-scroll">
      <div class="inner-wrap">
        <div class="small-nav-top-spacer"></div>

        <nav-button-small v-for="navigationButton in navigationButtons" @click.native="sectionOpened()" :key="navigationButton.id" :id="navigationButton.id" :section="navigationButton.section"></nav-button-small>

        <div class="small-nav-bottom-spacer"></div>
      </div>
    </div>

  </nav>

</template>


<script>

import { eventBus } from 'assets/main.js';
import navButtonSmall from 'components/nav-button-small.vue';

export default {

  components: {

    navButtonSmall,

  }, // END components
  data() {
    return {

      navigationButtons: [

        {id: 'nav-print-small', section: 'PRINT' },
        {id: 'nav-video-small', section: 'VIDEO' },
        {id: 'nav-outdoor-small', section: 'OUTDOOR' },
        {id: 'nav-online-small', section: 'ONLINE' },

      ], // END navButtons

      id:      '',
      section: '',

    }; // END return
  }, // END data
  methods: {

    sectionOpened() {
      // tell corner nav to move back into window frame
      eventBus.$emit('sectionIsOpen');

      if (this.$root.debug) { console.log('small-nav - sectionIsOpen'); }

    }, // END sectionOpened

  }, // END methods

}; // END export default

</script>


<style scoped>


</style>
