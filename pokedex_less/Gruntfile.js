module.exports = function (grunt) {
    grunt.initConfig({
        package: grunt.file.readJSON('package.json'),
        clean: ['dist/', 'src/css/'],
        uglify: {
            build: {
                files: [
                    {
                        src: 'src/*.js',
                        dest: 'dist/js/pokedex.min.js'
                    }
                ]
            }
        },
        less: {
            build: {
                options: {
                    paths: ['src/css/']
                },
                files: {
                    'src/css/pokedex.css': 'src/pokedex.less'
                }
            }
        },
        cssmin: {
            target: {
                files: [
                    {
                        src: 'src/css/pokedex.css',
                        dest: 'dist/css/pokedex.min.css'
                    }
                ]
            }
        },
        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            target: {
                files: [
                    {
                        src: 'src/index.html',
                        dest: 'dist/index.html'
                    }
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['clean', 'uglify', 'less', 'cssmin', 'htmlmin']);
};