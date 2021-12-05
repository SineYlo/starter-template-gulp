/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { dest } from 'gulp';
import rename from 'gulp-rename';
import browserify from 'browserify';
import vinylStream from 'vinyl-source-stream';
import vinylBuffer from 'vinyl-buffer';
import uglify from 'gulp-uglify-es';
import notify from 'gulp-notify';
import babelify from 'babelify';
import glob from 'glob';
import gulpIf from 'gulp-if';
import eventStream from 'event-stream';
import browserSync from 'browser-sync';
import { sourceFolder, path } from '../config';

// |=============== SETTING UP THE TASK OF OPTIMIZING SCRIPT FILES ===============>
const changingScripts = (done) => {
  const files = [
    `${sourceFolder}/js/main.js`,
    ...glob.sync(`${sourceFolder}/js/pages/**/*.js`),
  ];
  const taskScripts = files.map((file) => {
    return (
      browserify({
        entries: [file],
        debug: true,
        transform: [
          babelify.configure({
            presets: ['@babel/preset-env'],
          }),
        ],
      })
        .bundle()
        .pipe(vinylStream(file))
        .pipe(vinylBuffer())
        .pipe(rename({
          dirname: '',
        }))
        .pipe(dest(path.build.scripts))
        .pipe(gulpIf(path.isProd, uglify({
          toplevel: true,
        }).on('error', notify.onError())))
        .pipe(rename({
          extname: '.min.js',
          dirname: '',
        }))
        .pipe(dest(path.build.scripts))
        .pipe(browserSync.stream())
    );
  });
  return eventStream.merge(taskScripts).on('end', done);
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default changingScripts;
