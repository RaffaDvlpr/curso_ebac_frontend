module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            production:{
                options: {
                    compress: true
                },
                files: {
                    'compressed/main.min.css': 'main.less'
                }
            }
            
        },

        uglify: {
            target: {
                files: {
                    'compressed/main.min.js': 'main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify'])
}