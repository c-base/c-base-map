c-base-map
==========

An interactive map of available areas and interfaces at c-base.

Installation
------------

No Installation is necessary anymore. Dependency to Bower was removed.

Adding Your Own Markers
-----------------------

Open file markers.js and add an entry like this:

	// Nerdarea
	{
		name: 'Nerdarea'
		coord: [0, 0],
		desc: 'The Nerdarea is an area for nerds.',
		url: 'http://c-base.org/'
		// optional icon:
		icon: app.red_icon
	},

The available icons are listed in icons.js.

If you want to have new icons, go to: http://mapicons.nicolasmollet.com/. All the Icons are currently coloured in #FF9900. 

Recreating Map Tiles
--------------------

If, for some reason, you want to re-cut the map tiles, use the following:

	cd map-tiles
	./imagemagick.sh clean-map-ohne-label.png

(or replace ''clean-map-ohne-label.png'' with your desired filename).

Credits
-------

c-base-map ist based on 30C3-Map by Michael Kreil: https://github.com/MichaelKreil/30c3-map
