/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import fileinclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import browserSync from 'browser-sync';
import { config } from '../config';

// |=============== SETTING UP THE TASK OF OPTIMIZING THE REMAINING HTML PAGES ===============>
const changingMarkupPreCodePages = () => {
  return src(config.source.htmlPages)
    .pipe(fileinclude({
      prefix: '@',
    }))
    .pipe(htmlmin({
      removeEmptyAttributes: true,
      useShortDoctype: true,
      removeComments: true,
      collapseBooleanAttributes: true,
      removeRedundantAttributes: true,
    }))
    .pipe(dest(config.build.html))
    .pipe(browserSync.stream());
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default changingMarkupPreCodePages;
