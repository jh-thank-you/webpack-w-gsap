<template>

  <router-link :to="'/' + section">
      <div :id="id" class="handwritten media-title"><p>{{ section }}</p></div>
  </router-link>

</template>


<script>


export default {

  props: [ 'id', 'section' ], // END props
  data() {
    return {

    };
  }, // END data  

}; // END export default

</script>


<style scoped>


</style>
