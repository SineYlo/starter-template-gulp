/* eslint-disable arrow-body-style */
// |=============== WE CONNECT | GULP MODULE ===============>
import { dest } from 'gulp';

// |=============== WE CONNECT | GULP-RENAME MODULE ===============>
import rename from 'gulp-rename';

// |=============== WE CONNECT | BROWSERIFY MODULE ===============>
import browserify from 'browserify';

// |=============== WE CONNECT | VINYL-SOURCE-STREAM MODULE ===============>
import vinylStream from 'vinyl-source-stream';

// |=============== WE CONNECT | VINYL-BUFFER MODULE ===============>
import vinylBuffer from 'vinyl-buffer';

// |=============== WE CONNECT | GULP-UGLIFY-ES MODULE ===============>
import uglify from 'gulp-uglify-es';

// |=============== WE CONNECT | GULP-NOTIFY MODULE ===============>
import notify from 'gulp-notify';

// |=============== WE CONNECT | BABELIFY MODULE ===============>
import babelify from 'babelify';

// |=============== WE CONNECT | GLOB MODULE ===============>
import glob from 'glob';

// |=============== WE CONNECT | EVENT-STREAM MODULE ===============>
import eventStream from 'event-stream';

// |=============== WE CONNECT | BOWSER-SYNC MODULE ===============>
import browserSync from 'browser-sync';

// |=============== WE CONNECT | PATHS TO THE MAIN FOLDERS ===============>
import { sourceFolder, path } from '../paths';

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
        .pipe(uglify({
          toplevel: true,
        }).on('error', notify.onError()))
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
