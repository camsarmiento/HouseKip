const gulp =  require ('gulp');
const imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var pump = require('pump');
var sass = require ('gulp-sass');

//Move html file to build
gulp.task('html',function(){
	gulp.src('src/*.html')
	.pipe(gulp.dest('build'));
});

//Minify imges 
gulp.task('imageMin', function() {
	gulp.src('src/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('build/img'));
});

//Minify JS
gulp.task('jsMin', function(cd){
	pump([
			gulp.src('src/js/*.js'),
			uglify(),
			gulp.dest('build/js')
		],cd);
});

//Process SASS
gulp.task('sass',function(){
	gulp.src('src/sass/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('build/css'));
});





gulp.task('default', function(){
return console.log('funciona');
});