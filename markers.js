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
			name: 'Replicator',
			coord: [-37.0, -66.0],
			desc: 'A place to get cold beverages from a machine. it gives a discount if you provide a UID and PIN',
			url: 'https://member.cbrp3.c-base.org/account/gastropin/',
			icon: app.bar_icon
		},
		{
			name: 'Matelight',
			coord: [-69.0, -80.0],
			desc: 'Mate bottle based pixel display.',
			url: 'http://matelight.cbrp3.c-base.org/',
			icon: app.videogames_icon
		},
		{
			name: 'Klotür',
			coord: [5.0, -142.5],
			desc: 'The Twitter account of an object that caused a shitstorm.',
			url: 'https://twitter.com/klotuer',
			icon: app.twitter_icon
		},
		// C_leuse
		{
			name: 'c_leuse lightcontrol',
			coord: [-5.0, -35.0],
			desc: 'control of photon emitters in airlock',
			url: 'https://c-beam.cbrp3.c-base.org/c_leuse',
			icon: app.lightbulb_icon
		},
		{
			name: 'c_leuse soundcontrol',
			coord: [-5.0, -45.0],
			desc: 'no webinterface. only physical interface at the bar',
			url: 'https://jaseg.net/how-to-build-a-very-serious-volume-knob-from-a-1950ies-variac-and-an-arduino.html',
			icon: app.audio_icon
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
		},
		{
			name: '3D-Printer Cams',
			coord: [-30.0, 115.0],
			desc: 'Webcams and Webinterface of the 3D-Printers',
			url: 'http://3dp.cbrp3.c-base.org/',
			icon: app.video_icon
		},

		// werkstatt
		{
			name: 'Mechblast',
			coord: [30.0, 25.0],
			desc: 'Music player for the workshop',
			url: 'http://mechblast.cbrp3.c-base.org',
			icon: app.audio_icon
		},
	
	];
	
})();
	
