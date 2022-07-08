/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import squoosh from 'gulp-libsquoosh';
import svgMin from 'gulp-svgmin';
import rename from 'gulp-rename';
import { config } from '../config';

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

const graphicsOptimizationSvg = () => {
  return src(config.source.svgImages)
    .pipe(svgMin())
    .pipe(rename({
      dirname: './',
    }))
    .pipe(dest(config.build.images));
};

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

export {
  graphicsOptimizationJpg,
  graphicsOptimizationPng,
  graphicsOptimizationFav,
  graphicsOptimizationSvg,
  creatingSprite,
};
