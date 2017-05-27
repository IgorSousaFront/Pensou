var gulp    	= require('gulp'),
sass        	= require('gulp-sass'),
csso        	= require('gulp-csso'),
concat      	= require('gulp-concat'),
uglify      	= require('gulp-uglify'),
fileinclude 	= require('gulp-file-include'),
sync        	= require('browser-sync');

gulp.task('serverRun', function() {
    sync.init({
        proxy: "localhost/Pensou/public/"
    });
});

gulp.task('sass', function () {
	return gulp.src([
		'assets/sass/main.scss',
		'bower_components/owl.carousel/dist/assets/owl.carousel.min.css'
	])
	.pipe(sass().on('error', sass.logError))
	.pipe(csso())
	.pipe(concat('main.css'))
	.pipe(gulp.dest('./public/css/'))
    .pipe(sync.stream());
});

gulp.task('js', function () {
	return gulp.src([
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
		'bower_components/jquery-cycle2/build/jquery.cycle2.min.js',
		'bower_components/jquery-cycle2/build/plugin/jquery.cycle2.carousel.min.js',
		'bower_components/formstone/dist/js/core.js',
		'bower_components/formstone/dist/js/touch.js',
		'bower_components/formstone/dist/js/transition.js',
		'bower_components/formstone/dist/js/lightbox.js',
		'bower_components/owl.carousel/dist/owl.carousel.min.js',
		'assets/js/main.js'
	])
	.pipe(concat('main.js'))
	.pipe(gulp.dest('public/js/'))
    .pipe(sync.stream());
});

gulp.task('fileinclude', function() {
  gulp.src([
		'./*.php',
		'/components/*.php'
	])
	.pipe(fileinclude({
	  prefix: '@@',
	  indent: true,
	  basepath: './'
	}))
  .pipe(gulp.dest('./public/'))
  .pipe(sync.stream());
});

gulp.task('default', ['sass', 'js', 'fileinclude', 'serverRun'], function() {
  console.log('\n Está trabalhando! \n');
});

gulp.task('watch', ['default'], function () {
  gulp.watch('assets/sass/*.scss', ['sass']);
  gulp.watch('assets/js/*.js', ['js']);
  gulp.watch('components/*.php', ['fileinclude']);
  gulp.watch('*.php', ['fileinclude']);
  gulp.watch('*/*', ['serverRun']);
});