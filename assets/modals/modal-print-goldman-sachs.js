let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Goldman Sachs Ad - Career',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-goldman-sachs-01c.gif'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Goldman Sachs Ad - Resume',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-goldman-sachs-02.gif'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Goldman Sachs Ad - Challenges',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-goldman-sachs-03.gif'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'Goldman Sachs Brochure - Closeup',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-goldman-sachs-04.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-5',
    client:    '',
    alt:       'Goldman Sachs Brochure - spread',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-goldman-sachs-05.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-6',
    client:    'Goldman Sachs',
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
