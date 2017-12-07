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
			name: 'mechblast-display',
			coord: [-28, -83.0],
			desc: 'Information display for main hall.',
			url: 'http://c-flo.cbrp3.c-base.org/mainhall/',
			icon: app.tv_icon
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
			name: 'mainhall-display',
			coord: [-60, -30.0],
			desc: 'Information display for main hall.',
			url: 'http://c-flo.cbrp3.c-base.org/mainhall/',
			icon: app.tv_icon
		},
		{
			name: 'Bubbler',
			coord: [-54, -170.0],
			desc: 'Water column showing number of crew onboard as a heatmap',
			url: 'http://openmct.cbrp3.c-base.org/#/browse/crewtracker.taxonomy:crewtracker/crewtracker.taxonomy:crew.online',
			icon: app.lightbulb_icon
		},
		{
			name: 'he1-terminal',
			coord: [-37, -50.0],
			desc: 'Information display for he1.',
			url: 'https://c-beam.cbrp3.c-base.org/he1display',
			icon: app.tv_icon
		},
		{
			name: 'hallway-display',
			coord: [-37, -168.0],
			desc: 'Information display for hallway.',
			url: 'https://c-beam.cbrp3.c-base.org/he1display',
			icon: app.tv_icon
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
		{
			name: 'cleuse-display',
			coord: [-5, -55.0],
			desc: 'Information display for the airlock.',
			url: 'https://c-beam.cbrp3.c-base.org/events/',
			icon: app.tv_icon
		},
		// Nerdarea		
		{
			name: 'Hyperblast',
			coord: [-47.0, 6.0],
			desc: 'Music-Player in the Nördarea.',
			url: 'http://hyperblast.cbrp3.c-base.org/',
			icon: app.audio_icon
		},
    {
			name: 'nerdarea-display',
			coord: [-37, 6.0],
			desc: 'Information display for Nerdarea.',
			url: 'http://c-flo.cbrp3.c-base.org/nerdarea/',
			icon: app.tv_icon
    },
    {
			name: 'nerdctrl-display',
			coord: [-10, 25.0],
			desc: 'Interactive information display for Nerdarea.',
			url: 'http://c-flo.cbrp3.c-base.org/nerdarea/',
			icon: app.tv_icon
    },
		
		// c-lab 
		{
			name: 'Labblaster',
			coord: [-55.0, 130.0],
			desc: 'Music player for the c-lab',
			url: 'http://labblaster.cbrp3.c-base.org/relaxx/index.php',
			icon: app.audio_icon
		},
    {
			name: 'c-lab-display',
			coord: [-22, 115.0],
			desc: 'Information display for c-lab.',
			url: 'http://c-flo.cbrp3.c-base.org/c_lab/',
			icon: app.tv_icon
    },
		// soundlab
    {
			name: 'soundlab-display',
			coord: [-24, 160.0],
			desc: 'Information display for soundlab.',
			url: 'http://c-flo.cbrp3.c-base.org/soundlab/',
			icon: app.tv_icon
    },
		// weltenbau
		{
			name: 'siri',
			coord: [1.0, 135.0],
			desc: 'Music player for Weltenbau-Lab',
			url: 'http://siri.cbrp3.c-base.org/relaxx/',
			icon: app.audio_icon
			
    },
    {
			name: 'weltenbau-display',
			coord: [22, 115.0],
			desc: 'Information display for weltenbaulab.',
			url: 'http://c-flo.cbrp3.c-base.org/weltenbaulab/',
			icon: app.tv_icon
    },
	//	{
	//		name: '3D-Printer Cams',
	//		coord: [-30.0, 115.0],
	//		desc: 'Webcams and Webinterface of the 3D-Printers',
	//		url: 'http://3dp.cbrp3.c-base.org/',
	//		icon: app.video_icon
	//	},

		// robolab
		{
			name: 'Roboblast',
			coord: [4.0, 70.0],
			desc: 'Music player for the robolab',
			url: 'http://roboblast.cbrp3.c-base.org',
			icon: app.audio_icon
		},
		{
			name: 'roboblast-display',
			coord: [5.0, 60.0],
			desc: 'Information display for robolab.',
			url: 'http://c-flo.cbrp3.c-base.org/robolab/',
			icon: app.tv_icon
		},
		// werkstatt
		{
			name: 'Mechblast',
			coord: [29.0, 35.0],
			desc: 'Music player for the workshop',
			url: 'http://mechblast.cbrp3.c-base.org',
			icon: app.audio_icon
		},
		{
			name: 'mechblast-display',
			coord: [30.0, 25.0],
			desc: 'Information display for workshop.',
			url: 'http://c-flo.cbrp3.c-base.org/workshop/',
			icon: app.tv_icon
		}
	
	];
	
})();
	
