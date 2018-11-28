let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Bonita Bay Brochures',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-bonita-bay-01c.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Bonita Bay Brochures - Front Cover',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-bonita-bay-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Bonita Bay Brochures - Front Cover',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-bonita-bay-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'Bonita Bay Brochures - Front Cover',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-bonita-bay-04.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
