'use strict';

var config = require('../config.json');
var System = require('./system.js');
var $ = require('jquery');

var GameList = function(windowmanager) {
	var self = this;

	this.name = 'gamelist';
	this._root = $('#window-gamelist');
	this._gamelist = this._root.find('#gamelist');

	this._windowmanager = windowmanager;
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
	var next = this._gamelist.find('.active').removeClass('active').next();
	if(next[0] == null) {
		next = this._gamelist.find('li:first-child');
	}
	next.addClass('active');
};

GameList.prototype.handleUp = function() {
	var prev = this._gamelist.find('.active').removeClass('active').prev();
	if(prev[0] == null) {
		prev = this._gamelist.find('li:last-child')
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

GameList.prototype.handleEscape = function() {
	this._windowmanager.open('mainmenu');
};

module.exports = GameList;