var gui = require('nw.gui');
var win = gui.Window.get();

win.enterFullscreen();

var spawn = require('child_process').spawn;

var mp = spawn('mousepad');

mp.on('exit', function() {
	console.log("Mousepad exited!");
});
