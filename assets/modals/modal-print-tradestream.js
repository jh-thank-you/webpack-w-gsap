let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Tradestream Sweater Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-tradestream-01c.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Tradestream Ice Cream Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-tradestream-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Tradestream Steel Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-tradestream-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
