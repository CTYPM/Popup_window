var gulp = require('gulp');
var sass = require('gulp-sass');
var spritesmith = require('gulp.spritesmith');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function(){
  return gulp.src('./src/style.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function () {
  gulp.watch('./src/*.scss', gulp.series('sass'));
});

gulp.task('sprite', function() {
	return new Promise(function(resolve, reject) {
	    var spriteData = 
	        gulp.src('./src/png/*.png') // путь, откуда берем картинки для спрайта
	            .pipe(spritesmith({
	                imgName: 'png/sprite.png',
	                cssName: 'sprite.css',
	            }));

	    spriteData.img.pipe(gulp.dest('./dist/png/')); // путь, куда сохраняем картинку
	    spriteData.css.pipe(gulp.dest('./dist/')); // путь, куда сохраняем стили
	    resolve();
	});
});

gulp.task('default', gulp.parallel('sass', 'sprite', 'watch'));