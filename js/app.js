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
    var dots = $('.dots');
    var dot;

    carousel.each(function (val) {
        $(this).attr('id', val);
        dot = $('<li>');
        dot.prependTo(dots);
    });

    //noinspection JSUnusedAssignment
    dot.first().addClass('current');

    var merryGoRound = function () {
        var current = $('.visible');
        var currentDot = $('.current');
        current.removeClass("visible");
        currentDot.removeClass('current');

        if (current.attr('id') != 2) {
            current.next().addClass("visible");
            currentDot.next().addClass('current');
        } else {
            $('#0').addClass('visible');
            dot.first().addClass('current');
        }
    };

    carousel.on("click", merryGoRound);

    //Tags selector
    var images = $('figure');
    images.each(function () {
        var thisTags = $(this).find('img').attr('data-tags');
        var span = $('<span>');
        span.text(thisTags);
        $(this).find('p').append(span);
    })
    var tagButton = $('.tags').find('li');
    var sortTags = function(tag) {
        if (tag == "all") {
            return images.removeClass('hidden');
        }
        images.each(function() {
            var thisTags = $(this).find('img').attr('data-tags');
            if (thisTags.indexOf(tag) >= 0) {
                $(this).removeClass('hidden');
            } else {
                $(this).addClass('hidden');
            }
        })
    };

    tagButton.on("click", function() {
        var tag = $(this).text().toLowerCase();
        sortTags(tag);
    });
});