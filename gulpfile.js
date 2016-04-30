var gulp 		= require('gulp'),
    browserSync = require('browser-sync').create(),
    reload 		= browserSync.reload;

gulp.task('watch', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            server: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("*.html").on("change", reload);
});


// Entry point to start Gulp
gulp.task('default', ['watch']);