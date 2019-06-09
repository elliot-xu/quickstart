const gulp = require('gulp');
const rollup = require('rollup');
const typescript = require('rollup-plugin-typescript');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

gulp.task('build.debug', () => {
    return rollup.rollup({
        input: './src/main.ts',
        plugins: [
            resolve(),
            typescript(),
        ]
    }).then(bundle => {
        return bundle.write({
            dir: './dist',
            format: 'system',
            sourcemap: true,
            entryFileNames: 'bundle.js'
        });
    });
});

gulp.task('dist', () => {
    return gulp.src(['src/index.html', 'src/favicon.ico', 'src/styles.css'])
        .pipe(gulp.dest('./dist'));
});