<template>

  <div id="contact-prefs" class="folder-tab"> <!-- START contact-prefs -->

      <div class="inner-contact-pref-wrap"> <!-- START Inner Contact Pref Wrap -->
        <div id="contact-prefs-tab" class="tab-title">
          <span id="contact-prefs-tab-center" class="tab-bkg"><h5 class="handwritten">Preferences / Contact</h5></span>
        </div>

        <div class="scroll-area"> <!-- START scroll-area -->

          <div id="preferences-form" class="row preferences form-section"> <!-- START preferences-form -->
        
            <fieldset id="pref-checkbox-container" class="large-12 columns">

              <legend class="button-group-iso filters-button-group-iso float-left">
                  <h4 id="which-industry" class="handwritten">Select Which Industries To View</h4>
                
                <div id="default-settings" class="float-right">
                  <button id="default-selects" data-filter=".default-select" class="pref-button">Default</button>

                  <button id="select-all" data-filter="*" class="pref-button">Select All</button>
                </div>
              </legend>

              <label for="automotive"><input id="automotive" data-filter=".automotive" type="checkbox" class="industry" value="1"> Automotive</label>

              <label for="beauty"><input id="beauty" data-filter=".beauty" type="checkbox" class="industry default-select-pref-tab" value="2"> Beauty</label>

              <label for="branding"><input id="branding" data-filter=".branding" type="checkbox" class="industry default-select-pref-tab" value="3"> Branding</label>

              <label for="btob"><input id="btob" data-filter=".btob" type="checkbox" class="industry" value="4"> B to B</label>

              <label for="communication"><input id="communication" data-filter=".communication" type="checkbox" class="industry" value="5"> Communication</label>

              <label for="fashion"><input id="fashion" data-filter=".fashion" type="checkbox" class="industry default-select-pref-tab" value="6"> Fashion</label>

              <label for="financial"><input id="financial" data-filter=".financial" type="checkbox" class="industry default-select-pref-tab" value="7"> Financial</label>

              <label for="fitness"><input id="fitness" data-filter=".fitness" type="checkbox" class="industry default-select-pref-tab" value="8"> Fitness</label>

              <label for="fragrance"><input id="fragrance" data-filter=".fragrance" type="checkbox" class="industry" value="9"> Fragrance</label>

              <label for="healthcare"><input id="healthcare" data-filter=".healthcare" type="checkbox" class="industry default-select-pref-tab" value="10"> Healthcare</label>

              <label for="hotel"><input id="hotel" data-filter=".hotel" type="checkbox" class="industry" value="11"> Hotel</label>

              <label for="insurance"><input id="insurance" data-filter=".insurance" type="checkbox" class="industry" value="12"> Insurance</label>

              <label for="laundry"><input id="laundry" data-filter=".laundry" type="checkbox" class="industry" value="13"> Laundry</label>

              <label for="nutrition"><input id="nutrition" data-filter=".nutrition" type="checkbox" class="industry" value="14"> Nutrition</label>

              <label for="pharma"><input id="pharma" data-filter=".pharma" type="checkbox" class="industry default-select-pref-tab" value="15"> Pharma</label>

              <label for="publicservice"><input id="publicservice" data-filter=".publicservice" type="checkbox" class="industry default-select-pref-tab" value="16"> P.S.A</label>

              <label for="realestate"><input id="realestate" data-filter=".realestate" type="checkbox" class="industry" value="17"> Real Estate</label>

              <label for="shipping"><input id="shipping" data-filter=".shipping" type="checkbox" class="industry" value="18"> Shipping</label>

              <label for="sports"><input id="sports" data-filter=".sports" type="checkbox" class="industry default-select-pref-tab" value="19"> Sports</label>

              <label for="technology"><input id="technology" data-filter=".technology" type="checkbox" class="industry default-select-pref-tab" value="20"> Technology</label>

              <label for="tourism"><input id="tourism" data-filter=".tourism" type="checkbox" class="industry default-select-pref-tab" value="21"> Tourism</label>

              <label for="transportation"><input id="transportation" data-filter=".transportation" type="checkbox" class="industry default-select-pref-tab" value="22"> Transportation</label>

            </fieldset>
          </div> <!-- END preferences-form -->

          <div id="contact-01" class="row contact-form form-section">
            <legend><h4 class="handwritten"> Contact Me</h4></legend>
            <p>Jim Hainis | 973.441.5204 |<a href="mailto:jh@jimhainis.com"> jh@jimhainis.com</a></p>
            <span id="note"><p class="note">(note: the phone has a <a href="http://www.heartmartialarts.org/" target="_blank"> H.E.A.R.T. Martial Arts</a> voicemail)</p></span>
          </div>


          <div id="contact-02" class="row contact-form form-section">
            <legend><h4 class="handwritten">Thank You GreenSock Team!</h4></legend>
            <p>To say you ROCK!!! would be selling you short. Thanks again gents for all your help.<a href="https://greensock.com/" target="_blank"> GreenSock.com</a></p>
          </div>

          <div class="end-spacer"><!-- Empty Spacer Div for Scroll --></div>

        </div> <!-- END scroll-area -->

      </div> <!-- END Inner Contact Pref Wrap -->
  </div> <!-- END contact-prefs -->    

</template>


<script>
	export default {


	}; // END export default

</script>



<style>
	


</style>