'use strict';

var config      = require('../config');
var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', function() {

  if (config.devModeStatic) {

    browserSync.init({
      server: {
        baseDir: config.buildDir
      },
      notify: false,
      open: false
    });

  } else {

    // Use BS as proxy for express with SSR.
    browserSync({
      port: config.serverPort + 1,
      proxy: 'localhost:' + config.serverPort,
      notify: false,
      open: false
    });
  }

});