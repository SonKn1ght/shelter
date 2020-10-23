'use strict';

var gulp = require('gulp'),
    gp   = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create(),
    include = require("posthtml-include");


{
  gulp.task('serve', function () {
    browserSync.init({
      server: {
        baseDir: "./shelter",
        index: "/pages/main/main.html"
      }
    });
    browserSync.watch('./shelter', browserSync.reload)
  });


  gulp.task('sass', function () {
    return gulp.src('src/main/sass/style.scss')
      .pipe(gp.sourcemaps.init())
      .pipe(gp.sass({}))
      .pipe(gp.autoprefixer(
        ['last 15 versions', '> 5%'],
        {
          cascade: true
        }))
      .on("error", gp.notify.onError({
        title: "stile"
      }))
      .pipe(gp.sourcemaps.write())
      .pipe(gulp.dest('shelter/pages/main/'))
      .pipe(browserSync.reload({stream: true}))
    // .on('end',browserSync.reload);
  });


  gulp.task("html", function () {
    return gulp.src("src/main/*.html")
      .pipe(gp.posthtml([
        include()
      ]))
      .pipe(gulp.dest("shelter/pages/main/"))
      .pipe(browserSync.reload({stream: true}));
    // .on('end',browserSync.reload);
  });

  gulp.task('watch', (done) => {
    gulp.watch('src/main/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('src/main/**/*.html', gulp.series('html'));
    done();
  });

  gulp.task('default', gulp.series(
    gulp.parallel('sass', 'html'),
    gulp.parallel('watch', 'serve')
  ));
}


// {
//   gulp.task('serve', function () {
//     browserSync.init({
//       server: {
//         baseDir: "./shelter",
//         index: "/pages/pets/pets.html"
//       }
//     });
//     browserSync.watch('/shelter', browserSync.reload)
//   });
//
//
//   gulp.task('sass', function () {
//     return gulp.src('src/pets/sass/style.scss')
//       .pipe(gp.sourcemaps.init())
//       .pipe(gp.sass({}))
//       .pipe(gp.autoprefixer(
//         ['last 15 versions', '> 5%'],
//         {
//           cascade: true
//         }))
//       .on("error", gp.notify.onError({
//         title: "stile"
//       }))
//       .pipe(gp.sourcemaps.write())
//       .pipe(gulp.dest('shelter/pages/pets/'))
//       .pipe(browserSync.reload({stream: true}))
//     // .on('end',browserSync.reload);
//   });
//
//
//   gulp.task("html", function () {
//     return gulp.src("src/pets/*.html")
//       .pipe(gp.posthtml([
//         include()
//       ]))
//       .pipe(gulp.dest("shelter/pages/pets/"))
//       .pipe(browserSync.reload({stream: true}));
//     // .on('end',browserSync.reload);
//   });
//
//   gulp.task('watch', (done) => {
//     gulp.watch('src/pets/sass/**/*.scss', gulp.series('sass'));
//     gulp.watch('src/pets/**/*.html', gulp.series('html'));
//     done();
//   });
//
//   gulp.task('default', gulp.series(
//     gulp.parallel('sass', 'html'),
//     gulp.parallel('watch', 'serve')
//   ));
// }



gulp.task("sprite", function () {
   return gulp.src("src/assets/**/SVG-*.svg")
   .pipe(gp.svgstore({
      inlineSvg: true
    }))
   .pipe(gp.rename("sprite.svg"))
   .pipe(gulp.dest("shelter/assets/images"));
});
