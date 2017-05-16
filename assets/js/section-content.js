// ==================================================================
// ============== Section Content Javascript v00.53.75 ==============
// ==================================================================

/* NOTES

  - Working on Login Modal - 
  SOLVED - Login Launching Client Work Overlay
  SOLVED - ISSUE - it will only cycle through once-
                    Solved by changing  'passwordModal.remove();' to '$(".password-modal").remove();'
 
                    - Not Sure why this works since passwordModal was declared as a global var.
*/


"use strict";

//  Modal Vars   =============================================================================
var vw = $(window).width();
var vh = $(window).height();

// var clientLabel = $(".clientLabel");

var body = $("body");

var boxFrame = $(".boxFrame");
var boxFrameOuter = $(".boxFrameOuter");

var closeModal = $("#closeModal");

var overlay = $("<div class='overlay'></div>");
var overlayDiv = $(".overlay");
var passwordModal = $(".password-modal");
var passwordOverlay = $("<div class='row password-modal'><form id='passwordForm' class='row column log-in-form'><label>Password<input type='text' name='password' placeholder='Password'></label><label class='passwordResponse'>&nbsp;</label><p><input id='submitButton' type='submit' class='button expanded'></p><p><a type='cancel' class='button expanded cancelMe'>Cancel</a></p></form></div>");

var clone = null;
var target = null;
var currentOriginalLocation = null;
var tlUserSelected = null; // Modal TweenMax Timeline
var cloned1 = $("#cloned1");
var currentSelect = null;
var paddingCalc = null;
var cloneW = null;
var cloneH = null;
var cloneVwPercent = null;
var rectWidth = null;

var $this = $(this);

var closeSectionModal = $(".closeSectionModal");



// START - Password Overlay =================================================================

function cancelMeButton() {

  $(".cancelMe").on('click', function() {
    TweenMax.set($(".password-modal"), { opacity: 1, display: "block" });
    TweenMax.to($(".password-modal"), 0.25, { 
      opacity: 0, 
      display: "none",
      onComplete: function() {

        // Clear previous password typed in
        $("#passwordForm")[0].reset();

        // Remove Method Removes the Elements and all Events Bound to the Elements
        $(".password-modal").remove();

      }, // END onComplete
    }, 0); // END password-modal tween
    
  }); // END cancelMe on Click

}; // END cancelMeButton


// START - passwordSubmit ============================
function passwordSubmit(myBoxFrame) {
  var myBoxFrameID = myBoxFrame;
  // If you are reading this, I hope you enjoy the work.
  // You should just contact me; I would be glad to share the work and the stories behind it.
  var passwordCode = 'BigPharma';
  var passwordEntered = null;
  console.log(myBoxFrameID + " = myBoxFrame");

  $("#passwordForm").on('submit', function( event ) {
     passwordEntered = $("input[name='password']").val();

     if (passwordCode === passwordEntered) {

      // Clear previous password typed in
      $("#passwordForm")[0].reset();

      // Correct Password - Close Password Overlay 
      // and Open Cleint Work Overlay
      event.preventDefault();

      $(".cancelMe").click();
        setTimeout(function() {
             
            // Open the Client Work Modal
            openTile(myBoxFrame);
      
          }, 500); // END Timeout
      
     } else if (passwordCode !== passwordEntered) {
      // Wrong Password Display a message
      event.preventDefault();

      // Clear previous password typed in
      $("#passwordForm")[0].reset();
      
      // selecting a random array item
      var selectResponse = [
                          'No soup for you!', 
                          "I'm a Toys'R'Us Kid too!", 
                          "These aren't the droids you're looking for... Move along.", 
                          'Hhhhhmmmm Salty!',
                          'Again? Really?!',
                          'Shall we play a game?',
                          'Great googly moogly Batman!',
                          "Dammit Jim I'm a Doctor!",
                          "A mind is a terrible thing to waste.",
                          "Reach out and touch someone.",
                          "Help! I've fallen and can't get up.",
                          "When will there be a sidekick uprising?",
                          "Help me Obi-Wan Kenobi, you're my only hope.",
                          "Just do it!",
                          "Think Different.",
                          "Enjoy the ride.",
                          "Isn't that special.",
                          "Meteor S**t!",
                          "To infinity and beyond!",
                          "Wrecked 'em? Damn near killed 'em!",
                          "I am afraid I can't do that Dave.",
                          "This sucks worse than that time I went to that museum.",
                          "I owe it all to little chocolate donuts.",
                          'I need more cowbell!',
                          "One tube is all you need.",
                          "My brother might be coming the other way!",
                          "Thank you for taking Johnny Cab."
                          ];// END Array
      var pickAResponse = function () {
      var currentResponse = selectResponse[Math.floor(Math.random() * 27)];
      return currentResponse;
      };

      $( ".passwordResponse" ).text( pickAResponse ).show().stop().css( 'opacity', '1').fadeTo( 5000, 0, function() { 
         $( ".passwordResponse" ).html( "&nbsp;" ).show().css( 'opacity', '1');

      }); // END Password Text Response
     } // END If Else
  }); // END Submit

}; // END passwordSubmit ===================


// START - boxFrameClick ===================
function boxFrameClick() {

  $(".boxFrame").on('click', function() {
  var myBoxFrame = $(this);

    if ($(this).hasClass("locked")) {
      
      // Open the Login Modal
      body.append(passwordOverlay);
      
      $(".password-modal").ready(function () {
        TweenMax.set($(".password-modal"), { opacity: 0, display: "none" });
        TweenMax.to($(".password-modal"), 0.25, { opacity: 1, display: "block" }, 0);

            // Bind click to Cancel Button
            cancelMeButton();

            // Bind Password Function
            passwordSubmit(myBoxFrame);
        
       }); // END  READY

    } else {
      // Open the Client Work Modal
      openTile(myBoxFrame);
    }
}); // END boxFrame on Click

}; // END boxFrameClick

// Call and Bind Click Event
boxFrameClick();

// END - Password Overlay =================================================================




// START - Add media query   =================================================================
// Gets passed into timeline function

 var mediaQueryClone = window.matchMedia("(max-width: 40em)");
    if (mediaQueryClone.matches) {      
      paddingCalc = vw * .28; // matches CSS padding for other slide heros
      cloneW = vw - paddingCalc;

      if (cloneW > 1150) {
        cloneW = 1150;
      } // END if

      cloneH = cloneW * .65;
    };

 var mediaQueryClone = window.matchMedia("(min-width: 40.063em) and (max-width: 90em)");
    if (mediaQueryClone.matches) {      
      paddingCalc = vw * .20; // matches CSS padding for other slide heros
      cloneW = vw - paddingCalc;

      if (cloneW > 1150) {
        cloneW = 1150;
      } // END if

      cloneH = cloneW * .65;
    };

 var mediaQueryClone = window.matchMedia("(min-width: 90.063em)");
    if (mediaQueryClone.matches) {      
      paddingCalc = vw * 0; // matches CSS padding for other slide heros
      cloneW = vw - paddingCalc;

      if (cloneW > 1150) {
        cloneW = 1150;
      } // END if

      cloneH = cloneW * .65;
    }; // END - Add media query



$(window).resize(resizeModal);

function resizeModal(resizeModal) {

  // START - Refresh media query   =================================================================
  // Gets passed into timeline function

   var mediaQueryClone = window.matchMedia("(max-width: 40em)");
    if (mediaQueryClone.matches) {      
      paddingCalc = vw * .28; // matches CSS padding for other slide heros
      cloneW = vw - paddingCalc;

      if (cloneW > 1150) {
        cloneW = 1150;
      } // END if

      cloneH = cloneW * .65;
    };

 var mediaQueryClone = window.matchMedia("(min-width: 40.063em) and (max-width: 90em)");
    if (mediaQueryClone.matches) {      
      paddingCalc = vw * .20; // matches CSS padding for other slide heros
      cloneW = vw - paddingCalc;

      if (cloneW > 1150) {
        cloneW = 1150;
      } // END if

      cloneH = cloneW * .65;
    };

 var mediaQueryClone = window.matchMedia("(min-width: 90.063em)");
    if (mediaQueryClone.matches) {      
      paddingCalc = vw * 0; // matches CSS padding for other slide heros
      cloneW = vw - paddingCalc;

      if (cloneW > 1150) {
        cloneW = 1150;
      } // END if

      cloneH = cloneW * .65;
    }; // END - Refresh media query


  // If there's a timeline, rebuild it
   if (tlUserSelected) {
      var progress = tlUserSelected.progress();
      var reversed = tlUserSelected.reversed();
      tlUserSelected.kill();
      // tlUserSelected.seek(0).clear();
      buildTimelineUserSelected(progress, reversed);
    } // END if

}; // END Window Resize

 


// ===========================================================================
// ======== Client Work Selectd by User Modal Timeline and Functions =========
// ===========================================================================


function buildTimelineUserSelected(progress, reversed) { 

var vw = $(window).width();
var vh = $(window).height();

var rect = getPosition(target[0]);
var clientLabel = $(".clone").find("span");
var innerFrame1 = $(".clone").find(".innerFrame1");
var innerFrame2 = $(".clone").find(".innerFrame2");
var innerFrame3 = $(".clone").find(".innerFrame3");
var fadeMe = $(".clone").find(".fadeMe");
var boxFrame = $(".clone").find(".boxFrame");
var cloneScale = vw / rectWidth;
// var cloneScale = (vw * cloneVw) / rectWidth;
// console.log( cloneScale );

  var centerX = vw * .5;
  var centerY = vh * .5;

  var cloneWpx = cloneW + "px";
  var cloneHpx = cloneH + "px";
  
  var x = (vw  - cloneW) / 2;
  var y = (vh  - cloneH) / 2;


// For Some reason 
// matrix( x scale, y skew, x skew, y scale, x translation (position), y translation (position) )
var matrixValue = "matrix(1,0,0,1," + x + "," + y + ")";

var image1a = "url(./assets/img/" + currentSelect + "1a.jpg)";
var image1b = "url(./assets/img/" + currentSelect + "1b.jpg)";
var image1c = "url(./assets/img/" + currentSelect + "1c.jpg)";
 

  TweenMax.set(closeSectionModal, { className: "closeSectionModal", opacity: 1, display: "block" });
  TweenMax.set(overlay, { opacity: 0, display: "none" });
  TweenMax.set(boxFrame, { cursor: "default" });
  TweenMax.set(innerFrame1, { opacity: 1, display: "block" });
  TweenMax.set(innerFrame2, { 
    opacity: 0, 
    display: "block",
    cursor: "default",
    backgroundImage: image1b,
    backgroundSize: "contain",
    backgroundRepeat: "no-repreat",
    backgroundPosition: "center center"  
  });

  TweenMax.set(innerFrame3, { 
    opacity: 0, 
    display: "block",
    cursor: "default",
    backgroundImage: image1c,
    backgroundSize: "contain",
    backgroundRepeat: "no-repreat",
    backgroundPosition: "center center"  
  });

  TweenMax.set(clientLabel, { opacity: 1, display: "block" });

  TweenMax.set(clone, rect, { // clearProps: "transformMatrix",
                              opacity: 1, 
                              display:"block", 
                              className: "clone centered", 
                              padding: "0"
                            });

  tlUserSelected = new TimelineMax({ onReverseComplete: removeClone })
          
          .to(overlay, .75, { opacity: 1, 
                              display: "block",
                               onStart: function() {
                                  // Do Something
                                     
                               }, // END onStart
                               onComplete: function() {
                                  // Do Something

                               }, // END onComplete
                               onReverseComplete: function () {
                                  // Remove Clone From DOM
                                  clone.remove();
                               
                                  TweenMax.set(boxFrame, { cursor: "pointer" });

                                }, // END onReverseComplete
                            }, 0, "overlay") // END overlay
    
          .to(clone, 1.0, { top: 0,
                            left: 0, 
                            transform:  matrixValue, 
                            width: cloneWpx,
                            height: "auto", 
                            autoRound: false,
                            maxWidth: "1150px",
                            clearProps: "transformMatrix",
                            onStart : function() {
                                // Do Something
                                fadeMe.attr("src", "assets/img/" + currentSelect + "1a.jpg");
                                $(".clone").find(".innerFrame3").removeClass('hoverMe');

                            }, // END onStart
                            onComplete: function() {
                              // Do Something

                            }, // END onComplete
                           }, .25, "lineArt") // END Clone

          .to(innerFrame1, 0.25, { opacity: 0, display: "none" }, "overlay-=0.75")
          .to(clientLabel, 0.75, { opacity: 0, display: "none" }, 0)
          .to(boxFrame, 0.5, { padding: "0" }, 0)
          .to(closeSectionModal, 0.5, { className: "closeSectionModal", opacity: 1, display: "block" }, .25)
          .to(innerFrame2, 1.0, { opacity: 1 }, "lineArt+=0.25")
          .to(innerFrame3, 1.0, { opacity: 1 }, "-=0.15")
          .to(innerFrame2, .003, { opacity: 0 }, "-=0")
          .to(fadeMe, .003, { opacity: 0 }, "-=0")
          .progress(progress || 0)
          .reversed(reversed || false);


} // END - buildTimelineUserSelected




function openTile(myBoxFrame) {
  target = myBoxFrame;
  // clone = target.clone(false);
  currentSelect = target.attr('id');

  // Set Var number for Clone ID formual
  var cloneCount = 1;

  // Clone and set Unique ID so it is valid HTML with no conflicts
  clone = target.clone(false).prop('id', currentSelect + cloneCount++ ).removeClass().addClass('clone');

  // (false) is no Deep Clone.
  // if you want Deep Clone (which clones styles ID and Class names 
  // as well as and all child elements) set to (true) and 
  // IMPORTANT!!! If you use the Deep Clone method make sure ID of the cloned element is unique!

  var urlLink = "assets/modals/" + currentSelect + ".html";

  body.append(overlay).promise().done(function() {

    // Load external HTML page via AJAX method         
    $.ajax({
        async: true,
        type:'get',
        url:urlLink,
        cache:false,
        dataType: 'html',
        start: function()
        {

        }, // END start
        success:function(data)
        {

            $('.overlay').html(data).promise().done(function() {
                
              // Create Clone and put inside Slide Container
              $('#slide-1').append(clone);


          }); // END Promise
        }, // END success
        complete: function() {
                  // Make Clone Div Unique ID
                  $(".clone").find(".boxFrame").attr("id", "clone-1");

                  // Load Script
                    $.getScript( "./assets/js-vendor/ScrollToPlugin.min.js" ).promise().done(function() {
                    // Load Script
                      $.getScript( "./assets/js-vendor/custom-modal.js" ).promise().done(function() {
                      // Load Script

                          console.log( "customModal JS loaded" );

                      }); // END Promise
                        console.log( "ScrollToPlugin loaded" );
                    }); // END Promise
        } // END Complete
    }); // END AJAX
  }); // END Promise Append Overlay
  
  // ORIGINAL body.append(clone) Location in Code - Trying to sort Z-Index Issue 
  // by moveing the clone into the Overlay AJAX Success (See the above AJAX Code) vs the Body Element
  // - Note this solves the Z-Index Issue for the Slide Nav and Modal Close Button
  // -  BUT the Tween Return Path is Off - Need to figure out why.
  // body.append(clone);


  // After the AJAX DOM Elements are created build the timeline and pass the 
  // currentSelect var (for the dynamic url background images) to the timeline
  buildTimelineUserSelected(currentSelect);


    if ($('.clone').length > 1) {
      clone.remove();
    } // END if

} // END openTile


function closeTile() {
  // tlUserSelected.reverse();
  TweenMax.to(overlay, 0.75, { opacity: 0, 
                               display: "none",
                               onComplete: function () {
                              // Remove Clone From DOM
                              $(".clone").remove();
                              removeClone();

                              //kill only tweens, but not delayedCalls or timelines
                              TweenMax.killAll(false, true, false, false);
                              
                              //kill only delayedCalls
                              TweenMax.killAll(false, false, true, false);

                            }, // END onReverseComplete
                 }, 0);

  console.log( "Closed Overlay" );
} // END closeTile


function removeClone() {

  overlay.detach();

  // Due to the way the timelines are redrawn with window resize
  // if a user resizes the window and clicks/selects a boxFrame,
  // which launches the overlay Modal timeline, it results in
  // the clone being created several times. The following
  // if/else loop cycles through and clears them out. Also,
  // for some reason the reverse onComplete doesn't change back 
  // the opacity for the labels, it should ve set back to 1 (100%).
  if (clone.length > 1) {
    clone.remove();
  } else {
    clone = null;

    // Clear and Kill Timeline
    tlUserSelected.clear();
    tlUserSelected.kill();
  }

  tlUserSelected = null;
  target = null;
  // myBoxFrame = null;

} // END removeClone


function getPosition(element) {

  var body = document.body;
  var root = document.documentElement;
  var rect = element.getBoundingClientRect();
  rectWidth = rect.width;

  var scrollTop = window.pageYOffset || root.scrollTop || body.scrollTop || 0;
  var scrollLeft = window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

  var clientTop = root.clientTop || body.clientTop || 0;
  var clientLeft = root.clientLeft || body.clientLeft || 0;

  return {
    top: Math.round(rect.top + scrollTop - clientTop),
    left: Math.round(rect.left + scrollLeft - clientLeft),
    height: rect.height,
    width: rect.width
  };
} // END getPosition


