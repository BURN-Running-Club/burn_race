var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../utils/handleErrors');
var minify = require('gulp-minify-css');

var dir = './client/public',
	src = dir + '/css/*.less',
	dest = dir + '/css';

gulp.task('less', function() {
    var app = gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(less())
        .on('error', handleErrors)
        .pipe(concat('app.css'))
        .pipe(sourcemaps.write())
        .pipe(minify())
        .pipe(gulp.dest(dest));

    return app;
});
