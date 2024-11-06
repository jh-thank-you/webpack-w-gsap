// START HTML5 Video 

var video,
    textTrack,
    chaptersList,
    htmlTracks,
    trackStatusesDiv,
    subtitles,
    activeChapter,
    chaperTitle;

window.onload = function () 
{
  video             = document.querySelector('.video');
  textTracks        = video.textTracks[0];
  chaptersList      = document.querySelector('.chapters-list');
  subtitles         = document.querySelector('.subtitles');
  htmlTracks        = document.querySelectorAll("track");
  trackStatusesDiv  = document.querySelector(".trackStatusesDiv");
  chaperTitle       = document.querySelector(".chaper-title");
  textTracks.mode = 'hidden';
  
  //make sure track have been loaded
  for (var i=0; i < htmlTracks.length; i++)
  {
     loadTrack(htmlTracks[i],readContent);
  }
    
}//END onload

function readContent(track) {
  //console.log('readContenet');
  var cues = track.cues;
  console.log(cues);
  if (track.kind == "chapters")
  // {
  //   // do something
  // }
  
  if (track.kind == "subtitles")
  {
    
    for (var j = 0; j < cues.length; j++)
    {
      var currentCue = cues[j];
      addCueListeners(currentCue);
    }
  }

} //END readContent


function loadTrack (htmlTrack,callback){
  var currentTextTrack = htmlTrack.track;
  if (htmlTrack.readyState == 2)
    {
      currentTextTrack.mode = "hidden";
      callback(currentTextTrack);
    }
  else 
    {
      currentTextTrack.mode = "hidden";
      htmlTrack.addEventListener ('load', function(e) {callback(currentTextTrack)});
    }
}


function jumpTo(time) {
  console.log("jumpTo")
  video.currentTime = time;
  video.play();
}

// END HTML5 Video 



// START Fade In Follow Button on Scroll 

var observer = new IntersectionObserver(function(entries) { console.log(entries);
  if(entries[0]['isIntersecting'] === true) {
    if(entries[0]['intersectionRatio'] === 1) {
      // document.querySelector("#message").textContent = 'Target is fully visible in screen';
      document.getElementById("followBtnFixed").classList.remove('showme');
      // document.getElementById("target-container").classList.remove('hideme');
    }
    else if(entries[0]['intersectionRatio'] > 0.5) {
      // document.querySelector("#message").textContent = 'More than 50% of target is visible in screen';
      document.getElementById("followBtnFixed").classList.add('showme');
      // document.getElementById("target-container").classList.add('hideme');
     } else {
      // document.querySelector("#message").textContent = 'Less than 50% of target is visible in screen';
      document.getElementById("followBtnFixed").classList.add('showme');
      }
  } else {
    // document.querySelector("#message").textContent = 'Target is not visible in screen';
    document.getElementById("followBtnFixed").classList.add('showme');
  }
}, { threshold: [0, 0.5, 1] });

observer.observe(document.querySelector("#target-container"));

// END Fade In Follow Button on Scroll 
