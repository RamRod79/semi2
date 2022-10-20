document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        // options
        fullWidth: true,
        indicators: true
    });
    var sidenavelems = document.querySelectorAll('.sidenav');
    var sidenavinstances = M.Sidenav.init(sidenavelems, {
        //options
    });
    instances;
    sidenavinstances;
  });
