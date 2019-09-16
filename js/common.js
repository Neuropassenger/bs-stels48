$(document).ready(function(){
//карусель для главного слайдера
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
//карусель для отзывов
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
//плавная прокрутка для верхнего и нижнего меню
    $('.smooth-scroll').on('click', 'a:not(:last)', function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
//плавная прокрутка для "заказать", которые разбросаны по сайту
    $('.a_order_wrap').on('click', 'a', function(event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
//автозаполнение формы и выбор элемента в карусели
    $('.a_position').on('click', 'button', function() {
        let id = $(this).parent().attr('data-model-id'),
            top = $('.a_first_section').offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        $(`#main_form select option[value="${id}"]`).prop('selected', true);
        setModelInOwl(id);
    });
//отслеживание ручного изменения формы 
    $("#main_form select").change(function() {
        let id = $(this).val();
        setModelInOwl(id);
    });
//установка padding для многострочных заголовков
    $('.a_wrap').css('padding-top', function() {
        let h4 = $(this).children('.a_descrip').children('h4');
        if (h4.height() > 16) {
            return 18;
        }
        return 0;
    });

    function setModelInOwl(id) {
        let owl = $("#a_main_slider").owlCarousel();
        owl.data('owl.carousel').options.autoplay = false;
        owl.trigger('to.owl.carousel', [id - 1, 1500]);
        owl.trigger('refresh.owl.carousel');
    };
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
