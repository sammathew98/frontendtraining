var gulp = require('gulp');
util = require("gulp-util"),//https://github.com/gulpjs/gulp-util
sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
autoprefixer = require('gulp-autoprefixer'),//https://www.npmjs.org/package/gulp-autoprefixer
minifycss = require('gulp-minify-css'),//https://www.npmjs.org/package/gulp-minify-css
rename = require('gulp-rename'),//https://www.npmjs.org/package/gulp-rename
log = util.log;
const { series } = require('gulp');

gulp.task("sass", function() {
  // place code for your default task here
  log("Generate CSS files " + (new Date()).toString());
    return gulp.src("./scss/*.scss")
		.pipe(sass({ style: 'expanded' }))
					.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
		.pipe(gulp.dest("target/css"))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('target/css'));
});


gulp.task("watch", function(){
	log("Watching scss files for modifications");
	return gulp.watch("./scss/*.scss", series('sass'));
});