let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Metro Card - Flatiron and Cheese of All Nations - Outdoor',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-mta-01c.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Metro Card - National Tennis Center and Tiffany\'s - Outdoor',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-mta-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Metro Card - The Pasta Shop and NYU Medical College - Outdoor',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-mta-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'Metro Card Paramount Hotel and The Museum of Natural History - Outdoor',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-mta-04.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-5',
    client:    'MTA / Metro Card',
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
