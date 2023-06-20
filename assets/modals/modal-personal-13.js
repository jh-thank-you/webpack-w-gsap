let slides = [
  {
    navID:          'slide-13',
    showArtTile:    true,
    artTitlle:      'Triumph',
    client:         '',
    showClient:     false,
    alt:            'cd-cover-design-triumph',
    showImage:      true,
    src:            require('assets/img/modal-slides/modal-personal-cd-cover-design-triumph-crop.jpg'),
    showVideo:      false,
    videoSrc:       '',
    showText:       false,
    pText:          '',
    showDescipt:    true,
    showArtistNmae: true,
    artistName:     'Jim Hainis',
    showMediaType:  true,
    mediaType:      'Mixed Media - Graphite & Ink',
    showDimensions: true,
    dimensions:     '12" x 14"',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
