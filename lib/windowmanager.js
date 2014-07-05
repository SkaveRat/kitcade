'use strict';

var $ = require('jquery');
var keymap = require('../keymap.json');

var GameList = require('./gamelist.js');
var MainMenu = require('./mainmenu.js');

var WindowManager = function(gui) {
	this._gui = gui;

	var self = this;

	this._windows = {
		'gamelist': new GameList(self),
		'mainmenu': new MainMenu(self)
	};

	this._activeWindow = this._windows['gamelist'];

	$('body').keydown(function(evnt){
		var command = keymap[evnt.which];
		if(command !== undefined) {

			if(self._activeWindow[command] !== undefined) {
				self._activeWindow[command]();
			}else{
				console.log("window '" + self._activeWindow.name + "' missing command: " + command);
			}
		}else{
			console.log("unbound key pressed: " + evnt.which);
		}
	});

	this._activeWindow.open();
};

WindowManager.prototype.open = function(windowname) {
	this._activeWindow = this._windows[windowname];
	this._activeWindow.open();
};

WindowManager.prototype.quit = function() {
	this._gui.Window.get().close();
};

module.exports = WindowManager;