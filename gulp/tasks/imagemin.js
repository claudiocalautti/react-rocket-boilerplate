'use strict';

var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var imagemin    = require('gulp-imagemin');
var pngquant    = require('imagemin-pngquant');
var mozjpeg     = require('imagemin-mozjpeg');
var browserSync = require('browser-sync');
var config      = require('../config');

gulp.task('imagemin', function() {

  // Run imagemin task on all images
  return gulp.src(config.images.src)
    .pipe(imagemin({
        svgoPlugins: [{
          removeViewBox: false
        }],
        use: [
          pngquant(),
          mozjpeg({
            quality: 90,
            progressive: true
          })
        ]
      }
    ))
    .pipe(gulp.dest(config.images.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));

});