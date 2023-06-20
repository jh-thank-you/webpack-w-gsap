let slides = [
  {
    navID:          'slide-12',
    showArtTile:    true,
    artTitlle:      'AIDS SAID',
    client:         '',
    showClient:     false,
    alt:            'aids-poster',
    showImage:      true,
    src:            require('assets/img/modal-slides/modal-personal-aids-poster.jpg'),
    showVideo:      false,
    videoSrc:       '',
    showText:       false,
    pText:          '',
    showDescipt:    true,
    showArtistNmae: true,
    artistName:     'Jim Hainis',
    showMediaType:  true,
    mediaType:      'Mixed Media',
    showDimensions: true,
    dimensions:     '12" x 16"',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
