/* eslint-disable arrow-body-style */
// => IMPORTING EXTERNAL MODULES AND THE BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
import { src, dest } from 'gulp';
import rev from 'gulp-rev';
import revDelete from 'gulp-rev-delete-original';
import { config, projectFolder } from '../config';

// => SETTING UP A FILE CACHING TASK
// ===================================================================================================>
const cacheFiles = () => {
  return src(config.source.cache, {
    base: projectFolder,
  })
    .pipe(rev())
    .pipe(revDelete())
    .pipe(dest(config.build.root))
    .pipe(rev.manifest('rev.json'))
    .pipe(dest(config.build.root));
};

// => EXPORTING A TASK
// ===================================================================================================>
export default cacheFiles;
