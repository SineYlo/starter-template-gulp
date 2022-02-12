/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import squoosh from 'gulp-libsquoosh';
import rename from 'gulp-rename';
import { path } from '../config';

// |=============== SETTING UP AN IMAGE OPTIMIZATION AND CONVERSION TASK - JPG ===============>
const imageOptimizationJpg = () => {
  return src(path.source.convertjpg)
    .pipe(squoosh({
      mozjpeg: {},
      webp: {},
      avif: {},
    }))
    .pipe(rename({
      dirname: 'pictures/',
    }))
    .pipe(dest(path.build.pictures));
};

// |=============== SETTING UP AN IMAGE OPTIMIZATION AND CONVERSION TASK - PNG ===============>
const imageOptimizationPng = () => {
  return src(path.source.convertpng)
    .pipe(squoosh({
      oxipng: {},
      webp: {},
      avif: {},
    }))
    .pipe(rename({
      dirname: 'pictures/',
    }))
    .pipe(dest(path.build.pictures));
};

// |=============== SETTING UP AN IMAGE OPTIMIZATION AND CONVERSION TASK - FAVICONS ===============>
const imageOptimizationFav = () => {
  return src(path.source.convertfav)
    .pipe(squoosh({
      oxipng: {},
    }))
    .pipe(rename({
      dirname: 'favicons/',
    }))
    .pipe(dest(path.build.pictures));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export { imageOptimizationJpg, imageOptimizationPng, imageOptimizationFav };
