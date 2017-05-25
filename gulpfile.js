var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "build"
    }
  });
});

gulp.task('serve', ['js', 'html'], function() {

  browserSync.init({
    server: 'build'
  });

  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('src/index.html').on('change', browserSync.reload);

});

gulp.task('components', function () {
  gulp.src('node_modules/aframe/dist/aframe-master.js')
    .pipe(gulp.dest('build/js/components'));

  gulp.src('node_modules/aframe-animation-component/dist/aframe-animation-component.js')
    .pipe(gulp.dest('build/js/components'));

  gulp.src('node_modules/aframe-event-set-component/dist/aframe-event-set-component.min.js')
    .pipe(gulp.dest('build/js/components'));

  gulp.src('node_modules/aframe-gridhelper-component/dist/aframe-gridhelper-component.min.js')
    .pipe(gulp.dest('build/js/components'));

  gulp.src('node_modules/aframe-layout-component/dist/aframe-layout-component.min.js')
    .pipe(gulp.dest('build/js/components'));

  gulp.src('node_modules/aframe-particle-system-component/dist/aframe-particle-system-component.min.js')
    .pipe(gulp.dest('build/js/components'));

  gulp.src('node_modules/aframe-physics-system/dist/aframe-physics-system.min.js')
    .pipe(gulp.dest('build/js/components'));

  gulp.src('node_modules/aframe-template-component/dist/aframe-template-component.min.js')
    .pipe(gulp.dest('build/js/components'));
});

gulp.task('img', function() {
  gulp.src('src/img/*')
    .pipe(gulp.dest('build/img/'));
});

gulp.task('audio', function() {
  gulp.src('src/audio/*')
    .pipe(gulp.dest('build/audio/'));
});

gulp.task('html', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('build/'));
    gulp.watch('src/index.html').on('change', browserSync.reload);
});

gulp.task('js', function () {
  gulp.src('src/js/*.js')
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream());

  gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('build/js/'))
    .pipe(browserSync.stream());
});

gulp.task('watch', ['js', 'html'], browserSync.reload);

gulp.task('default', ['img', 'audio', 'watch', 'components', 'serve'], function () {});