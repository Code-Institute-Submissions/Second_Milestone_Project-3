let mainMarker = [];
let nearbyPlaces = [];
let autocomplete;
let countryRestrict = { 'country': 'IS' };


let articleTemplate = document.getElementById('article-template').content;
let articlesContainer = document.getElementById('articles-container');


//Initializing Fucntion, Called Back Inside GoogleMap Script On Location Page
function initialize() {
    initMap();
    initAutocomplete();
}

//Sets Google Map On To The Page, Gets Type Value For NearbyPlaces Request, Creates Click Event Listner That Trigers API Requests and Logic

function initMap() {

    let iceland = { lat: 64.128288, lng: -21.827774 };
    let map = new google.maps.Map(document.getElementById('map'),
        {
            zoom: 12,
            center: iceland,
            streetViewControl: false,
            mapTypeControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    let selectType = [];

    $("select.select-box").change(function () {
        selectType = [];
        let typeVal = $(this).children("option:selected").val();
        selectType.push(typeVal);
    });

    let geocoder = new google.maps.Geocoder(map);

    document.getElementById('src-btn').addEventListener('click', function () {
        deleteMarkers();
        geocodeAddress(geocoder, map, selectType[0], articlesContainer);
    });
}

// Gets Input Passed From InputBars And Uses it to Geolocate City And Set Marker On It
function geocodeAddress(geocoder, resultsMap, placeType, articlesContainer) {
    let address = document.getElementById('address').value;

    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            resultsMap.panTo(results[0].geometry.location);
            resultsMap.setZoom(14);

            let lat = results[0].geometry.location.lat();
            let lng = results[0].geometry.location.lng();
            let marker = new google.maps.Marker({ map: resultsMap, position: results[0].geometry.location });
            mainMarker.push(marker);
            // Changes the innerHTML of div element to location searched and adds <ul> 
            document.getElementById('locationName').innerHTML = '<div class="row">' + '<div class="col-12">' + '<h2 class="text-center mt-3 mt-lg-1">' + address + '</h2>' + '</div>' + '</div>' + '<div class="row">' + '<div class="col-12" id="right-panel">' + '<ul id="places" class="places-list-style"></ul>' + "</div>" + "</div>";
            //Uses Cordinates Of Geolocation And Type Of Place From Select Bar To Create Request Based On Area Radius That Outputs And Sets Markers On All Nearby Places
            findNearbyPlaces(lat, lng, resultsMap, placeType);
            //Gets JSON Data And Fills in Template Creating Articles On The Page
            importArticles(articlesContainer);
        } else {
            alert('Geocode was not successful for the follwoing reason:' + status);
        }
    });
}

function initAutocomplete() {

    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('address'),
        { types: ['(cities)'], componentRestrictions: countryRestrict }
    );
    autocomplete.setFields(['address_component']);
}

//Uses Cordinates Of Geolocation And Type Of Place From Select Bar To Create Request Based On Area Radius That Outputs And Sets Markers On All Nearby Places
function findNearbyPlaces(lat, lng, map, placeType) {
    let locationCoord = new google.maps.LatLng(lat, lng);
    let request = { location: locationCoord, radius: '500', type: placeType };
    let service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i], map);
            }
        }
    });

}

function createMarker(place, map) {
    let placeLoc = place.geometry.location;
    let placesList = document.getElementById('places');
    let infowindow = new google.maps.InfoWindow();

    let image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
    };

    let placesMarker = new google.maps.Marker({
        map: map,
        title: place.name,
        position: placeLoc,
        icon: image
    });

    google.maps.event.addListener(placesMarker, 'click', function () {
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + 'Rating:' +
            place.rating + '<i class="fas fa-star"></i>' + '</div>');
        infowindow.open(map, this);
    });

    nearbyPlaces.push(placesMarker);
    let li = document.createElement('li');
    li.textContent = place.name;
    placesList.appendChild(li);
}


function setMapOnAll(map) {
    for (let i = 0; i < nearbyPlaces.length; i++) {
        nearbyPlaces[i].setMap(map);
    }
    for (let i = 0; i < mainMarker.length; i++) {
        mainMarker[i].setMap(map);
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
    setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    mainMarker = [];
    nearbyPlaces = [];
}

//Gets JSON Data And Fills in Template Creating Articles On The Page
function importArticles(articlesContainer) {
    $.getJSON("assets/ajax/articles.json", function (data) {
        for (i = 0; i < data.length; i++) {
            let templateHtmlCopy = document.importNode(articleTemplate, true);

            templateHtmlCopy.querySelector('.article-mobile-image').setAttribute('src', data[i].articleImage);
            templateHtmlCopy.querySelector('.article-heading').textContent = data[i].articleHeading;
            templateHtmlCopy.querySelector('.article-paragraph').innerHTML = data[i].articleParagraph + '<span class="' + data[i].spanClass + ' article-hidden-paragraph' + '">' + data[i].articleHiddenParagraph + '</span>';
            templateHtmlCopy.querySelector('.article-desktop-image').setAttribute('src', data[i].articleImage);
            templateHtmlCopy.querySelector('.attractions-btn').setAttribute('data-value', data[i].spanClass);
            templateHtmlCopy.querySelector('.attractions-btn').setAttribute('id', data[0].spanClass);


            articlesContainer.appendChild(templateHtmlCopy);


        }
        $('.article-hidden-paragraph').hide();
        $('.attractions-btn').on('click', function (event) {
            let dataValue = $(this).attr("data-value");
            let hiddenText = '.' + dataValue;

            $(hiddenText).slideToggle('slow');
        });
    });
}