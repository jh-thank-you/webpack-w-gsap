<template>

  <div :id="id" class="section-wrap texture-paper-bkg">

    <transition name="fade" mode="out-in">

      <div :key="this.id" id="section-content" class="justify-content handwritten">

        <div id="section-content-inner-wrap" class="section-content-inner-wrap flex-container">

                <button-close-section-raster></button-close-section-raster>

              <div id="preferences-form" class="row"> <!-- START preferences-form -->

                <fieldset id="pref-checkbox-container">

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

              <div class="end-spacer"><!-- Empty Spacer Div for Scroll --></div>


          </div>
        </div>
    </transition>
  </div>

</template>


<script>

import { eventBus } from 'assets/main.js';

import buttonCloseSectionRaster from 'components/button-close-section-raster.vue';


// https://codepen.io/jh-thank-you/pen/rwGOzZ
// localStorage persistence
var STORAGE_KEY = 'myselects-vuejs-2.0';
var mySelectsStorage = {
  fetch: function () {
    var myselects = JSON.parse(localStorage.getItem(STORAGE_KEY) || '["beauty","branding","cleaning","fashion","financial","fitness","healthcare","pharma","publicservice","sports","technology","tourism","transportation"]');
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
  components: {

    buttonCloseSectionRaster,
  },
  props: [ 'id' ],// END props
  data() {
    return {

      // showTab:      true,
      // showOverlay:  false,
      // tabHidden:    false,
      currentClass: '',
      // selected: [], // using localStorage now
      selected:     mySelectsStorage.fetch(),
      selectsArray: [

        {id: 'automotive', name: 'Automotive', class: 'industry', default: false},

        {id: 'beauty', name: 'Beauty', class: 'industry', default: true},

        {id: 'branding', name: 'Branding', class: 'industry', default: true},

        {id: 'btob', name: 'B to B', class: 'industry', default: false},

        {id: 'cleaning', name: 'Cleaning Services', class: 'industry', default: true},

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

    eventBus.$on('tabVisibility', () => {
      // eslint 'tabHidden' is defined but never used
      // eventBus.$on('tabVisibility', (tabHidden) => {

      var myClass = this.currentClass;

      if (myClass == 'is-hidden') {
        this.currentClass = '';
        return this.currentClass;
      } else {
        this.currentClass = 'is-active';
        return this.currentClass;
      }
    }); // END eventBus

  }, // END created
  mounted() {

    mySelectsStorage.save(this.selected);

    var myClass = this.currentClass;

    if (myClass == 'is-hidden') {
      this.currentClass = '';
      return this.currentClass;
    } else {
      this.currentClass = 'is-active';
      return this.currentClass;
    }

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


  }, // END methods
  // watch selected change for localStorage persistence
}; // END export default

</script>


<style scoped>


.texture-paper-bkg,
.close-button {
  opacity: 0;
  transition: opacity .35s ease-in-out;
}

.texture-paper-bkg,
.close-button {
  opacity: 1;
}

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
    opacity: 0;
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
    opacity: 0;
    height: 48px;
    max-height: 48px;
  }

      @media all and (max-width: 400px) {
        #contact-prefs-tab.is-active,
        .updown-enter-to,
        .updown-leave {
          height: 100vh;
          max-height: 100vh;
          }
        }

      @media all and (min-width: 401px) and (max-width: 800px) {
        #contact-prefs-tab.is-active,
        .updown-enter-to,
        .updown-leave {
          height: 100vh;
          max-height: 100vh;
          }
        }

      @media all and (min-width: 801px) {
        #contact-prefs-tab.is-active,
        .updown-enter-to,
        .updown-leave {
            height: 100vh;
            max-height: 100vh;
          }
        }

</style>
