let slides = [
  {
    navID:          'slide-08',
    showArtTile:    true,
    artTitlle:      'FU AOL',
    client:         '',
    showClient:     false,
    alt:            'human-eye-oil-pastel',
    showImage:      true,
    src:            require('assets/img/modal-slides/modal-personal-human-eye-oil-pastel.jpg'),
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
    dimensions:     '12" x 18"',
  },
]; // END slides

exports.sendSlideData = function() {
  return slides;
};
