/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import fileinclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import browserSync from 'browser-sync';
import { config } from '../config';

// |=============== SETTING UP THE TASK OF OPTIMIZING THE MAIN HTML FILE ===============>
const changingMarkupPreCodeHome = () => {
  return src(config.source.htmlHome)
    .pipe(fileinclude({
      prefix: '@',
    }))
    .pipe(htmlmin({
      removeEmptyAttributes: true,
      useShortDoctype: true,
      removeComments: true,
      collapseBooleanAttributes: true,
    }))
    .pipe(dest(config.build.root))
    .pipe(browserSync.stream());
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default changingMarkupPreCodeHome;
