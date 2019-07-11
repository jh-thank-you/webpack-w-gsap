<template>

  <div @click="exampleSelected()" :id="id" class="boxframe" :sector="sector" :access="access" :style="{ backgroundImage: `url(${getPic()})` }" >

    <div :class="currentClassArray()"></div>
    <span class="client-label handwritten"><p>{{ client }}</p></span>

    <div class="boxframe-alt" :style="{ backgroundImage: `url(${getPicAlt()})` }" :alt="this.id + ' advertisment'"></div>
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

        this.imageSrc = this.id;
        this.$emit('imageSelectChanged', this.imageSrc);

        var showPasswordModal = true;
        eventBus.$emit('passwordStatus', showPasswordModal);

      } else {

        this.imageSrc = this.id;

        if (this.imageSrc == 'modal-print-personal') {

          showModal = false;
          eventBus.$emit('modalVisibility', showModal);

          this.imageSrc = this.id;
          this.$emit('imageSelectChanged', this.imageSrc);

          if (this.$root.debug) { console.log( this.imageSrc + ' = this.imageSrc - modal button clicked - resetting Transition Group Animation'); }

          /*  setting the router path */
          this.$router.replace({ path: '/personal', id: 'section-personal-work' });

        } else {

          showModal = true;
          eventBus.$emit('modalVisibility', showModal);

          this.imageSrc = this.id;

          this.$emit('imageSelectChanged', this.imageSrc);

          if (this.$root.debug) { console.log(this.imageSrc + ' = this.imageSrc - modal button clicked'); }
        }

      }

    }, // END exampleSelected

    getPic() {
      return require('assets/img/modal-buttons/' + this.id + '-01a-sm.jpg');
    }, // END getPic

    getPicAlt() {
      return require('assets/img/modal-buttons/' + this.id + '-01b-sm.jpg');
    }, // END getPicAlt

    getHover() {
      return require('assets/img/modal-buttons/modal-button-graphic-square-light.gif');
    }, // END getHover

  }, // END methods
  mounted() {


  }, // END mounted
  destroyed() {

    // turn off binding to prevent multiple instances
    this.$off('imageSelectChanged');

    /* this.$off('modalVisibility'); */

  }, // END destroyed

}; // END export default

</script>


<style scoped>


</style>
