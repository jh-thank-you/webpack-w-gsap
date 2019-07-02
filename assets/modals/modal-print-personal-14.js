let slides = [
  {
    navID:     'slide-14',
    client:    '',
    alt:       'metropolis-cover',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-personal-metropolis-cover.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
