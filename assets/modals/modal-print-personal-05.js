let slides = [
  {
    navID:     'slide-05',
    client:    '',
    alt:       'tasha-portrait',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-personal-tasha-portrait.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
