var gulp = require('gulp'),
jshint = require('gulp-jshint'),
concat = require('gulp-concat'),
stylish = require('jshint-stylish'),
handleErrors = require('../utils/handleErrors');
uglify = require('gulp-uglify'),

dest = 'client/dist';

var vendors = [
	'client/libs/angular/angular.js',
	'client/libs/angular-new-router/dist/router.es5.min.js'
];

var burn = [
	'client/js/*.js', 
	'client/components/*/*.js'
];

gulp.task('js', ['jshint', 'burn', 'vendor']);

gulp.task('burn', function(){
	return gulp.src(vendors)
	.pipe(concat('vendors.min.js'))
	.pipe(uglify())
	.on('error', handleErrors)
	.pipe(gulp.dest(dest));
});

gulp.task('vendor', function(){
	return gulp.src(burn)
	.pipe(concat('burn.js'))
	.pipe(gulp.dest(dest))
	.pipe(uglify())
	.pipe(concat('burn.min.js'))
	.pipe(gulp.dest(dest))
	.on('error', handleErrors);
});
