module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.initConfig({

    pkg: '<json:package.json>',

    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: {
          "_layouts/default.html": "_src/jade/default.jade",
          "_layouts/error.html": "_src/jade/error.jade",
          "_layouts/page.html": "_src/jade/page.jade",
          "_layouts/landingpage.html": "_src/jade/landingpage.jade",
          "_layouts/sitemap.xml": "_src/jade/sitemap.jade"
        }
      }
    },


    watch: {
      jade: {
        files: ['_src/jade/*.jade'],
        tasks: ['jade'],
      },
      content: {
        files: ['_site/**/*.html', '_site/**/*.css'],
        options: {
          livereload: true
        }
      }
    }

  });

  grunt.registerTask('default', 'Compile assets', ['jade']);
}
