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
    pText:     'If you are receiving this message you have no current active projects — Thanks for stopping by.',
  },


]; // END slides

exports.sendSlideData = function() {
  return slides;
};
