$(document).ready(function(){
    $('#a_main_slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 1500,
        navSpeed: 1500,
        dotsSpeed: 1500,
        autoplayTimeout: 5000,
        navText: ["<img src='img/arrow_left.png'>", "<img src='img/arrow_right.png'>"]
    });

    $('#a_comments').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 1500,
        navSpeed: 1500,
        dotsSpeed: 1500,
        autoplayTimeout: 8000,
        navText: ["<img src='img/arrow_left.png'>", "<img src='img/arrow_right.png'>"]
    });

    $('.smooth-scroll').on('click', 'a:not(:last)', function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.a_order_wrap').on('click', 'a', function(event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.a_position').on('click', 'button', function() {
        let id = $(this).parent().attr('data-model-id'),
            top = $('.a_first_section').offset().top,
            owl = $("#a_main_slider").owlCarousel();
        $('body,html').animate({scrollTop: top}, 1000);
        $(`#main_form select option[value="${id}"]`).prop('selected', true);
        owl.data('owl.carousel').options.autoplay = false;
        owl.trigger('to.owl.carousel', [id - 1, 1500]);
        owl.trigger('refresh.owl.carousel');
    });

    $('.a_wrap').css('padding-top', function() {
        let h4 = $(this).children('.a_descrip').children('h4');
        if (h4.height() > 16) {
            return 18;
        }
        return 0;
    });
});

ymaps.ready(init);

function init() {  
    var myMap = new ymaps.Map("map", {
        center: [52.621670, 38.504245],
        zoom: 15,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    }),
    
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        iconCaption: 'Наш магазин',
        hintContent: 'STELS48 - это качественные велосипеды<br>по самым низким ценам в СНГ',
        balloonContent: 'Россия, Липецкая обл.,<br>г. Елец, ул. Пушкина, д. 144'
    }, {
        preset: 'islands#icon',
        iconColor: '#97D700'
    });

    myMap.geoObjects
        .add(myPlacemark)
};
