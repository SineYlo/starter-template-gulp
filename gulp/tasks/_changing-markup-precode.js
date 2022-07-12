// eslint-disable arrow-body-style
// => IMPORTING EXTERNAL MODULES AND THE BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
import { src, dest } from 'gulp';
import fileinclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import browserSync from 'browser-sync';
import notify from 'gulp-notify';
import { config } from '../config';

// => SETTING UP A TASK FOR WORKING WITH HTML FILES WITHOUT COLLAPSING SPACES
// ===================================================================================================>
const changingMarkupPreCode = () => {
  return src(config.source.html)
    .pipe(fileinclude({
      prefix: '@',
    }).on('error', notify.onError({
      title: 'Error when transferring a component',
      message: 'Error: <%= error.message %>',
      sound: true,
    })))
    .pipe(htmlmin({
      removeEmptyAttributes: true,
      useShortDoctype: true,
      removeComments: true,
      collapseBooleanAttributes: true,
    }).on('error', notify.onError({
      title: 'Minification error',
      message: 'Error: <%= error.message %>',
      sound: true,
    })))
    .pipe(dest(config.build.root))
    .pipe(browserSync.stream());
};

// => EXPORTING A TASK
// ===================================================================================================>
export default changingMarkupPreCode;
