<template>
    
    <div id="hero-wrap">

         <div class="current-animation"></div>

    </div>

</template>

<script>
  export default {

    data() {
      return {
        heroSrc: '',
      }
    }, // END data
    computed() {


    },// END computed
    created() {



    }, // END created
    destroyed() {


    }, // END destroyed
    methods: {


    }, // END methods
    mounted() {


    }, // END mounted
     watch: {


    },

  }; // END export default

</script>



<style scoped>



/* Tried Pseudo CSS element and Multiple Images to cleanup file build */
/* 
.nav-print,
.hero-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  border: solid 5px orange;
  overflow: hidden;
  padding: 0;
  margin: 0 auto;
}


.nav-print:before {
  content: "";
  position: absolute;
  width: 150%;
  height: 150%;
  left: -25%;
  top:  -25%;
  z-index: -1;
  background: url('~img/marker-pad-btm.png') center center no-repeat;
  background-size: contain;
  transform: rotate(90deg);
  border: solid 1px red;
    padding: 0;
  margin: 0 auto;
}
*/

.section-print,
.section-video,
.section-outdoor,
.section-online {
  position: relative;
  display: block;
  cursor: pointer;
  width: 65vw;
  max-width: 800px;
  height: 48vw;
  max-height: 600px;
  margin: 0 auto;
  margin-top: 2em;
  margin-bottom: 2em;
  border: solid 1px red;
}

.section-print {
  background-image: url('~img/marker-pad-btm.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.section-print > .current-animation {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('~img/nav-print-hero-animation.gif');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  mix-blend-mode: multiply;
  opacity: .70;
  overflow: visible;
}

.section-video {
  background-image: url('~img/envelope-5x7.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.section-video > .current-animation {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('~img/nav-video-hero-animation.gif');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  mix-blend-mode: multiply;
  opacity: .70;
}

.section-outdoor {
  background-image: url('~img/napkin.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.section-outdoor > .current-animation {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('~img/nav-outdoor-hero-animation.gif');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  mix-blend-mode: multiply;
  opacity: .70;
}

.section-online {
  background-image: url('~img/graph-paper.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.section-online > .current-animation {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('~img/nav-online-hero-animation.gif');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  mix-blend-mode: multiply;
  opacity: .70;
}


</style>