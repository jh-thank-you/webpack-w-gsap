let slides = [
  {
    navID:     'slide-10',
    client:    '',
    alt:       'wine-glasses-scratchboard',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-personal-wine-glasses-scratchboard.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
