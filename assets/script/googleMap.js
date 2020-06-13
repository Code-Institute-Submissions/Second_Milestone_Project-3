var places, infoWindow;
var mainMarker = [];
var nearbyPlaces = [];
var autocomplete;
var countryRestrict = {'country': 'IS'};

 $('#article-container-onbtnclick').load('attractions.html #attractions-articles');

//Initializing fucntion
function initialize() {
    initMap();
    initAutocomplete();
  }

function initMap() {

    var iceland = { lat: 64.128288, lng: -21.827774 }
    var map = new google.maps.Map(document.getElementById('map'),
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
    var selectType = [];

    $("select.select-box").change(function(){
        selectType = [];
        var typeVal = $(this).children("option:selected").val();
        selectType.push(typeVal)
        console.log(selectType)
    });

    var geocoder = new google.maps.Geocoder(map);
    
    document.getElementById('src-btn').addEventListener('click', function () {
        deleteMarkers();
        geocodeAddress(geocoder, map, selectType[0]);
    });
}


function geocodeAddress(geocoder, resultsMap, placeType) {
    var address = document.getElementById('address').value; // Gets input from location input bar

    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            resultsMap.panTo(results[0].geometry.location);
            resultsMap.setZoom(14);

            var lat = results[0].geometry.location.lat();
            var lng = results[0].geometry.location.lng();
            var marker = new google.maps.Marker({ map: resultsMap, position: results[0].geometry.location});
            mainMarker.push(marker);
            // Changes the innerHTML of div element to location searched and adds <ul> 
            document.getElementById('locationName').innerHTML = '<div class="row">'  + '<div class="col-12">'  + '<h2 class="text-center mt-3 mt-lg-1">' + address + '</h2>' + '</div>' + '</div>' + '<div class="row">'  + '<div class="col-12" id="right-panel">' + '<ul id="places" class="places-list-style"></ul>' + "</div>" + "</div>";
            findNearbyPlaces (lat, lng, resultsMap, placeType);
        } else {
            alert('Geocode was not successful for the follwoing reason:' + status);
        }
    });
}

function initAutocomplete() {

    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('address'),
        {types: ['(cities)'], componentRestrictions: countryRestrict}
    );
    autocomplete.setFields(['address_component']);
  }

function findNearbyPlaces (lat, lng, map, placeType) {
    var locationCoord = new google.maps.LatLng(lat,lng);
    var request = { location: locationCoord, radius: '500', type: placeType};
    var service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i], map,);
            }
        }
});

}

function createMarker(place, map) {
    var placeLoc = place.geometry.location;
    var placesList = document.getElementById('places');

    var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

    var placesMarker = new google.maps.Marker({
      map: map,
      title: place.name,
      position: placeLoc,
      icon: image
    });

    nearbyPlaces.push(placesMarker);
    var li = document.createElement('li');
          li.textContent = place.name;
          placesList.appendChild(li);
  }


function setMapOnAll(map) {
    for (var i = 0; i < nearbyPlaces.length; i++) {
        nearbyPlaces[i].setMap(map);
    }
    for (var i = 0; i < mainMarker.length; i++){
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
    nearbyPlaces= [];
  }

  function getArticles(){
  
  };