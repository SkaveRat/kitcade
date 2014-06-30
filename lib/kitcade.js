var keymap = require('./keymap.json');
var gui = require('nw.gui');
var util = require('util');
var System = require('./lib/system.js');
var SystemHandler = require('./lib/systemhandler.js');
var win = gui.Window.get();

//win.enterFullscreen();

(function(){
	new SystemHandler().start();
})();

function handleLeft() {
	console.log("left");
}
function handleRight() {
	var foo = new System("FOO");
	var bar = new System("BAR");

	foo.load();
	bar.load();
	console.log("right");
}
function handleDown() {
	var next = $('.active').removeClass('active').next();
	if(next[0] == null) {
		next = $('#gamelist').find('li:first-child');
	}
	next.addClass('active');
}
function handleUp() {
	var prev = $('.active').removeClass('active').prev();
	if(prev[0] == null) {
		prev = $('#gamelist').find('li:last-child')
	}
	prev.addClass('active');
}

function handleEnter() {
	$('.active').click();
}

$('body').keydown(function(evnt){
	var command = keymap[evnt.which];
	if(command !== undefined) {
		window[command]();
	}else{
		console.log("unbound key pressed: " + event.which);
	}
});