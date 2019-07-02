let slides = [
  {
    navID:     'slide-08',
    client:    '',
    alt:       'human-eye-oil-pastel',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-personal-human-eye-oil-pastel.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
