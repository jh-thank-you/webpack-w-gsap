let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Florida International Museum, War and Peace Ad 01',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-fl-intl-museum-01c.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Florida International Museum, Great Navy Ad 02',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-fl-intl-museum-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Florida International Museum, Royal Family Ad 03',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-fl-intl-museum-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'Florida International Museum, So Great Ad 04',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-fl-intl-museum-04.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
