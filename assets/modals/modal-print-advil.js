let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Advil Ad Blah Blah Blah',
    src:       require('assets/img/modal-slides/modal-print-advil-01c.jpg'),
    showImage: true,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Advil Beep Beep Honk Ad',
    src:       require('assets/img/modal-slides/modal-print-advil-02.jpg'),
    showImage: true,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Advil Beep Beep Honk Ad',
    src:       require('assets/img/modal-slides/modal-print-advil-03.jpg'),
    showImage: true,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    'Advil',
    alt:       '',
    src:       '',
    showImage: false,
    pText:     'COPY TO COME - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },


]; // END slides

exports.sendSlideData = function() {
  return slides;
};
