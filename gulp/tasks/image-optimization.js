/* eslint-disable arrow-body-style */
// |=============== WE CONNECT | GULP MODULE ===============>
import { src, dest } from 'gulp';

// |=============== WE CONNECT | SQUOOSH MODULE ===============>
import squoosh from 'gulp-libsquoosh';

// |=============== WE CONNECT | PATHS TO THE MAIN FOLDERS ===============>
import { path } from '../paths';

// |=============== SETTING UP AN IMAGE OPTIMIZATION AND CONVERSION TASK - JPG ===============>
const imageOptimizationJpg = () => {
  return src(path.source.convertjpg)
    .pipe(squoosh({
      mozjpeg: {},
      webp: {},
      avif: {},
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
    .pipe(dest(path.build.pictures));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export { imageOptimizationJpg, imageOptimizationPng };
