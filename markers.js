/**
 * This file contains the marker positions and additional information for the map
 */
var app = app || {};

(function () {
    'use strict';

	app.markers = [
		// Mainhall
		{
			name: 'Megablast',
			coord: [-54, -100],
			desc: 'Music-Player for the main hall.',
			url: 'http://megablast.cbrp3.c-base.org/',
			icon: app.audio_icon
		},
		{
			name: 'DMX-DMON',
			coord: [-54, -113.0],
			desc: 'DMX light control for the main hall.',
			url: 'http://baseos.cbrp3.c-base.org/dmxdmon/',
			icon: app.lightbulb_icon
		},
		{
			name: 'Bar',
			coord: [-30.0, -112.0],
			desc: 'A place to get cold beverages.',
			url: '',
			icon: app.bar_icon
		},
		{
			name: 'Matelight',
			coord: [-69.0, -80.0],
			desc: 'Mate bottle based pixel display.',
			url: 'http://matelight.cbrp3.c-base.org/',
			icon: app.videogames_icon
		},
		
		// Nerdarea		
		{
			name: 'Hyperblast',
			coord: [-47.0, 6.0],
			desc: 'Music-Player in the Nördarea.',
			url: 'http://hyperblast.cbrp3.c-base.org/',
			icon: app.audio_icon
		},
		
		// c-lab 
		{
			name: 'Labblaster',
			coord: [-55.0, 130.0],
			desc: 'Music player for the c-lab',
			url: 'http://baseos.cbrp3.c-base.org/tinyblast/',
			icon: app.audio_icon
		}
	
	];
	
})();
	
