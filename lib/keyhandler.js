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
	var next = $('.active').removeClass('active').next();
	if(next[0] == null) {
		next = $('#gamelist').find('li:first-child');
	}
	next.addClass('active');
};
KeyHandler.prototype.handleUp = function() {
	var prev = $('.active').removeClass('active').prev();
	if(prev[0] == null) {
		prev = $('#gamelist').find('li:last-child')
	}
	prev.addClass('active');
};

KeyHandler.prototype.handleEnter = function() {
	$('.active').click();
};




module.exports = KeyHandler;