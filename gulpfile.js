'use strict';

var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

gulp.task('jade', function() {
  gulp.src('static/jade/**/*.jade')
  .pipe($.jade({
    pretty: true
  }))
  .pipe(gulp.dest('static/'));
});

gulp.task('less', function() {
  return gulp.src('static/less/main.less')
         .pipe($.plumber())
         .pipe($.less({ paths: ['.'] }))
         .pipe(gulp.dest('static/css'));
});

gulp.task('watch', function() {
  gulp.watch('static/jade/**/*.jade', [ 'jade' ]);
  gulp.watch('static/less/**/*.less', [ 'less' ]);
});

gulp.task('run', [ 'jade', 'less', 'watch' ], function() {
  return $.run('electron .').exec();
});
