module.exports = function (grunt) {

    // Project configuration.
    const imagemin = require('imagemin');
    const imageminJpegtran = require('imagemin-jpegtran');
    const imageminPngquant = require('imagemin-optipng');

    grunt.initConfig({
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/dist/'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['style.css'],
                    dest: 'css/build/',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/build/perfmatters.min.js': ['js/perfmatters.js']
                }
            }
        },
        critical: {
            test: {
                base: '',
                options: {
                    css: [
                        'css/build/style.min.css'
                    ],
                    width: 1024,
                    height: 900
                },
                src: 'project-webperf.html',
                dest: 'project-webperf.html'
            }
        },
        serve: {
            options: {
               'path': './index.html',
                port: 9000
            }


        }


    });
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-critical');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['imagemin', 'cssmin','uglify','critical','serve']);

};