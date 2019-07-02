let slides = [
  {
    navID:     'slide-02',
    client:    '',
    alt:       'male-nude-charcoal',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-personal-male-nude-charcoal.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
