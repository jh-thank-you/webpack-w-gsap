let slides = [
  {
    navID:     'slide-12',
    client:    '',
    alt:       'aids-poster',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-personal-aids-poster.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
