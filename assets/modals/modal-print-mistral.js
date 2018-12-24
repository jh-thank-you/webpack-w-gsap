let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Mistral UFO Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-mistral-01c.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Mistral Rocket Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-mistral-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Mistral Jet Plane Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-mistral-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'Mistral Bullet Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-mistral-04.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
