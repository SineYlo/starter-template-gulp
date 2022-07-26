/* eslint-disable arrow-body-style */
// => IMPORTING EXTERNAL MODULES AND THE BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
import { src, dest } from 'gulp';
import zip from 'gulp-zip';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import { config } from '../config';

// => SETTING UP A FILE ARCHIVING TASK
// ===================================================================================================>
const archivingFiles = () => {
  return src(config.build.rootZip)
    .pipe(plumber(
      notify.onError({
        title: 'Error during archiving',
        message: 'Error: <%= error.message %>',
        sound: true,
      }),
    ))
    .pipe(zip('project.zip'))
    .pipe(dest(config.build.root));
};

// => EXPORTING A TASK
// ===================================================================================================>
export default archivingFiles;
