var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var handleErrors = require('../utils/handleErrors');

var files = './client/public/js/*.js';

gulp.task('jshint', function(){
    return gulp.src(files)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .on('error', handleErrors);
});
