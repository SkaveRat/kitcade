'use strict';

var config = require('../config.json');
var System = require('./system.js');
var $ = require('jquery');

var SystemHandler = function() {
	config.emulators.forEach(function(emulator) {
		var system = new System(emulator);
		system.load();
	});

};

SystemHandler.prototype.start = function() {
	$($('#gamelist').find('li')[0]).addClass('active');
};

module.exports = SystemHandler;