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
    });

    //Animated skills
    var skills = $('.skillFilling');
    var elementID;
    var value;
    var animateSkills = function () {
        skills.each(function () {
            elementID = $(this).attr('data-skill');
            value = $(document.getElementById(elementID)).text();
            $(this).animate({
                width: value
            }, 5000)
        })
    };
    animateSkills();

    //Carousel
    var carousel = $('.carousel-content');
    var dotts = $('.testimony').find('ul');
    var dott;
    carousel.each(function (val) {
        $(this).attr('id', val);
        dott = $('<li>');
        dott.prependTo(dotts);
    });
    dott.first().addClass('active');
    var merryGoRound = function () {
        var current = $('.visible');
        var currentDott = $('.active');
        current.removeClass("visible");
        currentDott.removeClass('active');
        if (current.attr('id') != 2) {
            current.next().addClass("visible");
            currentDott.next().addClass('active');
        } else {
            $('#0').addClass('visible');
            dott.first().addClass('active');

        }
    };
    carousel.on("click", merryGoRound);
});
