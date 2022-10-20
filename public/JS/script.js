document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
    var sidenavelems = document.querySelectorAll('.sidenav');
    var sidenavinstances = M.Sidenav.init(elems, options);
  });
  
  var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
});
$(document).ready(function () {
    $('.carousel.carousel-slider').carousel();
    setInterval(function () {
        $('.carousel.carousel-slider').carousel('next');
    }, 3500);
});