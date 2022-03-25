/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { dest } from 'gulp';
import rename from 'gulp-rename';
import browserify from 'browserify';
import vinylStream from 'vinyl-source-stream';
import vinylBuffer from 'vinyl-buffer';
import babelify from 'babelify';
import glob from 'glob';
import eventStream from 'event-stream';
import browserSync from 'browser-sync';
import { sourceFolder, config } from '../config';

// |=============== SETTING UP THE TASK OF OPTIMIZING SCRIPT FILES ===============>
const changingScriptsBackend = (done) => {
  const files = [
    `${sourceFolder}/js/main.js`,
    ...glob.sync(`${sourceFolder}/js/modules/**/*.js`),
    ...glob.sync(`${sourceFolder}/js/pages/**/*.js`),
  ];
  const taskScripts = files.map((file) => {
    return (
      browserify({
        entries: [file],
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
        .pipe(dest(config.build.scripts))
        .pipe(rename({
          extname: '.min.js',
          dirname: '',
        }))
        .pipe(dest(config.build.scripts))
        .pipe(browserSync.stream())
    );
  });
  return eventStream.merge(taskScripts).on('end', done);
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default changingScriptsBackend;
