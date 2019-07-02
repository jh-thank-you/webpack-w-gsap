let slides = [
  {
    navID:     'slide-03',
    client:    '',
    alt:       'female-nude-charcoal-c',
    showImage: true,
    src:       require('assets/img/modal-slides/personal-female-nude-charcoal-c.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
