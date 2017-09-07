let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Advil Baby Video',
    showImage: false,
    src:       '',
    showVideo: true,
    videoSrc:  'https://player.vimeo.com/video/232596194?title=0&byline=0&portrait=0',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Advil Traffic Video',
    showImage: false,
    src:       '',
    showVideo: true,
    videoSrc:  'https://player.vimeo.com/video/232596231?title=0&byline=0&portrait=0',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Advil Boxing Video',
    showImage: false,
    src:       '',
    showVideo: true,
    videoSrc:  'https://player.vimeo.com/video/232596221?title=0&byline=0&portrait=0',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    'Advil',
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
