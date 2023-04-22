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
        src: ["../css/1.css", "../css/2.css", "../css/3.css"],
        dest: "../../htdocs/css/style.css",
      },
    },
    //---------------------------------------------------------------------------------------------------------------------------------------
    //-------------------------------------------------- Watch Task -----------------------------------------------------------------------
    watch: {
      css: {
        files: ["../css/*.css"],
        tasks: ["concat"],
        options: {
          spawn: false,
        },
      },
    },
    // -------------------------------------------------------------------------------------------------------------------------------------
  });
  // -------------------------------------------------------------------------------------------------------------------------------------
  grunt.registerTask("task1", function () {
    console.log("I am Grunt_1, Running !!");
  });

  grunt.registerTask("task2", function () {
    console.log("I am Grunt_2, Running !!");
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.registerTask("default", ["task1", "task2", "concat", "watch"]);
};
