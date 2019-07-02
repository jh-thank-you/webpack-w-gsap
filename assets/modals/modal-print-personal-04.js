let slides = [
  {
    navID:     'slide-04',
    client:    '',
    alt:       'female-nude-charcoal-b',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-personal-female-nude-charcoal-b.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
