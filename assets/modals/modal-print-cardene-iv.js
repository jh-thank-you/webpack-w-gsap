let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'Cardene I.V. - Visual Aid Spread -01',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-cardene-iv-01c.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'Cardene I.V. - Visual Aid Spread -02',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-cardene-iv-02.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'Cardene I.V. - Visual Aid Cover & Chart Example',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-cardene-iv-03-alt.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'Cardene I.V. Brochures',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-cardene-iv-05.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-5',
    client:    'Cardene I.V.',
    alt:       '',
    showImage: false,
    src:       '',
    showVideo: false,
    videoSrc:  '',
    showText:  true,
    pText:     'Please Note: I helped to design and execute the work across all channels. I did not create the initial concept.',
  },


]; // END slides

exports.sendSlideData = function() {
  return slides;
};
