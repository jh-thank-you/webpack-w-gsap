let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Ginkoba Burping Video',
    showImage: false,
    src:       '',
    showVideo: true,
    videoSrc:  'https://player.vimeo.com/video/232596279?title=0&byline=0&portrait=0',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Ginkoba Bouquet Video',
    showImage: false,
    src:       '',
    showVideo: true,
    videoSrc:  'https://player.vimeo.com/video/232596262?title=0&byline=0&portrait=0',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Ginkoba Weight Bench Video',
    showImage: false,
    src:       '',
    showVideo: true,
    videoSrc:  'https://player.vimeo.com/video/232596301?title=0&byline=0&portrait=0',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    'Ginkoba',
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
