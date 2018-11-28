<template>

  <nav class="corner-nav-small">

      <div id="name-and-tag-small">
        <p id="name-title-sm" class="name-title-sm"></p>
        <p class="tagline-sm">&thinsp;bad name.</p>
        <p class="tagline-sm">&thinsp;good work.</p>

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

        {id: 'nav-work-small', section: 'WORK' },
        {id: 'nav-about-small', section: 'ABOUT' },
        {id: 'nav-clients-small', section: 'CLIENTS' },
        {id: 'nav-settings-small', section: 'SETTINGS' },

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
