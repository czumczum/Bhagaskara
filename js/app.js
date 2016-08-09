$(document).ready(function() {
    //Variables
    var nav = $('nav');

    //Sticky menu on top when scrolling
    var navOff = nav.offset().top;
    var check = function(e) {
        var scroll = $(document).scrollTop();
        console.log('sprawdzam');
        if (navOff <= scroll) {
            nav.addClass('sticky');
            console.log('sticky');
        } else {
            nav.removeClass('sticky');
            console.log('not sticky');
        }
    }

    $(window).on("scroll", check);
    $(window).on('resize', check);

});
