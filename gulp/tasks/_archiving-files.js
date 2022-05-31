/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import zip from 'gulp-zip';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import { config } from '../config';

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

export default archivingFiles;
