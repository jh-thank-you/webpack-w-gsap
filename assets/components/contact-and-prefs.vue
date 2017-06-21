<template>

  <div>

  <transition name="fade">
  <div v-if="showOverlay" @click="showOverlay = !showOverlay; moveTab();" id="modal-overlay"></div>
  </transition>

   <transition name="updown"> 
  <div v-if="showTab" @click="showOverlay = !showOverlay; moveTab();" :key="moveTab" id="contact-prefs-tab"> <!-- START contact-prefs -->

      <div class="inner-tab-wrap"> <!-- START Inner Contact Pref Wrap -->
        
        <div class="tab-title">
          <span class="tab-bkg"><h4 id="pref-contact-title" class="handwritten">Preferences / Contact</h4></span>
        </div>

        <div class="scroll-area"> <!-- START scroll-area -->

          <div id="preferences-form" class="row"> <!-- START preferences-form -->
        
            <fieldset id="pref-checkbox-container justify-content">

              <legend id="industry-settings">
                  <h4 id="which-industry" class="handwritten">Select Which Industries To View</h4>
                
                <div id="default-settings">
                  <button id="default-selects" data-filter=".default-select" class="pref-button button-selected">Default</button>

                  <button id="select-all" data-filter="*" class="pref-button">Select All</button>
                </div>
              </legend>

              <div class="checkbox-wrap">
              <label :for="select.id" v-for="select in selects" v-bind:key="select.id"><input :id="select.id" :sector="select.id" :class="select.class" type="checkbox">{{ select.name }}</label>
              </div>

            </fieldset>
          </div> <!-- END preferences-form -->

          <div class="form-section">
            <legend><h4 class="handwritten">Contact Me</h4></legend>
            <p>Jim Hainis | 973.441.5204 |<a href="mailto:jh@jimhainis.com"> jh@jimhainis.com</a></p>
            <p class="note">Note: this number has a<a href="http://heartmartialarts.org/" target="_blank"> H.E.A.R.T. Martial Arts </a>voicemail.</p>
          </div>

          <div class="form-section">
            <legend><h4 class="handwritten">Thank You GreenSock Team!</h4></legend>
            <p>To say you ROCK!!! would be selling you short. Thanks again gents for all your help.<a href="https://greensock.com/" target="_blank"> GreenSock.com</a></p>
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

	export default {

    // props: [ 'showModal' ], // END props
    data() {
      return {

        showTab: true,
        showOverlay: false,
        tabHidden: false,
        selects: [ 

            {id: 'automotive', name: 'Automotive', class: 'industry'},

            {id: 'beauty', name: 'Beauty', class: 'industry default-select-pref-tab'},

            {id: 'branding', name: 'Branding', class: 'industry default-select-pref-tab'},

            {id: 'btob', name: 'B to B', class: 'industry'},

            {id: 'communication', name: 'Communication', class: 'industry'},

            {id: 'fashion', name: 'Fashion', class: 'industry default-select-pref-tab'},

            {id: 'financial', name: 'Financial', class: 'industry default-select-pref-tab'},

            {id: 'fitness', name: 'Fitness', class: 'industry default-select-pref-tab'},

            {id: 'fragrance', name: 'Fragrance', class: 'industry'},

            {id: 'healthcare', name: 'Healthcare', class: 'industry default-select-pref-tab'},

            {id: 'hotel', name: 'Hotel', class: 'industry'},

            {id: 'insurance', name: 'Insurance', class: 'industry'},

            {id: 'cleaning', name: 'Cleaning Services', class: 'industry'},

            {id: 'nutrition', name: 'Nutrition', class: 'industry'},

            {id: 'pharma', name: 'Pharma', class: 'industry default-select-pref-tab'},

            {id: 'publicservice', name: 'P. S. A.', class: 'industry default-select-pref-tab'},

            {id: 'realestate', name: 'Real Estate', class: 'industry'},

            {id: 'shipping', name: 'Shipping', class: 'industry'},

            {id: 'sports', name: 'Sports', class: 'industry default-select-pref-tab'},

            {id: 'technology', name: 'Technology', class: 'industry default-select-pref-tab'},

            {id: 'tourism', name: 'Tourism', class: 'industry default-select-pref-tab'},

            {id: 'transportation', name: 'Transportation', class: 'industry default-select-pref-tab'},

          ], // END selects

      } // END return

    }, // END data
    created() {

      eventBus.$on('tabVisibility', (tabHidden) => {
        var tabIsVisible = !tabHidden;
        console.log(tabIsVisible + ' = tab visibility - contacts & prefs');
        document.getElementById("contact-prefs-tab").classList.toggle("is-hidden");
      });

    }, // END created
    methods: {

     moveTab() {
      document.getElementById("contact-prefs-tab").classList.toggle("is-active");
     },

    }, // END methods
    destroyed() {
        // turn off binding to prevent multiple instances
        this.$off('tabVisibility');
        
    }, // END destroyed

	}; // END export default

</script>



<style scoped>
    #contact-prefs-tab {
        height: 48px;
        transition: height 500ms ease-in-out;
    }

    #contact-prefs-tab.is-active {
        height: 65vh;
    }

     #contact-prefs-tab.is-hidden {
        height: 0;
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
    height: 48px;
    max-height: 48px;
  }

  .updown-enter-active {
    transition: all .35s ease-in-out;
  }

   .updown-enter-to {
    height: 65vh;
    max-height: 65vh;
  }

  .updown-leave {
    height: 65vh;
    max-height: 65vh;
  }

  .updown-leave-active {
    transition: all .35s ease-in-out;
  }

  .updown-leave-to {
    height: 48px;
    max-height: 48px;
  }

</style>