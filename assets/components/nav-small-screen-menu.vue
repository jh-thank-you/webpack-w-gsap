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

        <nav-button-small v-for="navigationButton in navigationButtons" @click="setSectionOpened" :key="navigationButton.id" :id="navigationButton.id" :section="navigationButton.section"></nav-button-small>

        <div class="small-nav-bottom-spacer"></div>
      </div>
    </div>

  </nav>

</template>


<script>

// import { eventBus } from 'assets/main.js';
import navButtonSmall from 'components/nav-button-small.vue';

import { mapActions} from 'vuex';


export default {

  components: {

    navButtonSmall,

  }, // END components
  data() {
    return {

      navigationButtons: [

        {id: 'nav-work-small', section: 'work' },
        {id: 'nav-about-small', section: 'about' },
        {id: 'nav-contact-small', section: 'contact' },

      ], // END navButtons

      id:      '',
      section: '',

    }; // END return
  }, // END data
  methods: {

    ...mapActions(['setSectionOpened']),

  }, // END methods

}; // END export default

</script>


<style scoped>


</style>
