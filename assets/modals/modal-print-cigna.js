let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'CIGNA Retirement Ad 01',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-cigna-01c.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'CIGNA Benefits Ad 02',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-cigna-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'CIGNA Health Care Ad 03',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-cigna-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'CIGNA Employee Benefits Ad 04',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-cigna-04.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
