<template>

      <div> <!-- START - No class Div Vue Passes the Class to Containing Div -->
        <div class="center-slide">

            <div v-if="slide.showImage" :style="{ 'background-image': 'url(' + slide.src + ')' }" :alt:="slide.alt" class="slide-img-wrap">
            </div>

            <div v-if="!slide.showImage" class="center-slide modal-description">
              <h1 class="handwritten">{{ slide.client }}</h1>
              <p> {{ slide.pText }} </p>
            </div>

        </div>
      </div> <!-- END - No class Div Vue Passes the Class to Containing Div -->

</template>


<script>

export default {
  props: {
    slide: {
      required: true,
      type:     Object,
    },
  }, // END props
  data() {
    return {

    };
  }, // END data
  created() {


  }, // END created

}; // END export default

</script>


<style scoped>


</style>
