//---------------------------------------------------------------------------------------Start of Map script--------------------------------------------------------------------------------    
// default settings -----------------------------------------     
function initMap() {

    var options = {
        zoom: 6,
        minZoom: 6,
        center: { lat: 57.068574, lng: -4.349972 },
        zoomControl: true,
         mapTypeControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        }
    };

    var glasgowOptions = {
        zoom: 13,
        minZoom: 6,
        center: { lat: 55.864125, lng: -4.254217 }
    };

    var edinburgeOptions = {
        zoom: 13,
        minZoom: 6,
        center: { lat: 55.953414, lng: -3.188287 }
    };

    var dundeeOptions = {
        zoom: 13,
        minZoom: 6,
        center: { lat: 56.4620, lng: -2.9707 }
    };

    var aberdeenOptions = {
        zoom: 13,
        minZoom: 6,
        center: { lat: 57.1497, lng: -2.0943 }
    };

    // map front page api --------------------------------------------------------
    var map = new google.maps.Map(document.getElementById('locationsMap'), options);

    addMarker({
        coords: { lat: 55.864125, lng: -4.254217 },
        content: '<h3>Glasgow</h3>'
    });
    addMarker({
        coords: { lat: 55.953414, lng: -3.188287 },
        content: '<h3>Edinburge</h3>'
    });
    addMarker({
        coords: { lat: 56.4620, lng: -2.9707 },
        content: '<h3>Dundee</h3>'
    });
    addMarker({
        coords: { lat: 57.1497, lng: -2.0943 },
        content: '<h3>Aberdeen</h3>'
    });

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map
        });
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }
    }
    // end of front map options ----------------------------------------------------------

    // Glasgow map ------------------------------------------------------------------------------------------------------------------------------------------------------------
    var glasgowCentral = new google.maps.Map(document.getElementById('glasgowMap'), glasgowOptions);

    addMarker2({ coords2: { lat: 55.864125, lng: -4.254217 } });


    function addMarker2(props) {
        var marker = new google.maps.Marker({
            position: props.coords2,
            map: glasgowCentral
        });
    }
    // Glasgow map end ------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Edinburge map Start -------------------------------------------------------------------------------------------------------------------------------------------------------- 
    var edinburgeCentral = new google.maps.Map(document.getElementById('edinburgeMap'), edinburgeOptions);

    addMarker3({ coords3: { lat: 55.953414, lng: -3.188287 } });


    function addMarker3(props) {
        var marker = new google.maps.Marker({
            position: props.coords3,
            map: edinburgeCentral
        });
    }
    // Edinburge map end -------------------------------------------------------------------------------------------------------------------------------------------------------- 

    // Dundee map Start -------------------------------------------------------------------------------------------------------------------------------------------------------- 
    var dundeeCentral = new google.maps.Map(document.getElementById('dundeeMap'), dundeeOptions);

    addMarker4({ coords4: { lat: 56.4620, lng: -2.9707 } });


    function addMarker4(props) {
        var marker = new google.maps.Marker({
            position: props.coords4,
            map: dundeeCentral
        });
    }
    // Dundee map end -------------------------------------------------------------------------------------------------------------------------------------------------------- 

    // Aberdeen map Start --------------------------------------------------------------------------------------------------------------------------------------------------------
    var aberdeenCentral = new google.maps.Map(document.getElementById('aberdeenMap'), aberdeenOptions);

    addMarker5({ coords5: { lat: 57.1497, lng: -2.0943 } });


    function addMarker5(props) {
        var marker = new google.maps.Marker({
            position: props.coords5,
            map: aberdeenCentral
        });
    }
    // Aberdeen map end -------------------------------------------------------------------------------------------------------------------------------------------------------- 

} // end of init function ----------------------------------------------------------

 




//---------------------------------------------------------------------------------------End of Map script--------------------------------------------------------------------------------
