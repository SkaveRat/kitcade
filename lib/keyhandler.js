'use strict';

var keymap = require('../keymap.json');
var $ = require('jquery');

/**
 * @param systemHandler
 * @param gui
 * @constructor
 */
var KeyHandler = function(systemHandler, gui) {
	this._systemHandler = systemHandler;
	this._gui = gui;
	var self = this;

	$('body').keydown(function(evnt){
		var command = keymap[evnt.which];
		if(command !== undefined) {
			self[command]();
		}else{
			console.log("unbound key pressed: " + evnt.which);
		}
	});

};

KeyHandler.prototype.handleLeft = function() {
	this._systemHandler.previousSystem();
};


KeyHandler.prototype.handleRight = function() {
	this._systemHandler.nextSystem();
};
KeyHandler.prototype.handleDown = function() {
	this._systemHandler.nextGame();
};
KeyHandler.prototype.handleUp = function() {
	this._systemHandler.previousGame();
};

KeyHandler.prototype.handleEnter = function() {
	this._systemHandler.startGame();
};

KeyHandler.prototype.handleEscape = function() {
	var win = this._gui.Window.get();
	win.close();
};


module.exports = KeyHandler;