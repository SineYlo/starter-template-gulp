/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import fileinclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import browserSync from 'browser-sync';
import gulpIf from 'gulp-if';
import { path } from '../config';

// |=============== SETTING UP THE TASK OF OPTIMIZING THE MAIN HTML FILE ===============>
const changingMarkupHome = () => {
  return src(path.source.htmlHome)
    .pipe(fileinclude())
    .pipe(gulpIf(path.isProd, htmlmin({
      collapseWhitespace: true,
      removeComments: true,
    })))
    .pipe(dest(path.build.root))
    .pipe(browserSync.stream());
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default changingMarkupHome;
