$(document).ready(function () {

    //header
    $(function(){
        $(window).scroll(function () {
            if ($(window).scrollTop() > 0) {
                $('.header').addClass('-transition');
                if($(window).scrollTop() > videoended) {
                    $('.embed--video').parent().addClass('-above')
                }else{
                    $('.embed--video').parent().removeClass('-above')
                }
            } else {
                $('.header').removeClass('-transition')
            }
        });
        var videoended = $('.videosticky').offset().top + $('.videosticky').innerHeight() - 120;
    })
   
    //masonry + infinite
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
    });
    
    var msnry = $grid.data('masonry');
    
    $grid.infiniteScroll({
        path: '.grid-next-button',
        append: '.grid-item',
        outlayer: msnry,
        history: false,
        loadOnScroll: false,
        scrollThreshold: false,
        button: '.grid-next-button',
        checkLastPage: '.grid-next-button'
    });

    //clampify
    $('.item-grid .title, .item-grid .text').clampify({
        maxLines: 3,
        autoUpdate: true
    });

    //hamburger
    $('.header-top .hamburger').click(function (e) {
        $(this).toggleClass('collapsed');
        if ($(this).hasClass('collapsed')) {
            disableBodyScroll(true, '.header-nav');
            $('html').addClass('overflow').find('.header').addClass('-nav-isopen')
        } else {
            disableBodyScroll(false, '.header-nav');
            $('html').removeClass('overflow').find('.header').removeClass('-nav-isopen');
        };
        e.preventDefault();
    });
    $('.header-nav .hamburger').click(function (e) {
        $('.header-top .hamburger').trigger('click')
        e.preventDefault();
    });

    //swiperheadline
    var headlineText = new Swiper('.headline-swiper-article .swiper-container',{
        effect: 'fade',
        autoHeight: true,
        fadeEffect: {
            crossFade: true
        },
    });
    var headlineFigure = new Swiper('.headline-swiper-figure .swiper-container', {
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: ".swiper-button-prev", 
            nextEl: ".swiper-button-next"
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            init: function () {
                var total = this.slides.length;
                var current = this.realIndex + 1;
                $('.headline-swiper .swiper-fraction .total').html(total);
                $('.headline-swiper .swiper-fraction .current').html(current);
            },
            slideChange: function(){
                var current = this.realIndex + 1;
                $('.headline-swiper .swiper-fraction .current').html(current);
            },
        },
    });

    headlineText.controller.control = headlineFigure;
    headlineFigure.controller.control = headlineText;

    //popup
    $('[data-popup-open]').on('click', function(e) {
        e.preventDefault();
        var targeted = $(this).attr('data-popup-open');
        $('[data-popup="' + targeted + '"]').addClass('is-visible');
        $('html').addClass('overflow');
        $grid.masonry('layout');
    });
    $('[data-popup-close]').on('click', function(e) {
        e.preventDefault();
        var targeted = $(this).attr('data-popup-close');
        $('[data-popup="' + targeted + '"]').removeClass('is-visible');
        $('html').removeClass('overflow');
        $grid.masonry('layout');
    });
    if($('[data-popup=show]').length){
        $('.popup').addClass('is-visible');
        $('html').addClass('overflow');
    }

    // $(document).on('mouseup', function(e){
    //     e.preventDefault();
    //     var container = $(".popup-inner-box");
    //     if (!container.is(e.target) && container.has(e.target).length === 0) {
    //         $('.popup').removeClass('is-visible');
    //         $('html').removeClass('overflow');
    //     }
    // }).on('keyup', function(e){
    //     if (e.which == '27'){
    //         $('.popup').removeClass('is-visible');
    //         $('html').removeClass('overflow');
    //     }
    // });

});