let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Mally Beauty - Ulta Gondola Display Ads',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-outdoor-mally-beauty-01c.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Mally Beauty - High Performance Beauty - Ulta Gondola Topper',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-outdoor-mally-beauty-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Mally Beauty - Lipstick and Must Have\'s - Ulta Gondola Shelves',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-outdoor-mally-beauty-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'Mally Beauty - Concealer - Ulta Gondola Shelf',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-outdoor-mally-beauty-04.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-5',
    client:    '',
    alt:       'Mally Beauty - Ulta Gondola Display',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-outdoor-mally-beauty-05.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-6',
    client:    'Mally Beauty',
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
