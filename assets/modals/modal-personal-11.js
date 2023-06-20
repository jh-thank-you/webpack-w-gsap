let slides = [
  {
    navID:          'slide-11',
    showArtTile:    true,
    artTitlle:      'Light\'s Little Dance',
    client:         '',
    showClient:     false,
    alt:            'glasses-and-reflection-pencil',
    showImage:      true,
    src:            require('assets/img/modal-slides/modal-personal-glasses-and-reflection-pencil.jpg'),
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
