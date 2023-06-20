let slides = [
  {
    navID:          'slide-09',
    showArtTile:    true,
    artTitlle:      'A Sunday Morning',
    client:         '',
    showClient:     false,
    alt:            'towel-hanging-pencil',
    showImage:      true,
    src:            require('assets/img/modal-slides/modal-personal-towel-hanging-pencil.jpg'),
    showVideo:      false,
    videoSrc:       '',
    showText:       false,
    pText:          '',
    showDescipt:    true,
    showArtistNmae: true,
    artistName:     'Jim Hainis',
    showMediaType:  true,
    mediaType:      'Graphite on Bond Paper',
    showDimensions: true,
    dimensions:     '18" x 24"',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
