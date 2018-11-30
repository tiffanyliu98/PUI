/*
 * main.js
 * -----------------------------------------------
 * Small javascript demo of the Google Map API
 */



var myHome = {lat: 0, lng: 0}

function myMap() {
    //Defines the properties of the map
    var mapProp= {
   	 center: myHome, //defines where the map is centered on load
   	 zoom:5, //specifies map initial zoom level
    };

    var map = google.maps.Map(document.getElementById(“googleMap”), mapProp);
}



