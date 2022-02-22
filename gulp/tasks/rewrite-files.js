/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import { readFileSync } from 'fs';
import revRewrite from 'gulp-rev-rewrite';
import { path, projectFolder } from '../config';

const rewriteFiles = () => {
  const manifest = readFileSync(`${projectFolder}/rev.json`);
  src(path.source.cacheStyles)
    .pipe(revRewrite({
      manifest,
    }))
    .pipe(dest(path.build.styles));
  src(path.source.cacheHtml)
    .pipe(revRewrite({
      manifest,
    }))
    .pipe(dest(path.build.root));
  src(path.source.cachePages)
    .pipe(revRewrite({
      manifest,
    }))
    .pipe(dest(path.build.html));
  return src(path.source.cacheManifest)
    .pipe(revRewrite({
      manifest,
    }))
    .pipe(dest(path.build.root));
};

export default rewriteFiles;
