module.exports = function (grunt) {

    //project config
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        uglify: {
            target: {
                files: {
                    'js/script.min.js': 'js/script.js'
                }
            }
        },
        eslint: {
            target: "src/script.js",
            options: {
                configFile: 'conf/eslint.json'
            }
        },
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "js/script.js": "src/script.js"
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/script.js'],
                tasks: ['default'],
                options: {
                    spawn: false
                }
            }
        }
    });

    //Load the plugins
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Default Grunt tasks
    grunt.registerTask('default', ['eslint', 'babel', 'uglify', 'watch']);
};