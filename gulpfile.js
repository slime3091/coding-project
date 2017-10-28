var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require("gulp-rename");
 
// Basic usage 
gulp.task('scripts', function() {
    // Single entry point to browserify 
    gulp.src('public/unbundled.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(rename('bundled.js'))
        .pipe(gulp.dest('public/'))
});
gulp.task('default', [ 'scripts' ]);