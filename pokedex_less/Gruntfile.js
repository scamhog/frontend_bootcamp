module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                files: {
                    'dist/js/pokedex.min.js': 'src/*.js'
                }
            }
        },
        clean: {
            folder: "dist/"
        }
    });
    grunt.loadNpmTasks('grunt-clean','grunt-contrib-uglify');
    grunt.registerTask('default', ['clean','uglify']);
};