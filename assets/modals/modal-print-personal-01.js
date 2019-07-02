let slides = [
  {
    navID:     'slide-01',
    client:    '',
    alt:       'female-nude-ink-conte-crayon',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-personal-female-nude-ink-conte-crayon.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
