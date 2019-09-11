$(document).ready(function(){
    $("#a_main_slider").owlCarousel({
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

    $("#a_comments").owlCarousel({
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

    $(".a_footer_menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".a_order_wrap").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

ymaps.ready(init);

function init() {  
    var myMap = new ymaps.Map("map", {
        center: [52.621670, 38.504245],
        zoom: 16,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    }),
    
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Качественные велосипеды по самым низким ценам в СНГ',
        balloonContent: 'Россия, Липецкая обл., г. Елец, ул. Пушкина, д. 144'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/adress.png',
        iconImageSize: [80, 20],
        iconImageOffset: [-5, -20]
    });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
};
