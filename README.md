c-base-map
==========

An interactive map of available areas and interfaces at c-base.

Installation
------------

First install Bower: http://bower.io/

Then (in this directory) run: 

	bower install

Adding Your Own Markers
-----------------------

Open file markers.js and add an entry like this:

	// Nerdarea
	{
		'name': 'Nerdarea'
		'coord': [0, 0],
		'desc': 'The Nerdarea is an area for nerds.',
		'url': 'http://c-base.org/'
	},


Recreating Map Tiles
--------------------

If, for some reason, you want to re-cut the map tiles, use the following:

	cd map-tiles
	./imagemagick.sh clean-map-ohne-label.png

(or replace ''clean-map-ohne-label.png'' with your desired filename).