'use strict';

var keymap = require('../keymap.json');
var $ = require('jquery');

/**
 * @param systemHandler
 * @constructor
 */
var KeyHandler = function(systemHandler) {
	this._systemHandler = systemHandler;
	var self = this;

	$('body').keydown(function(evnt){
		var command = keymap[evnt.which];
		if(command !== undefined) {
			self[command]();
		}else{
			console.log("unbound key pressed: " + event.which);
		}
	});

};

KeyHandler.prototype.handleLeft = function() {
	console.log("left");
};


KeyHandler.prototype.handleRight = function() {
	console.log("right");
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




module.exports = KeyHandler;