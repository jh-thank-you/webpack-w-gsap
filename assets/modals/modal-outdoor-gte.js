let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'GTE Outdoor Billboard - Wanted',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-outdoor-gte-01c.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'GTE Outdoor Billboard - Everything Must Go',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-outdoor-gte-02.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'GTE Outdoor Billboard - Separate Bills',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-outdoor-gte-03.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'GTE Outdoor Billboard - Time Management',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-outdoor-gte-04.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-5',
    client:    '',
    alt:       'GTE - Actors in Various Outdoor Environments',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-outdoor-gte-05.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-6',
    client:    'GTE',
    alt:       '',
    showImage: false,
    src:       '',
    showVideo: false,
    videoSrc:  '',
    showText:  true,
    pText:     'ART & COPY TO COME - General Telephone & Electronics Corporation - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },


]; // END slides

exports.sendSlideData = function() {
  return slides;
};
