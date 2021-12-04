/* eslint-disable arrow-body-style */
// |=============== WE CONNECT | GULP MODULE ===============>
import { src, dest } from 'gulp';

// |=============== WE CONNECT | GULP-SASS MODULE ===============>
import gulpSass from 'gulp-sass';

// |=============== WE CONNECT | SASS MODULE ===============>
import baseSass from 'sass';

// |=============== WE CONNECT | GULP-POSTCSS MODULE ===============>
import postcss from 'gulp-postcss';

// |=============== WE CONNECT | POSTCSS-COLOR-REBECCAPURPLE MODULE ===============>
import postcssRebeccapurple from 'postcss-color-rebeccapurple';

// |=============== WE CONNECT | POSTCSS-LAB-FUNCTION MODULE ===============>
import postcssLabFunction from 'postcss-lab-function';

// |=============== WE CONNECT | POSTCSS-WILL-CHANGE MODULE ===============>
import postcssWillChange from 'postcss-will-change';

// |=============== WE CONNECT | POSTCSS-CLIP-PATH-POLYFILL MODULE ===============>
import postcssClipPath from 'postcss-clip-path-polyfill';

// |=============== WE CONNECT | POSTCSS-PXTOREM MODULE ===============>
import postcssPxToRem from 'postcss-pxtorem';

// |=============== WE CONNECT | POSTCSS-FONT-FAMILY-SYSTEM-UI MODULE ===============>
import postcssSystemUiFont from 'postcss-font-family-system-ui';

// |=============== WE CONNECT | GULP-AUTOPREFIXER MODULE ===============>
import autoprefixer from 'gulp-autoprefixer';

// |=============== WE CONNECT | GULP-CLEAN-CSS MODULE ===============>
import cleanCSS from 'gulp-clean-css';

// |=============== WE CONNECT | GULP-RENAME MODULE ===============>
import rename from 'gulp-rename';

// |=============== WE CONNECT | GULP-SOURCEMAPS MODULE ===============>
import sourcemaps from 'gulp-sourcemaps';

// |=============== WE CONNECT | BROWSER-SYNC MODULE ===============>
import browserSync from 'browser-sync';

// |=============== WE CONNECT | PATHS TO THE MAIN FOLDERS ===============>
import { path } from '../paths';

// |=============== COMBINING TWO MODULES ===============>
const sass = gulpSass(baseSass);

// |=============== SETTING UP THE TASK OF OPTIMIZING STYLE FILES ===============>
const changingStyles = () => {
  return src(path.source.styles)
    .pipe(sourcemaps.init())
    .pipe(sass.sync({
      outputStyle: 'expanded',
    }).on('error', sass.logError))
    .pipe(postcss([
      postcssRebeccapurple({
        preserve: true,
      }),
      postcssLabFunction({
        preserve: true,
      }),
      postcssWillChange(),
      postcssClipPath(),
      postcssPxToRem({
        rootValue: 16,
        unitPrecision: 5,
        propList: ['*', '!border*'],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0,
      }),
      postcssSystemUiFont({
        family: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", Ubuntu, Cantarell, sans-serif',
      }),
    ]))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 5 versions'],
    }))
    .pipe(rename({
      dirname: '',
    }))
    .pipe(sourcemaps.write())
    .pipe(dest(path.build.styles))
    .pipe(browserSync.stream())
    .pipe(cleanCSS({
      level: 2,
    }))
    .pipe(rename({
      extname: '.min.css',
      dirname: '',
    }))
    .pipe(dest(path.build.styles));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default changingStyles;
