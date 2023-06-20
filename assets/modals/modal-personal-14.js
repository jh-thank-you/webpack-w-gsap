let slides = [
  {
    navID:          'slide-14',
    showArtTile:    true,
    artTitlle:      'METROPLIS | Comic Book Madness',
    client:         '',
    showClient:     false,
    alt:            'metropolis-cover',
    showImage:      true,
    src:            require('assets/img/modal-slides/modal-personal-metropolis-cover.jpg'),
    showVideo:      false,
    videoSrc:       '',
    showText:       false,
    pText:          '',
    showDescipt:    true,
    showArtistNmae: true,
    artistName:     'Jim Hainis',
    showMediaType:  true,
    mediaType:      'Mixed Media - Ink & Vellum Glue Transfers',
    showDimensions: true,
    dimensions:     '24" x 36"',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
