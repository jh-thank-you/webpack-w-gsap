let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Advil Baby Video',
    showImage: false,
    src:       '',
    showVideo: true,
    videoSrc:  'https://player.vimeo.com/video/278860313?title=0&byline=0&portrait=0',
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
    videoSrc:  'https://player.vimeo.com/video/278860308?title=0&byline=0&portrait=0',
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
    videoSrc:  'https://player.vimeo.com/video/278860304?title=0&byline=0&portrait=0',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
