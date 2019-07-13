let slides = [
  {
    navID:     'slide-1',
    client:    'Welcome',
    alt:       '',
    showImage: false,
    src:       '',
    showVideo: false,
    videoSrc:  '',
    showText:  true,
    pText:     'Example text.',
  },


]; // END slides

exports.sendSlideData = function() {
  return slides;
};
