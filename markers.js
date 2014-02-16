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
			coord: [-28.0, -85.0],
			desc: 'Music-Player for the main hall.',
			url: 'http://megablast.cbrp3.c-base.org/'
		},
		
		// Nerdarea
		{
			name: 'Nerdarea',
			coord: [-37.0, 55.0],
			desc: 'The Nerdarea is an area for nerds.',
			url: 'http://c-base.org/',
			icon: app.red_icon
		},
		{
			name: 'Hyperblast',
			coord: [-47.0, 6.0],
			desc: 'Music-Player in the Nördarea.',
			url: 'http://hyperblast.cbrp3.c-base.org/'
		},
		
		// c-lab 
		{
			name: 'Labblaster',
			coord: [-55.0, 130.0],
			desc: 'Music player for the c-lab',
			url: 'http://baseos.cbrp3.c-base.org/tinyblast/'
		}
	
	];
	
})();
	
