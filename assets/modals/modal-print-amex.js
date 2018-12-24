let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'American Express Ad 01',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-amex-01c.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'American Express Ad 02',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-amex-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'American Express Ad 03',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-amex-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'American Express Ad 04',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-amex-04.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
