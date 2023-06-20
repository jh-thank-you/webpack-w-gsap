let slides = [
  {
    navID:          'slide-05',
    showArtTile:    true,
    artTitlle:      'Heart of Another Time',
    client:         '',
    showClient:     false,
    alt:            'tasha-portrait',
    showImage:      true,
    src:            require('assets/img/modal-slides/modal-personal-tasha-portrait.jpg'),
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
