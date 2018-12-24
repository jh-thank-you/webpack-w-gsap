let slides = [
  {
    navID:     'slide-1',
    client:    '',
    alt:       'KO Fightgear - Facesaver Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-ko-fightgear-01c.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-2',
    client:    '',
    alt:       'KO Fightgear - Heavy Bag Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-ko-fightgear-02.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
  {
    navID:     'slide-3',
    client:    '',
    alt:       'AKO Fightgear - Tear Drop Heavy Bag Ad',
    showImage: true,
    src:       require('assets/img/modal-slides/modal-print-ko-fightgear-03.jpg'),
    showVideo: false,
    videoSrc:  '',
    showText:  false,
    pText:     '',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
