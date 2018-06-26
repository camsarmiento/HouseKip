const gulp =  require ('gulp');
const imagemin = require('gulp-imagemin');




//Move html file to build
gulp.task('html',function(){
	gulp.src('src/*.html')
	.pipe(gulp.dest('build'));
});

//Minify imges 
gulp.task('imageMin', function() {
	gulp.src('src/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('build/img'))
});





gulp.task('default', function(){
return console.log('funciona');
});