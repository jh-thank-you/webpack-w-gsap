<template>

    <div @click="setSectionClosed" class='close-button button-close-raster' aria-label='Close alert' type='button'>
      <div aria-hidden='true'>&times;</div>
    </div>

</template>


<script>

// import { eventBus } from 'assets/main.js';
import { mapActions} from 'vuex';

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
    ...mapActions(['setSectionClosed']),


  }, // END methods


}; // END export default

</script>


<style scoped>


</style>
