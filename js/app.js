$(document).ready(function() {

    //Variables
    var check;
    var navOff;
    var checkMenu;
    var scrollMe;
    var refElement;
    var menu, navMenu;
    var nav = $('nav');
    var scrollIcon = $('.scroll');

    //Sticky menu on top when scrolling
    navOff = nav.offset().top;
    check = function () {
        var scroll = $(document).scrollTop();
        if (navOff <= scroll) {
            nav.addClass('sticky');
        } else {
            nav.removeClass('sticky');
        }
    };

    //Navigation menu (two places included)
    menu = $('header').find('.img');
    navMenu = nav.find('li');
    scrollMe = function () {
        var name = "." + $(this).attr('data-id'); //"." for class
        $('html, body').animate({
            scrollTop: $(name).offset().top
        }, 1000);
    };

    //Activate the bottom border on active section in sticky menu
    checkMenu = function () {
        var scroll = $(document).scrollTop();
        nav.find('li').each(function () {
            var currLink = $(this);
            refElement = $("." + currLink.attr("data-id"));
            console.log(refElement);
            if (refElement.position().top - 100 <= scroll && refElement.position().top + refElement.height() + 800 > scroll) {
                nav.find('li').removeClass("active");
                currLink.addClass("active");
            }
            else {
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
    scrollIcon.on("click", function () {
        $('html, body').animate({
            scrollTop: $('nav').offset().top
        }, 1000);
    })

    //Animated skillset
    var skills = $('.skillFilling');
    var elementID;
    var value;
    var animateSkills = function () {
        skills.each(function () {
            console.log($(this));
            elementID = $(this).attr('data-skill');
            value = $(document.getElementById(elementID)).text();
            $(this).animate({
                width: value
            }, 5000)
        })
    }
    animateSkills();
});
