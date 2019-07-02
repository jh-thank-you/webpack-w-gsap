let slides = [
  {
    navID:     'slide-06',
    client:    '',
    alt:       'portrait-oil-pastel',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-personal-portrait-oil-pastel.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
