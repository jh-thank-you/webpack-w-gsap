let slides = [
  {
    navID:          'slide-03',
    showArtTile:    true,
    artTitlle:      'What\'s Taking so Long',
    client:         '',
    showClient:     false,
    alt:            'female-nude-charcoal-c',
    showImage:      true,
    src:            require('assets/img/modal-slides/personal-female-nude-charcoal-c.jpg'),
    showVideo:      false,
    videoSrc:       '',
    showText:       false,
    pText:          '',
    showDescipt:    true,
    showArtistNmae: true,
    artistName:     'Jim Hainis',
    showMediaType:  true,
    mediaType:      'Charcoal on Newsprint',
    showDimensions: true,
    dimensions:     '24" x 36"',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
