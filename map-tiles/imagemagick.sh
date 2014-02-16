#!/bin/bash

for i in 0 1 2 3 4 5 6 ; do 
	for j in `seq 0 32` ; do
		mkdir -p $i/$j
	done
done

convert "$1" -filter Box -resize 256x256 -crop 256x256 -set filename:tile "%[fx:page.x/256]/%[fx:page.y/256]" +repage +adjoin "0/%[filename:tile].jpg"
convert "$1" -filter Box -resize 512x512 -crop 256x256 -set filename:tile "%[fx:page.x/256]/%[fx:page.y/256]" +repage +adjoin "1/%[filename:tile].jpg"
convert "$1" -filter Box -resize 1024x1024 -crop 256x256 -set filename:tile "%[fx:page.x/256]/%[fx:page.y/256]" +repage +adjoin "2/%[filename:tile].jpg"
convert "$1" -filter Box -resize 2048x2048 -crop 256x256 -set filename:tile "%[fx:page.x/256]/%[fx:page.y/256]" +repage +adjoin "3/%[filename:tile].jpg"
convert "$1" -filter Box -resize 4096x4096 -crop 256x256 -set filename:tile "%[fx:page.x/256]/%[fx:page.y/256]" +repage +adjoin "4/%[filename:tile].jpg"
# convert "$1" -filter Box -resize 8192x8192 -crop 256x256 -set filename:tile "%[fx:page.x/256]/%[fx:page.y/256]" +repage +adjoin "5/%[filename:tile].jpg"
# convert "$1" -crop 256x256 -set filename:tile "%[fx:page.x/256]/%[fx:page.y/256]" +repage +adjoin "6/%[filename:tile].jpg"
