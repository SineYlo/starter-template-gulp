/* eslint-disable arrow-body-style */
// |=============== WE CONNECT | GULP MODULE ===============>
import { src, dest } from 'gulp';

// |=============== WE CONNECT | GULP-FILE-INCLUDE MODULE ===============>
import fileinclude from 'gulp-file-include';

// |=============== WE CONNECT | GULP-HTMLMIN MODULE ===============>
import htmlmin from 'gulp-htmlmin';

// |=============== WE CONNECT | BROWSER-SYNC MODULE ===============>
import browserSync from 'browser-sync';

// |=============== WE CONNECT | PATHS TO THE MAIN FOLDERS ===============>
import { path } from '../paths';

// |=============== SETTING UP THE TASK OF OPTIMIZING THE MAIN HTML FILE ===============>
const changingMarkupHome = () => {
  return src(path.source.htmlHome)
    .pipe(fileinclude())
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
    }))
    .pipe(dest(path.build.root))
    .pipe(browserSync.stream());
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default changingMarkupHome;
