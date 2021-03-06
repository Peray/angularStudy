var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;


gulp.task('sass', function() {
	gulp.src('src/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/css'));
});

gulp.task('browserSync', function() {
	browserSync.init({
        server: {
			port: 8080,
            baseDir: './'
        },
        startPath: '/src/html/upload.html'
    });
    gulp.watch(['src/**/*.scss', 'src/**/*.js', './*.html', 'src/**/*.html'], ['sass']).on('change', reload);
});

gulp.task('default', ['browserSync']);

