<template>

  <div>

  <transition name="fade">
  <div v-if="showOverlay" @click="showOverlay = !showOverlay, moveTab()" id="modal-overlay"></div>
  </transition>

   <transition name="updown">
  <div v-if="showTab" :key="moveTab" id="contact-prefs-tab" :class="currentClass"> <!-- START contact-prefs -->

      <div class="inner-tab-wrap"> <!-- START Inner Contact Pref Wrap -->

        <div @click="showOverlay = !showOverlay, moveTab()" class="tab-title">
          <span class="tab-bkg"><h4 id="pref-contact-title" class="handwritten">Preferences / Contact</h4></span>
        </div>

        <div class="scroll-area"> <!-- START scroll-area -->

          <div id="preferences-form" class="row"> <!-- START preferences-form -->

            <fieldset id="pref-checkbox-container justify-content">

              <legend id="industry-settings">
                  <h4 id="which-industry" class="handwritten">Select Which Industries To View</h4>

                <div id="default-settings">

                  <label class="pref-button"><input type="checkbox" v-model="defaultChecked"><span>Default</span></label>

                 <label class="pref-button"><input type="checkbox" v-model="selectAll"><span>Select All</span></label>

                </div>
              </legend>

              <div class="checkbox-wrap">

              <label :for="select.id" v-for="select in selectsArray" :key="select.id"><input :value="select.id" v-model="selected" :id="select.id" :sector="select.id" :class="select.class" :default="select.default" type="checkbox">{{ select.name }}</label>
              </div>

            </fieldset>
          </div> <!-- END preferences-form -->

          <div class="form-section">
            <legend><h4 class="handwritten">Contact Me</h4></legend>
            <p>Jim Hainis | 973.415.8869 |<a href="mailto:jh@jimhainis.com"> jh@jimhainis.com</a></p>
            <p class="note">Note: this number has a<a href="http://heartmartialarts.org/" target="_blank"> H.E.A.R.T. Martial Arts </a>voicemail.</p>
          </div>

          <div class="form-section">
            <legend><h4 class="handwritten">Thanks GreenSock Team!</h4></legend>
            <p>To say you ROCK!!! would be selling you short. Thanks again gents for all your help. An extra shout-out to Blake and Dipscom!<a href="https://greensock.com/" target="_blank"> GreenSock.com</a></p>
          </div>

          <div class="form-section">
            <legend><h4 class="handwritten">Thanks Sven Vilters!</h4></legend>
            <p>I can't thank you enough for all your time, patience and guidance.<a href="https://github.com/svevil" target="_blank"> GitHub &#124; Sven Vilters</a></p>
          </div>

          <div class="form-section">
            <legend><h4 class="handwritten">Thanks Juho Vepsalainen!</h4></legend>
            <p>Your kindness and willingness to help others is only surpassed by your webpack knowledge. Thanks again for sharing your webpack book with the community.<a href="https://survivejs.com/webpack/" target="_blank"> SurviveJs &#124; Webpack from Apprentice to Master</a></p>
          </div>

          <div class="form-section">
            <legend><h4 class="handwritten">Thanks Discord and Gitter Vue Communities!</h4></legend>
            <p>An extra thank you to everyone who took the time to answer my questions.<a href="https://discordapp.com/" target="_blank"> Discord &#124; </a><a href="https://gitter.im/vuejs/vue" target="_blank"> GITTER &#124; Vue</a></p>
          </div>

          <div class="end-spacer"><!-- Empty Spacer Div for Scroll --></div>

        </div> <!-- END scroll-area -->

      </div> <!-- END inner-tab-wrap -->
  </div> <!-- END contact-prefs -->
  </transition>
  </div>

</template>


<script>

import { eventBus } from 'assets/main.js';

// https://codepen.io/jh-thank-you/pen/rwGOzZ
// localStorage persistence
var STORAGE_KEY = 'myselects-vuejs-2.0';
var mySelectsStorage = {
  fetch: function () {
    var myselects = JSON.parse(localStorage.getItem(STORAGE_KEY) || '["beauty","branding","fashion","financial","fitness","healthcare","pharma","publicservice","sports","technology","tourism","transportation"]');
    // myselects.forEach(function (myselect, index) {
    //   // myselect.id = index
    // })
    mySelectsStorage.uid = myselects.length;
    return myselects;
  },
  save: function (myselects) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(myselects));
  },
};

export default {

  // props: [ 'showModal' ], // END props
  data() {
    return {

      showTab:      true,
      showOverlay:  false,
      tabHidden:    false,
      currentClass: '',
      // selected: [], // using localStorage now
      selected:     mySelectsStorage.fetch(),
      selectsArray: [

        {id: 'automotive', name: 'Automotive', class: 'industry', default: false},

        {id: 'beauty', name: 'Beauty', class: 'industry', default: true},

        {id: 'branding', name: 'Branding', class: 'industry', default: true},

        {id: 'btob', name: 'B to B', class: 'industry', default: false},

        {id: 'cleaning', name: 'Cleaning Services', class: 'industry', default: false},

        {id: 'communication', name: 'Communication', class: 'industry', default: false},

        {id: 'fashion', name: 'Fashion', class: 'industry', default: true},

        {id: 'financial', name: 'Financial', class: 'industry', default: true},

        {id: 'fitness', name: 'Fitness', class: 'industry', default: true},

        {id: 'fragrance', name: 'Fragrance', class: 'industry', default: false},

        {id: 'healthcare', name: 'Healthcare', class: 'industry', default: true},

        {id: 'hotel', name: 'Hotel', class: 'industry', default: false},

        {id: 'insurance', name: 'Insurance', class: 'industry', default: false},

        {id: 'nutrition', name: 'Nutrition', class: 'industry', default: false},

        {id: 'pharma', name: 'Pharma', class: 'industry', default: true},

        {id: 'publicservice', name: 'P. S. A.', class: 'industry', default: true},

        {id: 'realestate', name: 'Real Estate', class: 'industry', default: false},

        {id: 'shipping', name: 'Shipping', class: 'industry', default: false},

        {id: 'sports', name: 'Sports', class: 'industry', default: true},

        {id: 'technology', name: 'Technology', class: 'industry', default: true},

        {id: 'tourism', name: 'Tourism', class: 'industry', default: true},

        {id: 'transportation', name: 'Transportation', class: 'industry', default: true},

      ], // END selects

    }; // END return

  }, // END data
  created() {

    if (this.$root.debug) { console.log('created - contacts-and-prefs - eventBus $on sendSelected'); }
    eventBus.$on('sendSelected', this.emitSelected);


  }, // END created
  mounted() {

    mySelectsStorage.save(this.selected);

  }, // END mounted
  computed: {

    defaultChecked: {
      get () {
        let defaults = this.selectsArray.filter(item => item.default).map(item => item.id);
        const hasAllItems = (baseArr, haystack) => haystack.every(item => baseArr.includes(item));
        const hasSameItems = (baseArr, haystack) => hasAllItems(baseArr, haystack) && hasAllItems(haystack, baseArr);
        return hasSameItems(this.selected, defaults);
      },
      set (value) {
        this.selected = [];

        if (value) {
          this.selectsArray.forEach((select) => {
            if (select.default) {
              this.selected.push(select.id);
              var checkboxValues = this.selected;
              if (this.$root.debug) { console.log(checkboxValues + ' = default select value'); }
            }
          });
        }
      },
    }, // END defaultChecked

    selectAll: {
      get () {
        return this.selected.length === this.selectsArray.length;
      },
      set (value) {
        this.selected = [];

        if (value) {
          this.selectsArray.forEach((select) => {
            this.selected.push(select.id);
            var checkboxValues = this.selected;
            if (this.$root.debug) { console.log(checkboxValues + ' = select all value'); }
          });
        }
      },
    }, // END selectAll


  }, // END computed
  watch: {
    selected: {
      handler: function (myselects) {
        mySelectsStorage.save(myselects);
        eventBus.$emit('selectedChanged', this.selected); // or eventBus.$emit('selectedChanged', myselects)
      },
      deep: false, // this.selected is a normal array (not multi dimensional) so no need for deep: true
    },
  }, // END watch
  methods: {

    emitSelected() {
      eventBus.$emit('selectedChanged', this.selected);
      // eventBus.$off('sendSelected', this.emitSelected) // after initally sending once the watcher will do the rest, so remove this listener for performance
      if (this.$root.debug) { console.log('this.selected data requested - emitSelected contacts-and-prefs'); }
    }, // END emitSelected

    moveTab() {
      document.getElementById('contact-prefs-tab').classList.toggle('is-active');
    }, // END moveTab

  }, // END methods
  // watch selected change for localStorage persistence
  destroyed() {

    // turn off binding to prevent multiple instances
    eventBus.$off('selectedChanged');

    // turn off binding to prevent multiple instances
    // Also NOT turning this off caused getExamples(), 
    // found in section.vue, to run in an infinite loop.  
    eventBus.$off('sendSelected');

  }, // END destroyed
}; // END export default

</script>


<style scoped>

/* fade in or out overlay */

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .35s ease-in-out;
  }

  .fade-enter-to {
    /* Vue JS Default is opacity: 1; */
  }

  .fade-leave {
    /* Vue JS Default is opacity: 1; */
  }

  .fade-leave-active {
    transition: opacity .35s ease-in-out;
  }

   .fade-leave-to {
    opacity: 0;
  }

/* move tab up or down */

 .updown-enter {
    height: 48px;
    max-height: 48px;
  }

  .updown-enter-active {
    transition: all .35s ease-in-out;
  }

  .updown-leave-active {
    transition: all .35s ease-in-out;
  }

  .updown-leave-to {
    height: 48px;
    max-height: 48px;
  }

      @media all and (max-width: 400px) {
        #contact-prefs-tab.is-active,
        .updown-enter-to,
        .updown-leave {
          height: 95vh;
          max-height: 95vh;
          }
        }

      @media all and (min-width: 401px) and (max-width: 800px) {
        #contact-prefs-tab.is-active,
        .updown-enter-to,
        .updown-leave {
          height: 95vh;
          max-height: 95vh;
          }
        }

      @media all and (min-width: 801px) {
        #contact-prefs-tab.is-active,
        .updown-enter-to,
        .updown-leave {
            height: 95vh;
            max-height: 95vh;
          }
        }

</style>
