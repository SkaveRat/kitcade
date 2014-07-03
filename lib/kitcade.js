var SystemHandler = require('./lib/systemhandler.js');
var KeyHandler = require('./lib/keyhandler.js');

var gui = require('nw.gui');
//var win = gui.Window.get();
//win.enterFullscreen();

(function(){
	var systemhandler = new SystemHandler();
	systemhandler.start();

	new KeyHandler(systemhandler, gui);
})();

