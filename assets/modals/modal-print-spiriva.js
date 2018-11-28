let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Spiriva Inforamtion Kit',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-spiriva-01c.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Spiriva - Front Cover',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-spiriva-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Spiriva - Inside Spread',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-spiriva-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
