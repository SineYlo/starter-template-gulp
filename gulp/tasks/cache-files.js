/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import rev from 'gulp-rev';
import revDelete from 'gulp-rev-delete-original';
import { config, projectFolder } from '../config';

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

export default cacheFiles;
