/* eslint-disable arrow-body-style */
// |=============== WE CONNECT | GULP MODULE ===============>
import { src, dest } from 'gulp';

// |=============== WE CONNECT | GULP-SVG-SPRITE MODULE ===============>
import svgSprite from 'gulp-svg-sprite';

// |=============== WE CONNECT | GULP-RENAME MODULE ===============>
import rename from 'gulp-rename';

// |=============== WE CONNECT | PATHS TO THE MAIN FOLDERS ===============>
import { path } from '../paths';

// |=============== SETTING UP THE TASK OF CREATING A SPRITE FROM SVG IMAGES ===============>
const svgOptimization = () => {
  return src(path.source.sprites)
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: 'sprites.svg',
        },
      },
    }))
    .pipe(rename({
      dirname: '',
    }))
    .pipe(dest(path.build.pictures));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default svgOptimization;
