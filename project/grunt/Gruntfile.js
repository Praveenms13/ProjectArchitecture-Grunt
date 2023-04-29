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
        dest: "dist/style.css",
      },
      js: {
        src: [/*"bower_components/jquery/dist/jquery.js",*/ "../js/*.js"],
        dest: "dist/script.js",
      },
      scss: {
        src: ["../scss/*.scss"],
        dest: "dist/style.scss",
      },
    },
    //---------------------------------------------------------------------------------------------------------------------------------------
    //---------------------------------------------------CSS Min-------------------------------------------------------------------------
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1,
      },
      css: {
        files: {
          "../../htdocs/css/style.css": ["dist/style.css"],
        },
      },
      scss: {
        files: {
          "../../htdocs/css/app.css": ["../../htdocs/css/app.css"],
        }
      },
    },
    //---------------------------------------------------------------------------------------------------------------------------------------
    //---------------------------------------------------SCSS Task-------------------------------------------------------------------------
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          '../../htdocs/css/app.css': 'dist/style.scss',
        },
      },
    },
    //---------------------------------------------------------------------------------------------------------------------------------------
    //---------------------------------------------------Js Min-------------------------------------------------------------------------
    uglify: {
      minify: {
        options: {
          sourceMap: true,
        },
        files: {
          "../../htdocs/js/script.min.js": ["dist/script.js"],
        },
      },
    },
    //---------------------------------------------------------------------------------------------------------------------------------------
    //-------------------------------------------------- Bower Copy Task -----------------------------------------------------------------------
    copy: {
      jquery: {
        files: [
          // includes files within path and its sub-directories
          {
            expand: true,
            flatten: true,
            filter: "isFile",
            src: ["bower_components/jquery/dist/*"],
            dest: "../../htdocs/js/jquery/",
          },
        ],
      },
    },
    //-----------------------------------------------------------------------------------------------------------------------------------
    //-----------------------------------------------------Obfuscator Task-----------------------------------------------------------------------------
    obfuscator: {
      options: {
        banner: "// obfuscated with grunt-contrib-obfuscator.\n",
        debugProtection: true,
        debugProtectionInterval: true,
        domainLock: ["grunt.praveenms.site"],
      },
      task1: {
        options: {
          // options for each sub task
        },
        files: {
          "../../htdocs/js/script.ob.js": ["dist/script.js"],
        },
      },
    },
    //----------------------------------------------------------------------------------------------------------------------------------------
    //-------------------------------------------------- Watch Task -----------------------------------------------------------------------
    watch: {
      css: {
        files: ["../css/*.css"],
        tasks: ["concat:css", "cssmin:css"],
        options: {
          spawn: false,
        },
      },
      js: {
        files: ["../js/*.js"],
        tasks: ["concat:js", "uglify", "obfuscator"],
        options: {
          spawn: false,
        },
      },
      scss: {
        files: ["../scss/*.scss"],
        tasks: ["concat:scss", "sass", "cssmin:scss"],
        options: {
          spawn: false,
        },
      }
    },
    // -------------------------------------------------------------------------------------------------------------------------------------
  });
  // -------------------------------------------------------------------------------------------------------------------------------------
  grunt.loadNpmTasks("grunt-contrib-obfuscator");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask("default", [
    "copy",
    "concat",
    "cssmin:css",
    "sass",
    "cssmin:scss",
    "uglify",
    "obfuscator",
    "watch",
  ]);
}; 
