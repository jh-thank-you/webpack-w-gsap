let slides = [
  // {
  //   navID:     'slide-1',
  //   client:    '',
  //   alt:       'NY Blood Center Video',
  //   showImage: false,
  //   src:       '',
  //   showVideo: true,
  //   videoSrc:  '',
  //   showText:  false,
  //   pText:     '',
  // },
  {
    navID:     'slide-2',
    client:    'NY Blood Center',
    alt:       '',
    showImage: false,
    src:       '',
    showVideo: false,
    videoSrc:  '',
    showText:  true,
    pText:     'VIDEOS & COPY TO COME - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },


]; // END slides

exports.sendSlideData = function() {
  return slides;
};
