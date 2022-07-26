/* eslint-disable arrow-body-style */
// => IMPORTING EXTERNAL MODULES AND THE BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
import { dest } from 'gulp';
import rename from 'gulp-rename';
import browserify from 'browserify';
import vinylStream from 'vinyl-source-stream';
import vinylBuffer from 'vinyl-buffer';
import babelify from 'babelify';
import glob from 'glob';
import notify from 'gulp-notify';
import eventStream from 'event-stream';
import browserSync from 'browser-sync';
import { config } from '../config';

// => SETTING UP A TASK FOR WORKING WITH SCRIPTS FILES | FOR THE BACKEND
// ===================================================================================================>
const changingScriptsBackend = (done) => {
  const files = [
    config.source.homeScripts,
    ...glob.sync(config.source.notDeferScripts),
    ...glob.sync(config.source.pagesScripts),
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
        .bundle().on('error', notify.onError({
          title: 'Transpilation error',
          message: 'Error: <%= error.message %>',
          sound: true,
        }))
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

// => EXPORTING A TASK
// ===================================================================================================>
export default changingScriptsBackend;
