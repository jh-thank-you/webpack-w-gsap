let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Oyama Karate Tradition Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-oyama-karate-01c.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Oyama Karate Surrounded Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-oyama-karate-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Oyama Karate Family Pet Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-oyama-karate-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'Oyama Karate Yellow Page Ads',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-oyama-karate-04.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
