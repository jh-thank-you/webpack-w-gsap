let slides = [
  {
    navID:            'slide-1',
    showMediaID:      true,
    mediaID:          'Print',
    client:           'American Museum of Natural History',
    showClient:       true,
    alt:              '',
    showImage:        false,
    src:              '',
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
    showCreditLeads:  false,
    creditLeads:      '',
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
