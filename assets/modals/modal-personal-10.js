let slides = [
  {
    navID:          'slide-10',
    showArtTile:    true,
    artTitlle:      'Three is a Crowd',
    client:         '',
    alt:            'wine-glasses-scratchboard',
    showImage:      true,
    src:            require('assets/img/modal-slides/modal-personal-wine-glasses-scratchboard.jpg'),
    showVideo:      false,
    videoSrc:       '',
    showText:       false,
    pText:          '',
    showDescipt:    true,
    showArtistNmae: true,
    artistName:     'Jim Hainis',
    showMediaType:  true,
    mediaType:      'Scratchboard',
    showDimensions: true,
    dimensions:     '9" x 12"',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
