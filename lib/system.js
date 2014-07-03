'use strict';

var fs = require('fs');
var $ = require('jquery');
var spawn = require('child_process').spawn;

var System = function(config){
	this._config = config;
};

System.prototype.load = function() {
	var self = this;

	var roms = fs.readdirSync(this._config.rompath);

	var romlist = $('#gamelist');
	$('#name').text(this._config.name);

	romlist.empty();
	roms.forEach(function(romname) {
		romlist.append(self._generateRomNode(romname, self._config));
	});

	$(romlist.find('li')[0]).addClass('active');
};

System.prototype._generateRomNode = function(filename) {
	var self = this;

	var $romEntry = $('<li/>');
	$romEntry.text(filename);
	$romEntry.data('command', this._config.command);
	$romEntry.data('filepath', this._config.rompath + filename);
	$romEntry.click(self._runEmulator);
	return $romEntry;
};

System.prototype._runEmulator = function(evnt) {
	var $node = $(evnt.target);
	var commands = $node.data('command').split(' ');

	spawn(commands.shift(), commands.concat($node.data('filepath')));
};


module.exports = System;