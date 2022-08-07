$(document).ready(function () {
    $(".scroll-to").on('click', function(event) {
        $('.navbar-collapse').toggleClass('show');
        if (this.hash !== "") {
            event.preventDefault();
            $(".scroll-to").removeClass('active');
            $(this).addClass('active');
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            });
        }
    });
    $('.scroll-animations .animated').each(function () {
        $(this).css('opacity',0);
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() == $('.banner.parallax-bg').offset().top) {
            $('.banner.parallax-bg').animate({'background': 'url("../img/bg/cube-bg-1.png") 0% 75px no-repeat, url("../img/bg/cube-bg-2.png") 100% -75px no-repeat;'}, 1000);
        }
        $('.scroll-animations .animated').each(function() {
            var c = 'fadeIn';
            if (this.className.indexOf("animated-") > -1) {
                c = this.className.split("animated-")[1];
            }
            if (isScrolledIntoView(this) === true) {
                $(this).css('opacity',1).addClass(c);
            }
        });
    });
    $(".owl-carousel").owlCarousel({
        dots: true,
        margin: 45,
        loop: true,
        responsive : {
            0 : {
                items:1,
            },
            768 : {
                items: 2.2,
            }
        }
    });
});
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    // return (elemBottom <= docViewBottom);
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
