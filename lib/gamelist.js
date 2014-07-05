'use strict';

var config = require('../config.json');
var System = require('./system.js');
var $ = require('jquery');

var GameList = function() {
	var self = this;
	this._systems = [];

	this._currentSystem = 0;

	config.emulators.forEach(function(emulator) {
		self._systems.push(new System(emulator));
	});
};

GameList.prototype.open = function() {
	this._systems[this._currentSystem].load();
};

GameList.prototype.handleDown = function() {
	var next = $('.active').removeClass('active').next();
	if(next[0] == null) {
		next = $('#gamelist').find('li:first-child');
	}
	next.addClass('active');
};

GameList.prototype.handleUp = function() {
	var prev = $('.active').removeClass('active').prev();
	if(prev[0] == null) {
		prev = $('#gamelist').find('li:last-child')
	}
	prev.addClass('active');
};

GameList.prototype.handleEnter = function() {
	$('.active').click();
};

GameList.prototype.handleRight = function() {
	this._currentSystem++;
	if(this._currentSystem > (this._systems.length - 1))
		this._currentSystem = 0;

	this._systems[this._currentSystem].load();
};

GameList.prototype.handleLeft = function() {
	this._currentSystem--;
	if(this._currentSystem < 0)
		this._currentSystem = this._systems.length - 1;

	this._systems[this._currentSystem].load();
};

module.exports = GameList;