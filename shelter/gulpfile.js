'use strict';

var gulp = require('gulp'),
    gp   = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create(),
    include = require("posthtml-include");


gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    browserSync.watch('build',browserSync.reload)
});

gulp.task('sass', function () {
  return gulp.src('src/sass/style.scss')
    .pipe(gp.sourcemaps.init())
    .pipe(gp.sass({}))
    .pipe(gp.autoprefixer(
      ['last 15 versions', '> 5%'],
      {cascade: true
    }))
    .on("error", gp.notify.onError({
      title: "stile"
    }))
    .pipe(gp.sourcemaps.write())
    .pipe(gulp.dest('build/css/'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest("build/css/"));
});



gulp.task("html", function () {
 return gulp.src("src/*.html")
 .pipe(gp.posthtml([
 include()
 ]))
 .pipe(gulp.dest("build"));
});

gulp.task('watch',function () {
  gulp.watch('src/sass/**/*.scss',gulp.series('sass'));
  gulp.watch('src/*.html',gulp.series('html'));
});

gulp.task('default',gulp.series(
  gulp.parallel('sass', 'html'),
  gulp.parallel('watch','serve')
));

gulp.task("sprite", function () {
   return gulp.src("src/assets/SVG-*.svg")
   .pipe(gp.svgstore({
      inlineSvg: true
    }))
   .pipe(gp.rename("sprite.svg"))
   .pipe(gulp.dest("build/assets"));
});
