let slides = [
  {
    navID:          'slide-06',
    showArtTile:    true,
    artTitlle:      'Love Me When I\'m Angry',
    client:         '',
    showClient:     false,
    alt:            'portrait-oil-pastel',
    showImage:      true,
    src:            require('assets/img/modal-slides/modal-personal-portrait-oil-pastel.jpg'),
    showVideo:      false,
    videoSrc:       '',
    showText:       false,
    pText:          '',
    showDescipt:    true,
    showArtistNmae: true,
    artistName:     'Jim Hainis',
    showMediaType:  true,
    mediaType:      'Oil Pastel on Watercolor Paper',
    showDimensions: true,
    dimensions:     '24" x 36"',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
