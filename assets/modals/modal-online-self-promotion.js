let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Talented Nice People Website',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-online-self-promotion-01.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Aholes with Donuts Video',
    showImage: false,
    src:       '',
    showVideo: true,
    videoSrc:  'https://player.vimeo.com/video/285216510?title=0&byline=0&portrait=0',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Aholes is Elevators Video',
    showImage: false,
    src:       '',
    showVideo: true,
    videoSrc:  'https://player.vimeo.com/video/285216516?title=0&byline=0&portrait=0',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'Aholes with Pets Video',
    showImage: false,
    src:       '',
    showVideo: true,
    videoSrc:  'https://player.vimeo.com/video/285216523?title=0&byline=0&portrait=0',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
