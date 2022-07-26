/* eslint-disable arrow-body-style */
// => IMPORTING EXTERNAL MODULES AND THE BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
import { src, dest } from 'gulp';
import { readFileSync } from 'fs';
import revRewrite from 'gulp-rev-rewrite';
import { config, projectFolder } from '../config';

// => SETTING UP THE TASK OF REWRITING CACHED FILES
// ===================================================================================================>
const rewriteFiles = () => {
  const manifest = readFileSync(`${projectFolder}/rev.json`);
  src(config.source.cacheStyles)
    .pipe(revRewrite({
      manifest,
    }))
    .pipe(dest(config.build.styles));
  src(config.source.cacheHtml)
    .pipe(revRewrite({
      manifest,
    }))
    .pipe(dest(config.build.root));
  src(config.source.cacheScripts)
    .pipe(revRewrite({
      manifest,
    }))
    .pipe(dest(config.build.scripts));
  src(config.source.cachePhp)
    .pipe(revRewrite({
      manifest,
    }))
    .pipe(dest(config.build.root));
  return src(config.source.cacheManifest)
    .pipe(revRewrite({
      manifest,
    }))
    .pipe(dest(config.build.root));
};

// => EXPORTING A TASK
// ===================================================================================================>
export default rewriteFiles;
