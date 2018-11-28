let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'NY Blood Center Blood Drive Baby Ad 01',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-ny-blood-center-01c.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'NY Blood Center Blood Drive Mother Ad 02',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-ny-blood-center-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'NY Blood Center Blood Drive Father Ad 03',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-ny-blood-center-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'NY Blood Center Blood Drive T-Shirt 04',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-ny-blood-center-04.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
