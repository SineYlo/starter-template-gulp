/* eslint-disable arrow-body-style */
import { dest } from 'gulp';
import rename from 'gulp-rename';
import browserify from 'browserify';
import vinylStream from 'vinyl-source-stream';
import vinylBuffer from 'vinyl-buffer';
import babelify from 'babelify';
import glob from 'glob';
import eventStream from 'event-stream';
import browserSync from 'browser-sync';
import { config } from '../config';

const changingScriptsBackend = (done) => {
  const files = [
    config.source.scriptsHome,
    ...glob.sync(config.source.scriptsModules),
    ...glob.sync(config.source.scriptsPages),
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

export default changingScriptsBackend;
