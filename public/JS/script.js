document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        duration: 300,
        // padding: 10,
        fullWidth: true,
        indicators: true
    });
    var sidenavelems = document.querySelectorAll('.sidenav');
    var sidenavinstances = M.Sidenav.init(sidenavelems, {
            // fullWidth: true,
            // indicators: true
    });
    instances;
    sidenavinstances;
  });
