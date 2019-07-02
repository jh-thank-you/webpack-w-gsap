let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Lucha Underground - Poster 01',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-lucha-underground-01.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Lucha Underground - Poster 02',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-lucha-underground-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Lucha Underground - Poster 03',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-lucha-underground-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'Lucha Underground - Poster 04',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-lucha-underground-04.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
