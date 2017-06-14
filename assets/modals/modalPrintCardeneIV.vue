<template>

  <div slot="modalPrintAdvil1a">    
      <nav class="modalNav">
          <ul>
              <li><a href="#slide-1" class="modal-nav-link">&nbsp;</a></li>
              <li><a href="#slide-2" class="modal-nav-link">&nbsp;</a></li>
              <li><a href="#slide-3" class="modal-nav-link">&nbsp;</a></li>
              <li><a href="#slide-4" class="modal-nav-link">&nbsp;</a></li>
          </ul>
      </nav>

      <div class="slides-container">
          <div class="slide" ref="slide1" id="slide-1">
              <div class="centered" id="print-advil-1">
                  <!-- Empty Div for boxFrame Overlay Clone -->
                  <img src="~assets/img/modalPrintAdvil1c.jpg" alt="Advil Blah Blah Blah Ad">
                  <!-- Will Fade On Scroll -->
              </div>
          </div>

          <div class="slide" ref="slide2" id="slide-2">
              <div class="centered" id="print-advil-2">
                  <img src="~assets/img/modalPrintAdvil2c.jpg" alt="Advil Beep Beep Honk Ad">
              </div>
          </div>

          <div class="slide" ref="slide3" id="slide-3">
              <div class="centered" id="print-advil-3">
                  <img src="~assets/img/modalPrintAdvil3c.jpg" alt="Advil Waaah Waaa Waaah Ad">
              </div>
          </div>

          <div class="slide" ref="slide4" id="slide-4">
              <div class="centered modalDescription">
                  <h1 class="handwritten">Cardene I.V.</h1>
                  <p>COPY TO COME - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <a href="">test link</a></p>
              </div>
          </div>
      </div>
  </div>

</template>


<script>
  export default {

    methods: {

    //   goto(refName) {
    //     var element = this.$refs[refName];
    //   console.log(element);
    //   var top = element.offsetTop;

    //   window.scrollTo(0, top);

    //   }, // END goto


    // }, // END methods
    // mounted() {

      

    }, // END mounted

  }; // END export default

</script>



<style>
  


</style>