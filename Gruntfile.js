module.exports = function (grunt) {

    //project config
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        uglify: {
            target: {
                files: {
                    'js/gtmCollectMetadata.min.js': 'js/gtmCollectMetadata.js',
                    'js/gtmDiscoveryDataAttribute.min.js': 'js/gtmDiscoveryDataAttribute.js'
                }
            }
        },
        eslint: {
            target: [
                "src/gtmCollectMetadata.js",
                "src/gtmDiscoveryDataAttribute.js"
            ],
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
                    'js/gtmCollectMetadata.js': 'src/gtmCollectMetadata.js',
                    'js/gtmDiscoveryDataAttribute.js': 'src/gtmDiscoveryDataAttribute.js'
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    'src/gtmCollectMetadata.js',
                    'src/gtmDiscoveryDataAttribute.js'
                ],
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