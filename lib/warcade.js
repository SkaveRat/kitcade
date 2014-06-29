var config = require('./config.json');
var gui = require('nw.gui');
var fs = require('fs');
var spawn = require('child_process').spawn;
var util = require('util');
var win = gui.Window.get();

//win.enterFullscreen();


config.emulators.forEach(function(emulator) {
	var roms = fs.readdirSync(emulator.rompath);
	var romlist = $('#gamelist');

	$('#name').text(emulator.name);

	roms.forEach(function(romname) {
		romlist.append(generateRomNode(romname, emulator));
	});
});

function runEmulator(evnt) {
	var $node = $(evnt.target);
	var args = $node.data('commandargs').concat($node.data('filepath'));
	spawn($node.data('command'), args);
}

function generateRomNode(romname, emulator) {
	var $romEntry = $('<li/>');
	$romEntry.text(romname);
	$romEntry.data('filepath', emulator.rompath + romname);
	$romEntry.data('command', emulator.command);
	$romEntry.data('commandargs', emulator.commandargs);
	$romEntry.click(runEmulator);
	return $romEntry;
}