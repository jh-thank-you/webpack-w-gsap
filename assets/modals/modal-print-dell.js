let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Dell Seven Deadly Sins Free Standing Insert - FSI',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-dell-01c.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Dell Seven Deadly Sins Free Standing Insert - Front Cover',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-dell-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Dell Seven Deadly Sins Free Standing Insert - Inside Spread',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-dell-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'Dell Seven Deadly Sins Free Standing Insert - Back Cover',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-dell-04.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
