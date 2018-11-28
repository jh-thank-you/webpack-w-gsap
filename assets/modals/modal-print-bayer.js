let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Bayer Ad 01',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-bayer-01c.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Bayer Ad 02',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-bayer-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Bayer Ad 03',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-bayer-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
