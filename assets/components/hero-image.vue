<template>
    
  <div :class="classArray">

       <div :class="currentAnimation"></div>

  </div>

</template>

<script>

  import { eventBus } from 'assets/main.js';

  let currentClass = ['hero-image'];

  let currentAnimation = null;

  export default {

    props: [ 'heroSrc' ],// END props
    data() {
      return {
        classArray: currentClass,
        currentAnimation: currentAnimation,
      }
    }, // END data
    created() {
      
      // use $once instead of $on - so the event bus does not compound listening
      eventBus.$once('heroImageSelected', (herosource) => {
        this.heroSrc = herosource;
        
        currentClass = [ `${this.heroSrc}`, 'hero-image' ];

        currentAnimation = ( this.heroSrc + '-hero-animation');

        return currentClass, currentAnimation;

        getHero(currentClass, currentAnimation);

      }); // END eventBus

    }, // END created
    destroyed() {

      // May not need to use $off - using $once on eventBus listener
      // turn off binding to prevent multiple instances
      // eventBus.$off('heroImageSelected', this.heroSrc);

    }, // END destroyed
    methods: {


    }, // END methods
    mounted() {


    }, // END mounted

  }; // END export default

</script>



<style scoped>

.nav-print {
  background-image: url('~img/marker-pad-btm.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.nav-print-hero-animation {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('~img/nav-print-hero-animation.gif');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.nav-video {
  background-image: url('~img/envelope-5x7.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.nav-video-hero-animation {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('~img/nav-video-hero-animation.gif');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.nav-outdoor {
  background-image: url('~img/napkin.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.nav-outdoor-hero-animation {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('~img/nav-outdoor-hero-animation.gif');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.nav-online {
  background-image: url('~img/graph-paper.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.nav-online-hero-animation {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('~img/nav-online-hero-animation.gif');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}


</style>