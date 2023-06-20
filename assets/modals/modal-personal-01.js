let slides = [
  {
    navID:          'slide-01',
    showArtTile:    true,
    artTitlle:      'I Wonder',
    client:         '',
    showClient:     false,
    alt:            'female-nude-ink-conte-crayon',
    showImage:      true,
    src:            require('assets/img/modal-slides/modal-personal-female-nude-ink-conte-crayon.jpg'),
    showVideo:      false,
    videoSrc:       '',
    showText:       false,
    pText:          '',
    showDescipt:    true,
    showArtistNmae: true,
    artistName:     'Jim Hainis',
    showMediaType:  true,
    mediaType:      'Mixed Media - Ink & Conté Crayon on Bond Paper',
    showDimensions: true,
    dimensions:     '24" x 36"',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
