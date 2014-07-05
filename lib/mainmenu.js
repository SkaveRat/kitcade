'use strict';

var $ = require('jquery');

var MainMenu = function(windowmanager) {
	this.name = 'mainmenu';
	this._root = $('#window-main-menu');
	this._windowmanager = windowmanager;
};

MainMenu.prototype.open = function() {
	this._root.removeClass('hidden');
};

MainMenu.prototype.close = function() {
	this._root.addClass('hidden');
};

MainMenu.prototype.handleDown = function() {
	var next = this._root.find('.active').removeClass('active').next();
	if(next[0] == null) {
		next = this._root.find('a:first-child');
	}
	next.addClass('active');
};

MainMenu.prototype.handleUp = function() {
	var prev = this._root.find('.active').removeClass('active').prev();
	if(prev[0] == null) {
		prev = this._root.find('a:last-child')
	}
	prev.addClass('active');
};

MainMenu.prototype.handleEnter = function() {
	var action = this._root.find('.active').data('action');

	if(action === 'exit') {
		this._windowmanager.quit();
	}
};

MainMenu.prototype.handleEscape = function() {
	this._windowmanager.close('mainmenu');
};

module.exports = MainMenu;