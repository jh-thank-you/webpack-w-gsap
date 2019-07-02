<template>

  <router-link :to="'/' + section">
    <div :id="id" class="media-type">
      <div @click="sectionIsOpen()" class="handwritten media-title"><p>{{ section }}</p></div>
    </div>
  </router-link>

</template>


<script>

import { eventBus } from 'assets/main.js';


export default {
  props: [ 'id', 'section' ], // END props
  data() {
    return {

    };
  }, // END data
  methods: {

    sectionIsOpen() {
      eventBus.$emit('sectionIsOpen');
    },


  }, // END methods

}; // END export default

</script>


<style scoped>


</style>
