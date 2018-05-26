var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var builder = require("systemjs-builder");

gulp.task('build.debug', ['bundle.debug', 'dist']);

gulp.task('build.typescript.debug', function () {
    var tsProject = ts.createProject('src/tsconfig.json');

    return gulp.src(['src/**/*.ts', '!src/**/*.spec.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .js.pipe(sourcemaps.write('./')).pipe(gulp.dest('_temp'));
});

gulp.task('copy.systemjs', function () {
    return gulp.src('src/systemjs*')
        .pipe(gulp.dest('_temp'));
});

gulp.task('bundle.debug', ['build.typescript.debug', 'copy.systemjs'], function (cb) {

    new builder('_temp', '_temp/systemjs.config.js')
        .bundle('main.js', 'dist/bundle.js')
        .then(function () {
            cb();
        }).catch(function (e) {
            console.warn('bundle.debug failed with ' + e);
            cb();
        });
});

gulp.task('bundle.prod', function () {

});

gulp.task('build.prod', function () {

});

gulp.task('dist', function () {
    return gulp.src(['src/favicon.ico', 'src/index.html', 'src/styles.css'])
        .pipe(gulp.dest('dist/'));
});