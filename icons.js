/*global Backbone */
var app = app || {};

(function () {
    'use strict';

    /**
     * Default map markers in different colors with shadow.
     */
    app.green_icon = L.icon({
        iconUrl: 'icons/marker-green.png', // was: 
        shadowUrl: 'icons/marker-shadow.png',
        iconSize:    [25, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34],
        shadowSize:  [41, 41]
    });
    app.blue_icon = L.icon({
        iconUrl: 'icons/marker-icon.png',
        shadowUrl: 'icons/marker-shadow.png',
        iconSize:    [25, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34],
        shadowSize:  [41, 41]
    });
    app.red_icon = L.icon({
        iconUrl: 'icons/marker-red.png',
        shadowUrl: 'icons/marker-shadow.png',
        iconSize:    [25, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34],
        shadowSize:  [41, 41]
    });

})();             