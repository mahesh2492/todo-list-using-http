(function () {
  'use strict';
  var gulp = require('gulp');
  var del = require('del');
  var paths = {
    htmlPages: ['src/app/**/*.html'],
    cssPages: 'src/app/**/*.css',
    copySystemConfig: './src/systemjs.config.extras.js',
    copySystemExtrasConfig: './src/systemjs.config.js',
  };

  gulp.task('clean-all', function (done) {
    del('src/dist/', done);
  });


  gulp.task('copy-html', function () {
    return gulp.src(paths.htmlPages)
      .pipe(gulp.dest('src/dist/app'));
  });

  gulp.task('copy-css', function () {
    return gulp.src(paths.cssPages)
      .pipe(gulp.dest('src/dist/app'));
  });

})();

