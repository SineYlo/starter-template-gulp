/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import rev from 'gulp-rev';
import revDelete from 'gulp-rev-delete-original';
import { path, projectFolder } from '../config';

const cacheFiles = () => {
  return src(path.source.cache, {
    base: projectFolder,
  })
    .pipe(rev())
    .pipe(revDelete())
    .pipe(dest(path.build.root))
    .pipe(rev.manifest('rev.json'))
    .pipe(dest(path.build.root));
};

export default cacheFiles;
