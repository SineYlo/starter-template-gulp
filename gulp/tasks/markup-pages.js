/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import fileinclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import browserSync from 'browser-sync';
import gulpIf from 'gulp-if';
import { path } from '../config';

// |=============== SETTING UP THE TASK OF OPTIMIZING THE REMAINING HTML PAGES ===============>
const changingMarkupPages = () => {
  return src(path.source.htmlPages)
    .pipe(fileinclude())
    .pipe(gulpIf(path.isProd, htmlmin({
      collapseWhitespace: true,
      removeComments: true,
    })))
    .pipe(dest(path.build.html))
    .pipe(browserSync.stream());
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default changingMarkupPages;
