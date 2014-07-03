'use strict';

var config = require('../config.json');
var System = require('./system.js');
var $ = require('jquery');

var SystemHandler = function() {
	var self = this;
	this._systems = [];

	config.emulators.forEach(function(emulator) {
		self._systems.push(new System(emulator));
	});

	this._systems[0].load();
};

SystemHandler.prototype.start = function() {
	$($('#gamelist').find('li')[0]).addClass('active');
};

SystemHandler.prototype.nextGame = function() {
	var next = $('.active').removeClass('active').next();
	if(next[0] == null) {
		next = $('#gamelist').find('li:first-child');
	}
	next.addClass('active');
};

SystemHandler.prototype.previousGame = function() {
	var prev = $('.active').removeClass('active').prev();
	if(prev[0] == null) {
		prev = $('#gamelist').find('li:last-child')
	}
	prev.addClass('active');
};

SystemHandler.prototype.startGame = function() {
	$('.active').click();
};

module.exports = SystemHandler;