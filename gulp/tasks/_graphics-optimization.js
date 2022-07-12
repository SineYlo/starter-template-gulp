// eslint-disable arrow-body-style
// => IMPORTING EXTERNAL MODULES AND THE BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
import { src, dest } from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import squoosh from 'gulp-libsquoosh';
import svgMin from 'gulp-svgmin';
import rename from 'gulp-rename';
import { config } from '../config';

// => SETTING UP A RASTER GRAPHICS OPTIMIZATION TASK | JPG
// ===================================================================================================>
const graphicsOptimizationJpg = () => {
  return src(config.source.jpgImages)
    .pipe(rename({
      extname: '.jpg',
    }))
    .pipe(squoosh({
      mozjpeg: {},
      webp: {},
      avif: {},
    }))
    .pipe(rename({
      dirname: './',
    }))
    .pipe(dest(config.build.images));
};

// => SETTING UP A RASTER GRAPHICS OPTIMIZATION TASK | PNG - EVERYTHING EXCEPT FAVICONS
// ===================================================================================================>
const graphicsOptimizationPng = () => {
  return src(config.source.pngImages)
    .pipe(squoosh({
      oxipng: {},
      webp: {},
      avif: {},
    }))
    .pipe(rename({
      dirname: './',
    }))
    .pipe(dest(config.build.images));
};

// => SETTING UP A RASTER GRAPHICS OPTIMIZATION TASK | PNG - FAVICONS
// ===================================================================================================>
const graphicsOptimizationFav = () => {
  return src(config.source.faviconsImages)
    .pipe(squoosh({
      oxipng: {},
    }))
    .pipe(rename({
      dirname: './',
    }))
    .pipe(dest(config.build.images));
};

// => SETTING UP A VECTOR GRAPHICS OPTIMIZATION TASK | SVG
// ===================================================================================================>
const graphicsOptimizationSvg = () => {
  return src(config.source.svgImages)
    .pipe(svgMin())
    .pipe(rename({
      dirname: './',
    }))
    .pipe(dest(config.build.images));
};

// => SETTING UP A SPRITE CREATION TASK
// ===================================================================================================>
const creatingSprite = () => {
  return src(config.source.spritesImages)
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: 'sprite.svg',
        },
      },
    }))
    .pipe(rename({
      dirname: './',
    }))
    .pipe(dest(config.build.images));
};

// => EXPORTING ALL TASKS
// ===================================================================================================>
export {
  graphicsOptimizationJpg,
  graphicsOptimizationPng,
  graphicsOptimizationFav,
  graphicsOptimizationSvg,
  creatingSprite,
};
