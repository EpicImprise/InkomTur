$(document).ready(function() {

    $('#carouselOne').owlCarousel({
        items: 1,
        loop:true, //Зацикливаем слайдер
        margin:30, //Отступ от элемента справа в 50px
        nav:false, //Отключение навигации
        dots: true,
        autoplay:true, //Автозапуск слайдера
        smartSpeed:500, //Время движения слайда
        autoplayTimeout:4000, //Время смены слайда
        slideBy: 1
    });

    $('#carouselTwo').owlCarousel({
        items: 4,
        loop:false,
        margin:30, 
        nav:true, 
        dots: false,
        autoplay:false,
        smartSpeed:500,
        autoplayTimeout:4000,
        mouseDrag: true,
        slideBy: 1,
        navText:['<span><i class="fas fa-chevron-left"></i></span>', '<span><i class="fas fa-chevron-right"></i></span>'],
        responsive:{ 
           0:{
               items:1
           },
           575:{
               items:2
           },
           1000:{
               items:4
           }
       }
    });

     $('#carouselThree').owlCarousel({
        items: 2,
        loop:false,
        margin:30, 
        nav:true, 
        dots: false,
        autoplay:false,
        smartSpeed:500,
        autoplayTimeout:4000,
        mouseDrag: true,
        slideBy: 1,
        navText:['<span><i class="fas fa-chevron-left"></i></span>', '<span><i class="fas fa-chevron-right"></i></span>'],
         responsive:{ 
            0:{
                items:1
            },
            575:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });


    $('.open-title').click(function(){
        var span = $(this).find('span');
        if($(this).hasClass('open')) {
            $(this).removeClass('open');
            span.text('+');
            $(this).parent().find('.open-cont').hide(300); 
        } else {
            $('.open-title').removeClass('open').find('span').text('+');
            $('.open-cont').hide();

            $(this).addClass('open');
            span.text('-');
            $(this).parent().find('.open-cont').show(300);  
        }
    });

    $('.close-nav').click(function(){
        $('.nav-mobile').hide(300);
        $('body').removeClass('no-scroll');
    });
     $('.burger-menu').click(function(){
        $('.nav-mobile').show(300);
        $('body').addClass('no-scroll');
    });

     $('.reception-list>li>a').click(function(){
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $(this).parent().find('.sub').hide(300);
        } else {
            $('.reception-list a').removeClass('open');
            $('.reception-list').find('.sub').hide(300);
            $(this).parent().find('.sub').show(300);
            $(this).addClass('open'); 
        }
       
     });


    /* Sidebar */
    var $sideBtn = $('.navbar-toggler'),
        $sideBar = $('.sidebar');

    $sideBtn.click(function() {
        if($(this).hasClass('hider')) {
            $(this).removeClass('hider');
            $sideBar.css({'left': '0'});
        } else {
            $(this).addClass('hider');
            $sideBar.css({'left': '-100%'});
        }
    });

    $(window).on('load resize', function() {
        var $width = $(window).width();

        if( $width >= 768) {
            $sideBar.css({'left': '0'});
        } else {
            $sideBar.css({'left': '-100%'});
        }
    });

});