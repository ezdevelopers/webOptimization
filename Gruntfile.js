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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['imagemin']);

};