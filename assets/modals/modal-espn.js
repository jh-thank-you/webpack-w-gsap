let slides = [
  {
    navID:            'slide-1',
    showMediaID:      true,
    mediaID:          'Print',
    client:           'ESPN',
    showClient:       true,
    alt:              '',
    showImage:        true,
    src:              require('assets/img/modal-slides/modal-online-self-promotion-01.png'),
    showVideo:        false,
    videoSrc:         '',
    videoWidth:       '',
    videoHeight:      '',
    videoSquare:      '',
    videoSixteenNine: '',
    videoNineSixteen: '',
    videoFourThree:   '',
    showText:         false,
    pText:            '',
    showDescipt:      true,
    showDescriptNote: true,
    descriptNote:     '',
    showCreditAgency: true,
    creditAgency:     'TURF',
    showCreditLeads:  false,
    creditLeads:      '',
    showCreditArt:    true,
    creditArt:        'Jim Hainis',
    showCreditCopy:   true,
    creditCopy:       'Jim Hainis',
    showAppsUsed:     true,
    appsUsed:         'Illustrator, InDesign, Photoshop',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
