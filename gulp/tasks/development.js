'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = false;

  return runSequence(['sass', 'browserify', 'assemble', 'imagemin', 'copyFonts', 'copyIcons'], 'watch', cb);

});