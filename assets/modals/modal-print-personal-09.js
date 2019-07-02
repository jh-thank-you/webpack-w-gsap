let slides = [
  {
    navID:     'slide-09',
    client:    '',
    alt:       'towel-hanging-pencil',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-personal-towel-hanging-pencil.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
