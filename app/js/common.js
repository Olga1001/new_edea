// 'use strict';

$(document).ready(function () {
    $('.home-fourth-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
    $('.header-home-menu').click(function(){
        $(this).toggleClass('bg-active');
        $(".header-mob-menu, .overlay").removeClass('active');
        if ($(this).hasClass('bg-active')) {
            $(".header-mob-menu, .overlay").addClass('active');
            // bodyFreezeScroll()
        } else {
            // bodyUnfreezeScroll()

        }
    });

    var $body = $(window.document.body);
    function bodyFreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('overflow', 'hidden');
        $body.css('marginRight', ($body.css('marginRight') ? '+=' : '') + ($body.innerWidth() - bodyWidth));
        $body.css('position', 'fixed');
    }

    function bodyUnfreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('marginRight', '0');
        $body.css('overflow', 'auto');
        $body.css('position', 'relative');
    }
    $(".pricing-first-card", this).on("mousemove", function () {
        $(".pricing-first-up_card", this).css("background", "#157efb");
    });
    $(".pricing-first-card", this).on("mouseout", function () {
        $(".pricing-first-up_card", this).css("background", "none");
    });
});
