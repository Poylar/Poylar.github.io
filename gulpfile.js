var gulp = require('gulp'),
  sass = require('gulp-sass'),
  watchSass = require("gulp-watch-sass"),
  imagemin = require('gulp-imagemin');;

gulp.task('sass', function () {
  gulp.src('assets/style/sass/screen.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('assets/style/css/'));

  return gulp.src('package.json')

});


gulp.task("sass:watch", () => watchSass([
  "assets/style/sass/screen.scss",
  "assets/style/sass/*.scss"
])
  .pipe(sass({ outputStyle: 'compressed' }))
  .pipe(gulp.dest("assets/style/css/")));

gulp.task('default', () =>
  gulp.src('assets/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('/aseets/img'))
);