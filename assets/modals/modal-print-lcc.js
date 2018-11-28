let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Local Concerned Citizens - Your Money or Your Life Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-lcc-01c.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Local Concerned Citizens - Direct Mail',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-lcc-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },

]; // END slides

exports.sendSlideData = function() {
  return slides;
};
