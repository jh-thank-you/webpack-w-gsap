let slides = [
  {
    navID:     'slide-07',
    client:    '',
    alt:       'graphite-feet-drawing',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-personal-feet-drawing.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
