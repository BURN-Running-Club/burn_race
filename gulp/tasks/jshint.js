var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	handleErrors = require('../utils/handleErrors'),

	files = 'client/js/*.js';

gulp.task('jshint', function(){
    return gulp.src(files)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .on('error', handleErrors);
});
