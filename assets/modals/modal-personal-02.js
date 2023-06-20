let slides = [
  {
    navID:          'slide-02',
    showArtTile:    true,
    artTitlle:      'If Only',
    client:         '',
    showClient:     false,
    alt:            'male-nude-charcoal',
    showImage:      true,
    src:            require('assets/img/modal-slides/modal-personal-male-nude-charcoal.jpg'),
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
