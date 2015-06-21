var gulp = require('gulp');
var connect = require('gulp-connect');
var rename = require("gulp-rename");
var del = require('del');
var shell = require('gulp-shell');
 
gulp.task('serve', function() {
  connect.server({
    livereload: true,
    port:8000
  });
});

gulp.task('build',function(){
	del(['./build/**/*']);

	gulp.src('./index_prod.html')
	.pipe(rename("index.html"))
	.pipe(shell(['jspm bundle-sfx src/main build/app.js']))
	.pipe(gulp.dest('./build'));
});

gulp.task('serve-build',['build'],function(){
  	connect.server({
  		root:'build',
		port:8001
  	});
});