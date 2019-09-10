$(document).ready(function(){
    $("#a_comments").owlCarousel({
        items: 1,
        loop: true,
        nav: true
    });
});

ymaps.ready(init);
    function init(){  
        var myMap = new ymaps.Map("map", {
            center: [52.62166957, 38.50424550],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [52.621670, 38.504245]
            },
            properties: {
                iconContent: 'STELLS',
                hintContent: 'Качественные велосипеды по самым низким ценам в СНГ'
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: true
        });
        myMap.geoObjects
            .add(myGeoObject);
    }
