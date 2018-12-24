let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Cimzia Trade Show Booth - Interactive - Experiential - Rock Climbing Game',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-online-cimzia-01c.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'imzia Trade Show Booth - Interactive Visual Aid',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-online-cimzia-02.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'imzia Trade Show Booth - Interactive - PEG-elated Game Closeup',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-online-cimzia-04.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    'Cimzia',
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
