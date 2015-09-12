var gulp = require('gulp'),
  sass = require('gulp-sass'),
  jade = require('gulp-jade'),
  run = require('gulp-sequence'),
  babel = require('gulp-babel'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat');

gulp.task('build', function (callback) {
  run(
      'sass',
      'jade',
      'js',
      function (error) {
        if (error) {
          console.log(error.message);
        } else {
          console.log('success');
        }
        callback(error);
      });
});

gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('../build/css/'));
});

gulp.task('watch', function(){
  gulp.watch('.',['build']);
});

gulp.task('jade', function() {
  gulp.src('./jade/*.jade')
      .pipe(jade({
        locals: {
          pretty: false,
          globals: {}
        }
      }))
      .pipe(gulp.dest('../build/'))
});

gulp.task('js', function () {
  return gulp.src('./js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(concat('all.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('../build/js'));
});
