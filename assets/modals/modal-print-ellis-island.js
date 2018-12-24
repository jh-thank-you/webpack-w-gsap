let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Ellis Island America the Beautiful Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-ellis-island-01c.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Ellis Island Inspector Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-ellis-island-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Ellis Island Silent Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-ellis-island-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'Ellis Island RFP Cover and Intro',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-ellis-island-04.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
