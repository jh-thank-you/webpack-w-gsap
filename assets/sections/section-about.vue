<template>

<div :id="id" class="section-wrap texture-paper-bkg">

  <transition name="slide-up" mode="out-in">

    <div v-cloak v-if="sectionActive" :key="this.id" id="section-content" class="justify-content handwritten">

      <div id="section-content-inner-wrap" class="section-content-inner-wrap flex-container">

              <button-close-section-raster></button-close-section-raster>

                  <div id="preferences-form" class="row"> <!-- START preferences-form -->
                    <div class="form-section">
                      <legend><h4 class="handwritten">Contact Info</h4></legend>
                      <p>Jim Hainis | Art Director | Creative Director | <a href="tel:973-415-8869">973.415.8869</a> |<a href="mailto:jim@hainis.net?Subject=We%20want%20to%20hire%20you%21"> jim@hainis.net</a></p>

                      <div>
                        <div class="linkedin-icon" onclick=" window.open('https://www.linkedin.com/pub/jim-hainis/3/9a5/185','_blank')"></div>

                        <div class="instagram-icon" onclick=" window.open('https://www.instagram.com/hainisad/','_blank')"></div>

                        <div class="twitter-icon" onclick=" window.open('https://twitter.com/hainis9','_blank')"></div>

                        <div class="vimeo-icon" onclick=" window.open('https://vimeo.com/user7076658','_blank')"></div>
                      </div>
                    </div>

                    <div class="form-section">
                      <legend><h4 class="handwritten review-baseline">About</h4></legend>
                      <p class="review">I am a listener, researcher, thinker, doer. That’s my creative process. And long after others might quit and go home I am still thinking, crafting, pushing things to the next level.</p>

                      <p class="review">Yes, I can design, art direct — but what I really am is a problem solver, an opportunity maker. I solve communication problems and create more opportunities for a product, service or brand.</p>

                      <p class="review">On the ad agency side I have worked my way up through the ranks to ACD; managing teams, timelines, deliverables, budgets and client expectations. I have worked for the Ogilvys and the Turfs of the world — from the Goliaths to the three person (or in my case one person) shops of the world.</p>

                      <p class="review">As a business owner and nonprofit founder I have partnered with C-level talent and community stakeholders alike to solve the problems at hand.</p>

                      <p class="review">From being Creative Director on the product launch for a multi-million dollar client — to helping a family of five fix their toilet when the slumlord refused to — I have been there to help.</p>

                      <p class="review">On a good day I solve my clients’ problems. On a great day I help make the world a better place.</p>

                      <legend><h4 class="handwritten review-baseline">Agency Experience</h4></legend>
                      <p class="review">•&nbsp;Ammirati&nbsp;Puris&nbsp;Lintas •&nbsp;BGB&nbsp;Group •&nbsp;The&nbsp;Cement&nbsp;Works •&nbsp;Cline&nbsp;Davis&nbsp;Mann •&nbsp;Cossette •&nbsp;DDB&nbsp;Needham •&nbsp;Donath&nbsp;Communications •&nbsp;Earle&nbsp;Palmer&nbsp;Brown •&nbsp;FCBCURE •&nbsp;Merkley&nbsp;+&nbsp;Partners •&nbsp;Kirshenbaum&nbsp;Bond&nbsp;+&nbsp;Partners •&nbsp;Lowe&nbsp;&#38;&nbsp;Partners •&nbsp;Messner •&nbsp;Ogilvy&nbsp;&#38;&nbsp;Mather •&nbsp;TURF</p>

                      <legend><h4 class="handwritten review-baseline">Client Experience</h4></legend>
                      <p class="review">•&nbsp;Aetna •&nbsp;Affinity&nbsp;Federal&nbsp;Credit&nbsp;Union •&nbsp;American&nbsp;Museum&nbsp;of&nbsp;Natural&nbsp;History •&nbsp;American&nbsp;Express •&nbsp;Amtrak •&nbsp;AstraZeneca •&nbsp;Bank&nbsp;of&nbsp;New&nbsp;York •&nbsp;Bayer •&nbsp;Burger&nbsp;King •&nbsp;CNN •&nbsp;Cardene&nbsp;I.V. •&nbsp;CIGNA •&nbsp;Cimzia •&nbsp;Cimzia&nbsp;RA •&nbsp;Compaq •&nbsp;Credit&nbsp;Suisse&nbsp;First&nbsp;Boston •&nbsp;Crohn’s&nbsp;&#38;&nbsp;Me •&nbsp;CSFBdirect •&nbsp;Dell •&nbsp;Disney •&nbsp;DLJdirect •&nbsp;ESPN •&nbsp;Fanta •&nbsp;Florida&nbsp;Aquarium •&nbsp;Florida&nbsp;International&nbsp;Museum •&nbsp;Florida&nbsp;State&nbsp;Lottery •&nbsp;Ginkoba •&nbsp;Ginsana •&nbsp;Goldman&nbsp;Sachs •&nbsp;GTE •&nbsp;H.E.A.R.T.&nbsp;Martial&nbsp;Arts •&nbsp;Hilton&nbsp;Hotels •&nbsp;HSBC •&nbsp;IBM •&nbsp;Jaguar •&nbsp;JPMorgan&nbsp;Chase •&nbsp;KFC •&nbsp;Kodak •&nbsp;KO&nbsp;Fightgear •&nbsp;Levemir •&nbsp;Lipitor •&nbsp;Mally&nbsp;Beauty •&nbsp;Mercedes&#8209;Benz •&nbsp;Motorola •&nbsp;Movantik •&nbsp;New&nbsp;York&nbsp;Blood&nbsp;Center •&nbsp;North&nbsp;Fork&nbsp;Bank •&nbsp;Partnership&nbsp;for&nbsp;Drug&nbsp;Free&nbsp;Florida •&nbsp;Partnership&nbsp;For&nbsp;Prescription&nbsp;Assistance •&nbsp;Ponds •&nbsp;Radio&nbsp;Advertising&nbsp;Bureau •&nbsp;Sheraton&nbsp;Hotels •&nbsp;St.&nbsp;Pete&#8209;Clearwater&nbsp;International&nbsp;Airport •&nbsp;St.&nbsp;Pete&#8209;Clearwater&nbsp;Tourism&nbsp;&#38;&nbsp;Trade •&nbsp;SkinFusion •&nbsp;Spiriva •&nbsp;The&nbsp;Sports&nbsp;Center&nbsp;at&nbsp;Chelsea&nbsp;Piers •&nbsp;TIAA-CREF •&nbsp;TradeStream •&nbsp;Vericiguat •&nbsp;Volvo •&nbsp;Waterford&nbsp;Crystal</p>
                    </div>

                    <div class="form-section">
                      <legend><h4 class="handwritten review-baseline">Reviews</h4></legend>
                      <p class="review">Years ago I had an opportunity to work with an incredible group of Marines while creating advertising for the Armed Forces. Each possessed a quiet deep-rooted sense of confidence, a “can do” attitude and a mindset that obstacles can never ever get the best of them. I hadn’t thought about those guys until I met Jim. He’s cut from the same cloth: is a quintessential team player, loves a creative challenge, is multi-talented with a heart of gold. If the Advertising business owned the phrase “We are looking for a few good men”, Jim would be the poster child.</p>

                      <div class="review-author"><p><a href="https://www.linkedin.com/in/glennbatkin/" target="_blank"> Glenn Batkin &#124; Creative Director</a></p></div>
                    </div>

                    <hr>

                    <div class="form-section">
                      <p class="review">Jim is a diligent and thoughtful creative who can work conceptually and strategically with a strong sense of design. He also possesses the technical know-how to effectively and efficiently produce client work under tight budgets and deadlines.</p>

                      <p class="review">Dependable and easy to work with, Jim's smart and steady personality is a keen addition to any team and flexible enough to be thrown into the most heated of projects.</p>

                      <p class="review">I like working with the guy and am more than happy to recommend Jim!</p>

                      <div class="review-author"><p><a href="https://www.linkedin.com/in/bob-zeltmann-990ab13/" target="_blank"> Bob Zeltmann &#124; Publicis VP, Director of Design</a></p></div>
                    </div>

                    <hr>

                    <div class="form-section">
                      <p class="review">Jim is a talented, creative, and focused individual that has delivered exceptional results no matter what project or challenge has been presented to him. Whether it be a project needing a great concept, email design, ad design, trade show booth design, or acting on my behalf as the Mally Brand Steward, Jim delivers a quality concept and design that is perfect for our ever growing brand. He has proven himself in all aspects of art and creative direction. He has been working directly with me to build our Brand presence on all fronts and is a trusted and valued creative partner for the past 7 years. He has never missed a deadline and has delivered great work on every project.</p>

                      <div class="review-author"><p><a href="https://www.linkedin.com/in/phil-bickett-16937420/" target="_blank"> Phil Bickett &#124; Mally Beauty EVP/Creative Director</a></p></div>
                    </div>

                    <hr>

                    <div class="form-section">
                      <p class="review">Jim is a black belt martial arts guy that brings serious kung fu as an art director, creative director and designer. Every time I've needed him, whether it's for big campaign concepting, designing a new look and feel for a brand, and everything in between, Jim delivers at the highest possible level. His taste is impeccable, his breadth of aesthetics is amazing, and his conceptual thinking is non-stop. Jim has an amazing eye for everything — photography, typography, palette, composition, and an amazing brain for ideas.</p>

                      <p class="review">When people work with Jim they're thrilled, kinda blown away, and whatever they're doing is successful. An extra bonus with Jim is once you've gotten to the finish line: totally production-ready process. He will bring a blank slate to a gorgeous, smart idea, execution, pool it out, and take it all the way through to production. 100% start-to-finish excellence is an accurate, not in the slightest bit exaggerated summary of what it's like to work with Jim.</p>

                      <div class="review-author"><p><a href="https://www.linkedin.com/in/tcm1348083/" target="_blank"> Tomas Mendez &#124; Dell-EMC Creative Content Director</a></p></div>
                    </div>

                    <hr>

                    <div class="form-section">
                      <p class="review">I think it shows a lot of courage when a young art director sees you seriously unhappy about a project and steps in and not only says "how can they help" once... but three times.</p>

                      <p class="review">You stop and suddenly realize they are genuine and turn out to be part of the solution in a difficult moment. Meet Jim. A man with a large heart and a great soul. A man who cares about the work and those participating in it. A man who adds true value to the work and the working environment.</p>

                      <p class="review">Thank you Jim.</p>

                      <p class="review">Thank "you" for what you did for me.</p>

                      <p class="review">For what you did for many others at Ogilvy.</p>

                      <div class="review-author"><p><a href="https://www.linkedin.com/in/woodpeter1/" target="_blank"> Peter Wood  &#124; Ogilvy Executive Creative Director</a></p></div>
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

import { wt } from 'widowtamer-npm';

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

    // Widowtamer settings
    wt.fix({
      elements: '.form-section legend h4',
      chars:    10,
      method:   'nbsp',
      event:    'resize',
    });

    wt.fix({
      elements: '.form-section legend h4',
      chars:    10,
      method:   'nbsp',
      event:    'orientationchange',
    });

    wt.fix({
      elements: '.form-section legend h4',
      chars:    10,
      method:   'nbsp',
      event:    'pageshow',
    });


    wt.fix({
      elements: '.review',
      chars:    10,
      method:   'padding-right',
      dir:      'pos',
      event:    'resize',
    });

    wt.fix({
      elements: '.review',
      chars:    10,
      method:   'padding-right',
      dir:      'pos',
      event:    'orientationchange',
    });

    wt.fix({
      elements: '.review',
      chars:    10,
      method:   'padding-right',
      dir:      'pos',
      event:    'pageshow',
    });


    wt.fix({
      elements: '.review-author p a',
      chars:    10,
      method:   'nbsp',
      event:    'resize',
    });

    wt.fix({
      elements: '.review-author p a',
      chars:    10,
      method:   'nbsp',
      event:    'orientationchange',
    });

    wt.fix({
      elements: '.review-author p a',
      chars:    10,
      method:   'nbsp',
      event:    'pageshow',
    });


  }, // END mounted
  methods: {


  }, // END methods
  beforeUpdate() {


  }, // END beforeUpdate
  beforeDestroy() {

    window.removeEventListener('resize', this.resize);

    window.removeEventListener('beforeunload', this.wt);
    window.removeEventListener('load', this.wt);
    window.removeEventListener('orientationchange', this.wt);
    window.removeEventListener('pageshow', this.wt);
    window.removeEventListener('unload', this.wt);
    window.removeEventListener('pageshow', this.wt);
    window.removeEventListener('popstate', this.wt);
    window.removeEventListener('unload', this.wt);

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
  }

  .slideme-enter-active {
    transition: all .35s ease-in;
  }


  @media all and (min-width: 801px) {
    .slideme-enter-to {
      width: 32%;
    }
  }

  @media all and (min-width: 501px) and (max-width: 800px) {
    .slideme-enter-to {
      width: 49%;
    }
  }

  @media all and (max-width: 500px) {
    .slideme-enter-to {
      width: 100%;
    }
  }


  @media all and (min-width: 801px) {
    .slideme-leave {
      width: 32%;
    }
  }

  @media all and (min-width: 501px) and (max-width: 800px) {
    .slideme-leave {
      width: 49%;
    }
  }

  @media all and (max-width: 500px) {
    .slideme-leave {
      width: 100%;
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
  }

  .slideme-move {
    transition: transform .35s;
  }


/* fade and scale in or out small nav */

.slide-up-enter {
  opacity: 1;
}

.slide-up-enter-active {
  transition: all 1.4s ease;
  animation: slidein 1.4s ease-out forwards;
}


.slide-up-leave-active {
  transition: all .35s ease;
  animation: slideout 1.4s ease-out forwards;
}

.slide-up-leave-to {
  opacity: 1;
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
