<template>

    <name-title-tag class="hide-title-tag"></name-title-tag>

</template>


<script>

import nameTitleTag from 'components/name-title-tag.vue';

export default {

  components: { nameTitleTag }, // END components
  created() {
    // load the vuex store data
    // this.$store.dispatch('');

  }, // END created

}; // END export default

</script>


<style scoped>


</style>
