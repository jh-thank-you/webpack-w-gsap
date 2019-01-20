let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'GTE Outdoor Billboard - Wanted',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-outdoor-gte-01c.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'GTE Outdoor Billboard - Everything Must Go',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-outdoor-gte-02.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'GTE Outdoor Billboard - Separate Bills',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-outdoor-gte-03.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-4',
    client:    '',
    alt:       'GTE Outdoor Billboard - Time Management',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-outdoor-gte-04.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-5',
    client:    '',
    alt:       'GTE - Actors in Various Outdoor Environments',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-outdoor-gte-05.png'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-6',
    client:    'GTE',
    alt:       '',
    showImage: false,
    src:       '',
    showVideo: false,
    videoSrc:  '',
    showText:  true,
    pText:     'U.S. Launch Campaign for GTE All On One Bill. | Released in three major markets (NYC, Chicago and LA) | Consisted of 3D Outdoor Billboards that would start off as a teaser corkboard with just push pins and the GTE logo. Eventually the tear tab sheets would appear with all tabs in place. Over the course of a month the tabs would begin to disappear. As the tabs disappeared off of the 3D billboards actors, posing as would be GTE All On One Bill customers, would begin showing up in the vicinity of the 3D billboards with the giant All On One Bill tabs in hand. The actors were provided loose All On One Bill scripts to follow when the general public would enquire about the tabs.',
  },


]; // END slides

exports.sendSlideData = function() {
  return slides;
};
