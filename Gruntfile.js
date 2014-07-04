module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('./package.json'),
		nodewebkit: {
			options: {
				build_dir: './build',
				mac: false,
				win: false,
				linux32: false,
				linux64: true
			},
			src: ['./**/*']
		}
	});

	grunt.loadNpmTasks('grunt-node-webkit-builder');

	grunt.registerTask('default', ['nodewebkit']);
};
