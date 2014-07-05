'use strict';

var WindowManager = require('./lib/windowmanager.js');

var gui = require('nw.gui');

(function(){
	new WindowManager(gui);
})();

