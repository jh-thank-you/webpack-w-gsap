let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Amtrak Service Promise Ad 01',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-amtrak-01c.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Amtrak Service Promise Ad 01',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-amtrak-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
