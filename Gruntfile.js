module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jshint: {
      all: ["lib/server.js"]
    },

    jscs: {
      all: {
        src: "lib/server.js",
        options: {
            config: ".jscsrc",
            requireCurlyBraces: [ "if" ]
        }

      }
    },

    simplemocha: {
     src: ['test/**/*.js']
    }

  });
  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
  grunt.registerTask('default', ['test']);
}
