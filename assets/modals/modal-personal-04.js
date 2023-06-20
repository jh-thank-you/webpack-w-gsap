let slides = [
  {
    navID:          'slide-04',
    showArtTile:    true,
    artTitlle:      'Hurry-up Leonardo',
    client:         '',
    showClient:     false,
    alt:            'female-nude-charcoal-b',
    showImage:      true,
    src:            require('assets/img/modal-slides/modal-personal-female-nude-charcoal-b.jpg'),
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
