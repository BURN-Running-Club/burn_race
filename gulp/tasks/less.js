var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../utils/handleErrors');
var minify = require('gulp-minify-css');

var src = 'client/css/*.less',
	dest = 'client/dist';

gulp.task('less', function() {
    var app = gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('burn.css'))
        .pipe(gulp.dest(dest))
        .pipe(sourcemaps.write())
        .pipe(minify())
        .pipe(concat('burn.min.css'))
        .on('error', handleErrors)
        .pipe(gulp.dest(dest));

    return app;
});
