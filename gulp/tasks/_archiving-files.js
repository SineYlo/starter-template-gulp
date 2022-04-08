/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import zip from 'gulp-zip';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import { config } from '../config';

// |=============== THE TASK OF ARCHIVING THE PROJECT FOR LATER USE ===============>
const archivingFiles = () => {
  return src(config.build.rootZip)
    .pipe(plumber(
      notify.onError({
        title: 'ZIP',
        message: 'Error: <%= error.message %>',
      }),
    ))
    .pipe(zip('project.zip'))
    .pipe(dest(config.build.root));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default archivingFiles;
