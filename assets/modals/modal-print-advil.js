let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Advil Ad Blah Blah Blah',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-advil-01c.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Advil Beep Beep Honk Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-advil-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Advil Beep Beep Honk Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-advil-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
