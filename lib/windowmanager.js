'use strict';

var $ = require('jquery');
var keymap = require('../keymap.json');

var GameList = require('./gamelist.js');

var WindowManager = function(gui) {
	this._gui = gui;

	var self = this;

	this._windows = {
		'gamelist': new GameList()
	};

	this._activeWindow = this._windows['gamelist'];

	$('body').keydown(function(evnt){
		var command = keymap[evnt.which];
		if(command !== undefined) {

			if(self._activeWindow[command] !== undefined) {
				self._activeWindow[command]();
			}else{
				console.log("current window missing command: " + command);
			}
		}else{
			console.log("unbound key pressed: " + evnt.which);
		}
	});

	this._activeWindow.open();
};

module.exports = WindowManager;