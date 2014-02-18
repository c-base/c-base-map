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
    app.bar_icon = L.icon({
        iconUrl: 'icons/bar.png',
        shadowUrl: 'icons/shadow.png',
        iconSize:    [32, 37],
        iconAnchor:  [14, 41],
        popupAnchor: [1, -34],
        shadowSize:  [45, 37]
    });
    app.audio_icon = L.icon({
        iconUrl: 'icons/audio.png',
        shadowUrl: 'icons/shadow.png',
        iconSize:    [32, 37],
        iconAnchor:  [14, 41],
        popupAnchor: [1, -34],
        shadowSize:  [45, 37]
    });
    app.lightbulb_icon = L.icon({
        iconUrl: 'icons/lightbulb.png',
        shadowUrl: 'icons/shadow.png',
        iconSize:    [32, 37],
        iconAnchor:  [14, 41],
        popupAnchor: [1, -34],
        shadowSize:  [45, 37]
    });
    app.videogames_icon = L.icon({
        iconUrl: 'icons/videogames.png',
        shadowUrl: 'icons/shadow.png',
        iconSize:    [32, 37],
        iconAnchor:  [14, 41],
        popupAnchor: [1, -34],
        shadowSize:  [45, 37]
    });
    app.video_icon = L.icon({
        iconUrl: 'icons/video.png',
        shadowUrl: 'icons/shadow.png',
        iconSize:    [32, 37],
        iconAnchor:  [14, 41],
        popupAnchor: [1, -34],
        shadowSize:  [45, 37]
    });	
    app.twitter_icon = L.icon({
        iconUrl: 'icons/tweet.png',
        shadowUrl: 'icons/shadow.png',
        iconSize:    [32, 37],
        iconAnchor:  [14, 41],
        popupAnchor: [1, -34],
        shadowSize:  [45, 37]
    });	

})();             
