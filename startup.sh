#Set sound to analogue port.
modprobe snd_bcm2835
amixer cset numid=3 1
amixer  sset PCM,0 100%
/usr/local/bin/node /home/pi/dog/node/app.js
