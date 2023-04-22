module.exports = function (grunt) {
  // grunt.registerTask('default', function(){
  //     console.log('I am Default Grunt, Running !!');
  // });
  var currentdate = new Date();
  var datetime =
    "Last Sync: " +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  // --------------------------------------------------Grunt Plugin-----------------------------------------------------------------------
  // Project configuration.
  grunt.initConfig({
    //-------------------------------------------------- Concat Task --------------------------------------------------------------------
    concat: {
      options: {
        separator: "\n",
        sourceMap: true,
        banner: "/* Developed By Praveen on " + datetime + "*/\n",
      },
      css: {
        src: ["../css/*.css"],
        dest: "../../htdocs/css/style.css",
      },
      js: {
        src: ["bower_components/jquery/dist/jquery.js", "../js/*.js"],
        dest: "../../htdocs/js/script.js",
      },
    },
    //---------------------------------------------------------------------------------------------------------------------------------------
    //-------------------------------------------------- Watch Task -----------------------------------------------------------------------
    watch: {
      css: {
        files: ["../css/*.css", "../js/*.js"],
        tasks: ["concat"],
        options: {
          spawn: false,
        },
      },
    },
    // -------------------------------------------------------------------------------------------------------------------------------------
  });
  // -------------------------------------------------------------------------------------------------------------------------------------

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.registerTask("default", ["concat", "watch"]);
};
