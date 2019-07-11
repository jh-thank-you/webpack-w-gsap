<template>

  <router-link :to="'/' + section">
    <div :id="id" class="media-type">
      <div @click="setSectionOpened" class="handwritten media-title"><p>{{ section }}</p></div>
    </div>
  </router-link>

</template>


<script>

// import { eventBus } from 'assets/main.js';

import { mapActions} from 'vuex';

export default {
  props: [ 'id', 'section' ], // END props
  data() {
    return {

    };
  }, // END data
  methods: {

    ...mapActions(['setSectionOpened']),


  }, // END methods

}; // END export default

</script>


<style scoped>


</style>
