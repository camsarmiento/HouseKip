const gulp =  require ('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const pump = require('pump');
const sass = require ('gulp-sass');
const browserSync = require("browser-sync").create();

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


gulp.task('default',['html','imageMin','jsMin','sass']);

gulp.task('watch', function(){
	gulp.watch('src/*.html',['html']);
	gulp.watch('src/img/*',['imageMin']);
	gulp.watch('src/js/*.js',['jsMin']);
	gulp.watch('src/sass/*.scss',['sass']);
});
