var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('./src/style.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function () {
  gulp.watch('./src/*.scss', qulp.series('sass'));
});

gulp.task('default', gulp.series('sass'));
