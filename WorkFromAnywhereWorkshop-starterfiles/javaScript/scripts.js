$(document).ready(function(){

  // Attach sticky function to ID "sticky-button"
  $("#sticky-button").sticky({
    topSpacing: 0
  });

});//closes doc ready function
$(document).ready(function () {
  $("#sticky-button").removeClass("background");
  $("#myImage").hide();
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 750) {
          $("#sticky-button").addClass("background");
          $("#myImage").show();
      } else {
          $("#sticky-button").removeClass("background");
          $("#myImage").hide();
      }
  });
});

// video to play in safari
$(document).ready(() => {
    $('video').get(0).play();
});
// mobile
var isMobile = window.matchMedia("only screen and (max-width: 900px)");

if (isMobile.matches) {
    var target = $('#vide')
    target.vide({
      poster: "../images/hostTOvid.jpg"
    }, {
        posterType: "jpg",
        loop: true,
        muted: true,
        position: "0% 0%",
        resize:true
    });
}else{
    var target = $('#vide')
    target.vide({
      mp4: "../images/hostTOvid.mp4",
      webm: "../images/hostTOvid.webm",
      ogv: "../images/hostTOvid.ogv",
      poster: "../images/hostTOvid.jpg"
    }, {
        posterType: "jpg",
        loop: true,
        muted: true,
        position: "0% 0%",
        resize:true
    });
}
