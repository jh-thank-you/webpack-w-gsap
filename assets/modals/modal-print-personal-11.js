let slides = [
  {
    navID:     'slide-11',
    client:    '',
    alt:       'glasses-and-reflection-pencil',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-personal-glasses-and-reflection-pencil.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
