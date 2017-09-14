 (function(w,g){w['GoogleAnalyticsObject']=g;
      w[g]=w[g]||function(){(w[g].q=w[g].q||[]).push(arguments)};w[g].l=1*new Date();})(window,'ga');

      // Optional TODO: replace with your Google Analytics profile ID.
      ga('create', 'UA-XXXX-Y');
      ga('send', 'pageview');

var font = new FontFace("Open Sans", "url(//fonts.googleapis.com/css?family=Open+Sans:400,700)", {
  style: 'normal', unicodeRange: 'U+000-5FF', weight: '400'
});
// don't wait for the render tree, initiate an immediate fetch!
font.load().then(function() {
  // apply the font (which may re-render text and cause a page reflow)
  // after the font has finished downloading
  document.fonts.add(font);
  document.body.style.fontFamily = "Open Sans, serif"; 
});
