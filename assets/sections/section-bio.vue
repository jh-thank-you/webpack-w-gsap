<template>

<div :id="id" class="section-wrap texture-paper-bkg">

  <transition name="slide-up" mode="out-in">

    <div v-cloak v-if="sectionActive" :key="this.id" id="section-content" class="justify-content handwritten">

      <div id="section-content-inner-wrap" class="section-content-inner-wrap flex-container">

              <button-close-section-raster></button-close-section-raster>

                  <div id="preferences-form" class="row"> <!-- START preferences-form -->
                    <div class="form-section">
                      <legend><h4 class="handwritten">Contact Info</h4></legend>
                      <p>Jim Hainis | Art Director | <a href="tel:973-415-8869">973.415.8869</a> |<a href="mailto:jim@hainis.net?Subject=We%20want%20to%20hire%20you%21"> jim@hainis.net</a></p>

                      <div>
                        <div class="linkedin-icon" onclick=" window.open('http://www.linkedin.com/pub/jim-hainis/3/9a5/185','_blank')"></div>

                        <div class="instagram-icon" onclick=" window.open('https://www.instagram.com/hainisad/','_blank')"></div>

                        <div class="twitter-icon" onclick=" window.open('https://twitter.com/hainis9','_blank')"></div>

                        <div class="vimeo-icon" onclick=" window.open('https://vimeo.com/user7076658','_blank')"></div>
                      </div>
                    </div>

                    <div class="form-section">
                      <legend><h4 class="handwritten review-baseline">About</h4></legend>
                      <p class="review">I’m a creative type – art direction.</p>

                      <p class="review">I’ve been lucky to work with some exceptional people doing what I love.</p>

                      <p class="review">I have worked at many of the top advertising agencies; DDB, Ogilvy and Kirshenbaum &#38; Bond to name a few. I have had the privilege of working on some of the world’s most recognized brands. That said, I am also lucky to have helped a number of small businesses and nonprofits over the years.</p>

                      <p class="review">I try to give back to the community by doing volunteer work, serving as an Executive Director at a nonprofit helping families in New Jersey.</p>
                    </div>

                    <div class="form-section">
                      <legend><h4 class="handwritten review-baseline">Reviews</h4></legend>
                      <p class="review">Years ago I had an opportunity to work with an incredible group of Marines while creating advertising for the Armed Forces. Each possessed a quiet deep-rooted sense of confidence, a “can do” attitude and a mindset that obstacles can never ever get the best of them. I hadn’t thought about those guys until I met Jim. He’s cut from the same cloth: is a quintessential team player, loves a creative challenge, is multi-talented with a heart of gold. If the Advertising business owned the phrase “We are looking for a few good men”, Jim would be the poster child.</p>

                      <div class="review-author"><p><a href="https://www.linkedin.com/in/glennbatkin/" target="_blank"> Glenn Batkin &#124; Creative Director <div class="review-logo"></div></a></p></div>
                    </div>

                    <hr>

                    <div class="form-section">
                      <p class="review">Jim is a diligent and thoughtful creative who can work conceptually and strategically with a strong sense of design. He also possesses the technical know-how to effectively and efficiently produce client work under tight budgets and deadlines.</p>

                      <p class="review">Dependable and easy to work with, Jim's smart and steady personality is a keen addition to any team and flexible enough to be thrown into the most heated of projects.</p>

                      <p class="review">I like working with the guy and am more than happy to recommend Jim!</p>

                      <div class="review-author"><p><a href="https://www.linkedin.com/in/bob-zeltmann-990ab13/" target="_blank"> Bob Zeltmann &#124; Publicis VP, Director of Design <div class="review-logo"></div></a></p></div>
                    </div>

                    <hr>

                    <div class="form-section">
                      <p class="review">Jim is a talented, creative, and focused individual that has delivered exceptional results no matter what project or challenge has been presented to him. Whether it be a project needing a great concept, email design, ad design, trade show booth design, or acting on my behalf as the Mally Brand Steward, Jim delivers a quality concept and design that is perfect for our ever growing brand. He has proven himself in all aspects of art and creative direction. He has been working directly with me to build our Brand presence on all fronts and is a trusted and valued creative partner for the past 7 years. He has never missed a deadline and has delivered great work on every project.</p>

                      <div class="review-author"><p><a href="https://www.linkedin.com/in/phil-bickett-16937420/" target="_blank"> Phil Bickett &#124; Mally Beauty EVP/Creative Director <div class="review-logo"></div></a></p></div>
                    </div>

                    <hr>

                    <div class="form-section">
                      <p class="review">Jim is a black belt martial arts guy that brings serious kung fu as an art director, creative director and designer. Every time I've needed him, whether it's for big campaign concepting, designing a new look and feel for a brand, and everything in between, Jim delivers at the highest possible level. His taste is impeccable, his breadth of aesthetics is amazing, and his conceptual thinking is non-stop. Jim has an amazing eye for everything -- photography, typography, palette, composition, and an amazing brain for ideas.</p>

                      <p class="review">When people work with Jim they're thrilled, kinda blown away, and whatever they're doing is successful. An extra bonus with Jim is once you've gotten to the finish line: totally production-ready process. He will bring a blank slate to a gorgeous, smart idea, execution, pool it out, and take it all the way through to production. 100% start-to-finish excellence is an accurate, not in the slightest bit exaggerated summary of what it's like to work with Jim.</p>

                      <div class="review-author"><p><a href="https://www.linkedin.com/in/tcm1348083/" target="_blank"> Tomas Mendez &#124; Dell-EMC Creative Content Director <div class="review-logo"></div></a></p></div>
                    </div>

                    <hr>

                    <div class="form-section">
                      <p class="review">I think it shows a lot of courage when a young art director sees you seriously unhappy about a project and steps in and not only says "how can they help" once... but three times.</p>

                      <p class="review">You stop and suddenly realize they are genuine and turn out to be part of the solution in a difficult moment. Meet Jim. A man with a large heart and a great soul. A man who cares about the work and those participating in it. A man who adds true value to the work and the working environment.</p>

                      <p class="review">Thank you Jim.</p>

                      <p class="review">Thank "you" for what you did for me.</p>

                      <p class="review">For what you did for many others at Ogilvy.</p>

                      <div class="review-author"><p><a href="https://www.linkedin.com/in/woodpeter1/" target="_blank"> Peter Wood  &#124; Ogilvy Executive Creative Director <div class="review-logo"></div></a></p></div>
                    </div>

                    <hr>

                    <div class="end-spacer"><!-- Empty Spacer Div for Scroll --></div>

                  </div> <!-- END preferences-form -->
        </div>
      </div>
  </transition>
</div>

</template>


<script>

import buttonCloseSectionRaster from 'components/button-close-section-raster.vue';

export default {

  components: {

    buttonCloseSectionRaster,

  }, // END components
  // passing in ID data from nav-button to hero-image through vue-router 
  // needs to be passed here in the parent level vs at the hero-image child level
  props: [ 'id' ],// END props
  data() {
    return {

      showModal:     false,
      sectionActive: false,
    };
  }, // END data
  created() {


  }, // END created
  mounted() {


    window.addEventListener('resize', this.resize);

    this.sectionActive = true;


  }, // END mounted
  methods: {


  }, // END methods
  beforeDestroy() {

    window.removeEventListener('resize', this.resize);

  }, // END destroyed

}; // END export default

</script>


<style scoped>

/* legal notice in boxframe */

.legal-block {
  width: 100%;
  height: auto;
  cursor: default;
  margin: 0 auto;
}

.legal-copy {
  font-size: .75em !important;
  font-weight: normal;
  font-variant: normal;
  font-stretch: normal;
  line-height: 1.25;
  max-width: 100vw;
  height: 100%;
  margin: 0 auto;
  padding: 0 0 0 0;
  text-align: center;
  color: black;
}

  /* hero animation sprite */

  .outer-sprite-container {
    display: flex;
  }

  #current-sprite-image {
    position: absolute;
    display: block;
    flex-grow: 1;
    top: 50%;
    left:50%;
    width: 65vw;
    height: 65vh;
    max-width: 65vw;
    max-height: 65vh;
    transform: translate(-50%, -50%);
  }

  #the-canvas {
    position: relative;
    display: block;
    top: 50%;
    left: 50%;
    max-width: 65vw;
    max-height: 65vh;
    transform: translate(-50%, -50%);
  }

  /* slideme in or out - modal-button */

  .slideme-enter {
    opacity: 0;
    width: 0;
    /* height: 0; */
  }

  .slideme-enter-active {
    transition: all .35s ease-in;
  }


  @media all and (min-width: 801px) {
    .slideme-enter-to {
      /* Vue JS Default is opacity: 1; */
      width: 32%;
      /* height: 100%; */
    }
  }

  @media all and (min-width: 501px) and (max-width: 800px) {
    .slideme-enter-to {
      /* Vue JS Default is opacity: 1; */
      width: 49%;
      /* height: 100%; */
    }
  }

  @media all and (max-width: 500px) {
    .slideme-enter-to {
      /* Vue JS Default is opacity: 1; */
      width: 100%;
      /* height: 100%; */
    }
  }


  @media all and (min-width: 801px) {
    .slideme-leave {
      /* Vue JS Default is opacity: 1; */
      width: 32%;
      /* height: 100%; */
    }
  }

  @media all and (min-width: 501px) and (max-width: 800px) {
    .slideme-leave {
      /* Vue JS Default is opacity: 1; */
      width: 49%;
      /* height: 100%; */
    }
  }

  @media all and (max-width: 500px) {
    .slideme-leave {
      /* Vue JS Default is opacity: 1; */
      width: 100%;
      /* height: 100%; */
    }
  }

  .slideme-leave-active {
    transition: all .35s ease-out;
    /* position: absolute; */
    /* would normally result in a smoother
    animation but div size is based on a
    percentage when position is absolute
    it scales too large */
  }

  .slideme-leave-to {
    opacity: 0;
    width: 0;
    /* height: 0; */
  }

  .slideme-move {
    transition: transform .35s;
  }


/* fade and scale in or out small nav */

.slide-up-enter {
  opacity: 1;
  /* transform: scale(0.5,0.5); */
}

.slide-up-enter-active {
  transition: all 1.4s ease;
  animation: slidein 1.4s ease-out forwards;
}

.slide-up-enter-to {
  /* transform: scale(1,1); */
}

.slide-up-leave {
  /* transform: scale(1,1); */
}

.slide-up-leave-active {
  transition: all .35s ease;
  animation: slideout 1.4s ease-out forwards;
}

.slide-up-leave-to {
  opacity: 1;
  /* transform: scale(0.5,0.5); */
}

@keyframes slidein {
    0% {
        height: 0;
    }
    50% {
        height: 0;
    }
    100% {
        height: 100%;
    }
}

/* slideout never reached since v-if is only triggered once on mount */

@keyframes slideout {
    0% {
        height: 100%;
    }
    33% {
        height: 100%;
    }
    66% {
        height: 100%;
    }
    100% {
        height: 100%;
    }
}

.fade-me {
  /* Important Set the value you want to end up with here.  After the animation completes the keyframe goes back to the initial value */
  opacity: 0;
  animation: fade-it .35s ease-out;
}

@keyframes fade-it {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
}

</style>
