<template>

  <div id="contact-prefs-tab"> <!-- START contact-prefs -->

      <div class="inner-tab-wrap"> <!-- START Inner Contact Pref Wrap -->
        <div class="tab-title">
          <span class="tab-bkg"><h4 class="handwritten">Preferences / Contact</h4></span>
        </div>

        <div class="scroll-area"> <!-- START scroll-area -->

          <div id="preferences-form" class="row"> <!-- START preferences-form -->
        
            <fieldset id="pref-checkbox-container">

              <legend class="float-left">
                  <h4 id="which-industry" class="handwritten">Select Which Industries To View</h4>
                
                <div id="default-settings" class="float-right">
                  <button id="default-selects" data-filter=".default-select" class="pref-button">Default</button>

                  <button id="select-all" data-filter="*" class="pref-button">Select All</button>
                </div>
              </legend>

              <label for="automotive"><input id="automotive" data-filter=".automotive" type="checkbox" class="industry" value="1"> Automotive</label>
              <br>
              <p>will eventually be filled by Vue sector in sectors</p>



            </fieldset>
          </div> <!-- END preferences-form -->

          <div class="row contact-info">
    
          </div>


          <div class="row contact-info">

          </div>

          <div class="end-spacer"><!-- Empty Spacer Div for Scroll --></div>

        </div> <!-- END scroll-area -->

      </div> <!-- END inner-tab-wrap -->
  </div> <!-- END contact-prefs -->    

</template>


<script>
	export default {


	}; // END export default

</script>



<style scoped>



</style>