<template>
    
  <div @click="exampleSelected(), hideTab()" :id="id" class="boxframe" :sector="sector" :access="access">

    <div :class="currentClassArray()"></div>
    <span class="client-label handwritten"><p>{{ client }}</p></span>

    <img class="fadeMe" :src="getPic()" :alt="this.id + ' advertisment'">
  </div>

</template>


<script>

import { eventBus } from 'assets/main.js';
let currentClass = ['inner-frame-3', 'hover-me' ];

export default {

  props: [ 'id', 'alt', 'client', 'sector', 'access', 'showModal' ], // END props
  data() {
    return {

      classArray: currentClass,

    };
  }, // END data
  computed: {


  }, // END computed
  created() {



  }, // END created
  methods: {

    hideTab() {
      var tabHidden = true;
      eventBus.$emit('tabVisibility', tabHidden);
    },

    currentClassArray() {

      currentClass = [ 'inner-frame-3', 'hover-me', this.access ];
      return currentClass;

    }, // END currentClassArray

    exampleSelected() {

      var access = this.access;
      var showModal = false;

      if (access == 'locked') {

        showModal = false;
        eventBus.$emit('modalVisibility', showModal);

        var showPasswordModal = true;
        eventBus.$emit('passwordStatus', showPasswordModal);

      } else {

        showModal = true;
        eventBus.$emit('modalVisibility', showModal);

        this.imageSrc = this.id;

        this.$emit('imageSelectChanged', this.imageSrc);

        if (this.$root.debug) console.log(this.imageSrc + ' = this.imageSrc - modal button clicked');

      }

    }, // END exampleSelected

    getPic() {
      /* return */ // require('assets/img/' + this.id + '1a-sm.png');
      return 'assets/img/' + this.id + '1a-sm.gif';
    }, // END getPic

  }, // END methods
  mounted() {


  }, // END mounted
  destroyed() {
        
    // turn off binding to prevent multiple instances
    this.$off('imageSelectChanged');

  }, // END destroyed

}; // END export default

</script>



<style scoped>
  


</style>