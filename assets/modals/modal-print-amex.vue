<template>

  <div slot> <!-- START slot -->

      <nav class="modal-nav">
          <ul>
              <li v-for="slide in slides" :key="slide.navID"><a :href="'#' + slide.navID" class="modal-nav-link">&nbsp;</a></li>
          </ul>
      </nav>

      <div class="slides-container"> <!-- START slides-container -->
          <div v-for="slide in slides" :key="slide.navID + '-div'" class="slide" :ref="slide.id" :id="slide.navID">
              <div class="centered">
                  <img v-if="slide.showImage" :src="slide.src" :alt:="slide.alt">
                  <div v-if="!slide.showImage" class="centered modalDescription">
                    <h1 class="handwritten">{{ slide.client }}</h1>
                    <p> {{ slide.pText }} </p>
                  </div>
              </div>
          </div>
      </div> <!-- END slides-container -->

  </div> <!-- END slot -->

</template>


<script>

export default {

  data() {
    return {
      props:  [ 'id' ], // END props
      client: 'Advil',
      slides: [
        {
          navID:     'slide-1',
          client:    '',
          alt:       'Amex Ad 01',
          src:       require('assets/img/modal-print-amex-1c.jpg'),
          link:      '',
          showImage: true,
          pText:     '',
        },
        {
          navID:     'slide-2',
          client:    '',
          alt:       'Amex Ad 02',
          src:       require('assets/img/modal-print-amex-2.jpg'),
          link:      '',
          showImage: true,
          pText:     '',
        },
        {
          navID:     'slide-3',
          client:    '',
          alt:       'Advil Beep Beep Honk Ad',
          src:       require('assets/img/modal-print-amex-3.jpg'),
          link:      '',
          showImage: true,
          pText:     '',
        },
        {
          navID:     'slide-4',
          client:    '',
          alt:       'mex Ad 04',
          src:       require('assets/img/modal-print-amex-4.jpg'),
          link:      '',
          showImage: true,
          pText:     '',
        },
        {
          navID:     'slide-5',
          client:    'American Express',
          alt:       '',
          src:       '',
          link:      '<a href=""> test link</a>',
          showImage: false,
          pText:     'COPY TO COME - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },


      ], // END slides

    }; // END return

  }, // END data
  methods: {


  }, // END methods
  mounted() {

  }, // END mounted

}; // END export default

</script>


<style>


</style>
