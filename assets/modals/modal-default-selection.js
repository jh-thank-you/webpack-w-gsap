let slides = [
  {
    navID:            'slide-1',
    showMediaID:      true,
    mediaID:          'Web',
    client:           '',
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
    descriptNote:     'Example text.',
    showCreditAgency: true,
    creditAgency:     'HAINIS',
    showCreditLeads:  true,
    creditLeads:      'Jim Hainis',
    showCreditArt:    true,
    creditArt:        'Jim Hainis',
    showCreditCopy:   true,
    creditCopy:       'Jim Hainis',
    showAppsUsed:     true,
    appsUsed:         'Audacity, Audition, Illustrator, Photoshop, Premiere Pro, Sublime Text, Webpack, Vue.js',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
