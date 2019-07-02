<template>

    <div id="button-close-raster" @click="updateCornerNav()" class='close-button' aria-label='Close alert' type='button'>
      <div aria-hidden='true'>&times;</div>
    </div>

</template>


<script>

import { eventBus } from 'assets/main.js';

export default {
  props: [ 'id' ], // END props
  data() {
    return {

    };
  }, // END data
  created() {


  }, // END created
  mounted() {


  }, // END mounted
  methods: {

    updateCornerNav() {

      eventBus.$emit('sectionIsClosed');

      // tell corner nav to move back into window frame
      // eventBus.$emit('bringBackCornerNav');

      if (this.$root.debug) { console.log('bringBackCornerNav - route to home page'); }

      // send to new route
      this.$router.push({ path: '/', id: 'section-home' }); // -> /home


      if (this.$root.debug) { console.log('raster-close button clicked'); }


    }, // END updateCornernav

  }, // END methods


}; // END export default

</script>


<style scoped>


</style>
