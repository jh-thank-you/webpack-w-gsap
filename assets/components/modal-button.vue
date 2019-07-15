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

import { mapActions} from 'vuex';


export default {

  props: [ 'id', 'alt', 'client', 'sector', 'access', 'showModal' ], // END props
  data() {
    return {

      classArray:         currentClass,
      currentSectionName: '',

    };
  }, // END data
  computed: {


  }, // END computed
  created() {


  }, // END created
  methods: {

    ...mapActions(['updateImageSrc', 'openModal']),

    currentClassArray() {

      currentClass = [ 'inner-frame-3', 'hover-me', this.access ];
      return currentClass;

    }, // END currentClassArray

    exampleSelected() {

      var access = this.access;
      // var showModal = false;

      var currentModalID = this.id;

      // Send ID to Vuex Store
      this.updateImageSrc(currentModalID);

      if (access == 'locked') {

        // set showModal False in Vuex Store
        this.$store.dispatch('closeModal');

        var showPasswordModal = true;
        eventBus.$emit('passwordStatus', showPasswordModal);

      } else {

        // this.imageSrc = this.id;

        if (currentModalID == 'modal-print-personal') {

          // set showModal False in Vuex Store
          this.$store.dispatch('closeModal');

          if (this.$root.debug) { console.log( this.id + ' = this.imageSrc - modal button clicked - resetting Transition Group Animation'); }

          /*  setting the router path */
          this.$router.replace({ path: '/personal', id: 'section-personal-work' });

        } else {

          // set showModal True in Vuex Store
          this.$store.dispatch('openModal');

          if (this.$root.debug) { console.log(this.id + ' = this.imageSrc - modal button clicked'); }

          if (this.$root.debug) { console.log(this.$store.state.imageSrc + ' =  = new route'); }

          if (this.$route.path.includes('/work'))
          {
            this.currentSectionName = 'modal-slideshow-work';

          } else if (this.$route.path.includes('/pharma')) {

            this.currentSectionName = 'modal-slideshow-pharma';

          } else if (this.$route.path.includes('/personal')) {

            this.currentSectionName = 'modal-slideshow-personal';

          } else if (this.$route.path.includes('/archive')) {

            this.currentSectionName = 'modal-slideshow-archive';
          }

          this.$router.push({
            name:   this.currentSectionName,
            params: {
              slideshowId: this.id,
            },
          });

        } // END Else

      } // END Else

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
    // this.$off('imageSelectChanged');

    /* this.$off('modalVisibility'); */

  }, // END destroyed

}; // END export default

</script>


<style scoped>


</style>
