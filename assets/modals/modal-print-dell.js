let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Dell Seven Deadly Sins Free Standing Insert - FSI',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-dell-01c.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Dell Seven Deadly Sins Free Standing Insert - Front Cover',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-dell-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Dell Seven Deadly Sins Free Standing Insert - Inside Spread',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-dell-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'Dell Seven Deadly Sins Free Standing Insert - Back Cover',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-dell-04.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-5',
    client:    'Dell',
    alt:       '',
    showImage: false,
    src:       '',
    showVideo: false,
    videoSrc:  '',
    showText:  true,
    pText:     'COPY TO COME - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },


]; // END slides

exports.sendSlideData = function() {
  return slides;
};
