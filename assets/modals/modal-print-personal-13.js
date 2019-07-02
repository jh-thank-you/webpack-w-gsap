let slides = [
  {
    navID:     'slide-13',
    client:    '',
    alt:       'cd-cover-design-triumph',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-personal-cd-cover-design-triumph-crop.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
