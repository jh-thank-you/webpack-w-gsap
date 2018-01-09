let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'vertex-linen-banner-ad-squeak',
    showImage: true,
    src:       require('assets/img/modal-slides/vertex-banner-line-squeak.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     'Banner placed on gernaral hosehold sites.',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'vertex-linen-banner-ad-merlot',
    showImage: true,
    src:       require('assets/img/modal-slides/vertex-banner-line-merlot.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     'Banner placed on food and wine sites.',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'vertex-linen-banner-ad-projectile',
    showImage: true,
    src:       require('assets/img/modal-slides/vertex-banner-line-vomit.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     'Banner placed on parenting sites.',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'vertex-linen-banner-ad-paw',
    showImage: true,
    src:       require('assets/img/modal-slides/vertex-banner-line-paws.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     'Banner placed on pet sites.',
  },
  {
    navID:     'slide-5',
    client:    'Vertex Linen',
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
