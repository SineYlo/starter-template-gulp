/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import squoosh from 'gulp-libsquoosh';
import svgMin from 'gulp-svgmin';
import rename from 'gulp-rename';
import { config } from '../config';

const graphicsOptimizationJpg = () => {
  return src(config.source.convertjpg)
    .pipe(squoosh({
      mozjpeg: {},
      webp: {},
      avif: {},
    }))
    .pipe(rename({
      extname: '.jpg',
      dirname: 'pictures/',
    }))
    .pipe(dest(config.build.pictures));
};

const graphicsOptimizationPng = () => {
  return src(config.source.convertpng)
    .pipe(squoosh({
      oxipng: {},
      webp: {},
      avif: {},
    }))
    .pipe(rename({
      dirname: 'pictures/',
    }))
    .pipe(dest(config.build.pictures));
};

const graphicsOptimizationFav = () => {
  return src(config.source.convertfav)
    .pipe(squoosh({
      oxipng: {},
    }))
    .pipe(rename({
      dirname: 'favicons/',
    }))
    .pipe(dest(config.build.pictures));
};

const graphicsOptimizationSvg = () => {
  return src(config.source.vector)
    .pipe(svgMin())
    .pipe(rename({
      dirname: 'svg/',
    }))
    .pipe(dest(config.build.pictures));
};

const creatingSprite = () => {
  return src(config.source.sprites)
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: 'sprite.svg',
        },
      },
    }))
    .pipe(rename({
      dirname: 'sprites/',
    }))
    .pipe(dest(config.build.pictures));
};

export {
  graphicsOptimizationJpg,
  graphicsOptimizationPng,
  graphicsOptimizationFav,
  graphicsOptimizationSvg,
  creatingSprite,
};
