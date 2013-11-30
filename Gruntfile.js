// Generated on 2013-10-18 using generator-angular 0.4.0
'use strict';
var LIVERELOAD_PORT = 35729;

var mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);


    // configurable paths
    var config = {
        app: ''
    };


    grunt.initConfig({
        app: config,
        watch: {
        
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '{,**/}**.html',
                    '<%= app.app %>/styles/{,**/}**.css'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
               
                keepalive:true,
                livereload: LIVERELOAD_PORT
            },
            livereload: {
                options: {
                    open: true,
                  base: [
                    'src/platypus'
                  ]
                }
              }
        }
    });


    grunt.registerTask('server', [
        'connect:livereload'
    ]);

    grunt.registerTask('default', [
        'server'
    ]);
};