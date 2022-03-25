/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import rename from 'gulp-rename';
import { config } from '../config';

// |=============== SETTING UP THE TASK OF CREATING A SPRITE FROM SVG IMAGES ===============>
const svgOptimization = () => {
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

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default svgOptimization;
