$(document).ready(function() {

    //Variables
    var nav = $('nav');

    //Sticky menu on top when scrolling
    var navOff = nav.offset().top;
    var check = function() {
        var scroll = $(document).scrollTop();
        if (navOff <= scroll) {
            nav.addClass('sticky');
        } else {
            nav.removeClass('sticky');
        }
    };

    //Navigation menu (two places included)
    var menu = $('header').find('.img'),
        navMenu = nav.find('li');
    var scrollMe = function(e) {
        var name = "." + $(this).attr('data-id'); //"." for class
        $('html, body').animate({
            scrollTop: $(name).offset().top
        }, 1000);
    };

    //Activate the bottom border on active section in sticky menu
    var checkMenu = function(e) {
        var scroll = $(document).scrollTop();
        nav.find('li').each(function () {
            var currLink = $(this);
            var refElement = $("." + currLink.attr("data-id"));
            console.log(refElement);
            if (refElement.position().top <= scroll && refElement.position().top + refElement.height() > scroll) {
                nav.find('li').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    };

    //Event listeners
    $(window).on("scroll", function(e) {
        check(e);
        checkMenu(e);
    });
    $(window).on('resize', check);
    menu.on("click", scrollMe);
    navMenu.on("click", scrollMe);

});
