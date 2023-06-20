let slides = [
  {
    navID:          'slide-07',
    showArtTile:    true,
    artTitlle:      'All Paths Traveled',
    client:         '',
    showClient:     false,
    alt:            'graphite-feet-drawing',
    showImage:      true,
    src:            require('assets/img/modal-slides/modal-personal-feet-drawing.jpg'),
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
