var config = require('./config.json');
var keymap = require('./keymap.json');
var gui = require('nw.gui');
var fs = require('fs');
var spawn = require('child_process').spawn;
var util = require('util');
var win = gui.Window.get();

//win.enterFullscreen();


function handleLeft() {
	console.log("left");
}
function handleRight() {
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

config.emulators.forEach(function(emulator) {
	var roms = fs.readdirSync(emulator.rompath);
	var romlist = $('#gamelist');

	$('#name').text(emulator.name);

	roms.forEach(function(romname) {
		romlist.append(generateRomNode(romname, emulator));
	});


	start();
});

function runEmulator(evnt) {
	var $node = $(evnt.target);
	var commands = $node.data('command').split(' ');

	spawn(commands.shift(), commands.concat($node.data('filepath')));
}

function generateRomNode(filename, emulator) {
	var $romEntry = $('<li/>');
	$romEntry.text(filename);
	$romEntry.data('command', emulator.command);
	$romEntry.data('filepath', emulator.rompath + filename);
	$romEntry.click(runEmulator);
	return $romEntry;
}

function start() {
	$($('#gamelist').find('li')[0]).addClass('active');
}