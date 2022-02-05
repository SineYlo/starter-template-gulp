/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import gulpSass from 'gulp-sass';
import baseSass from 'sass';
import postcss from 'gulp-postcss';
import postcssRebeccapurple from 'postcss-color-rebeccapurple';
import postcssLabFunction from 'postcss-lab-function';
import postcssWillChange from 'postcss-will-change';
import postcssClipPath from 'postcss-clip-path-polyfill';
import postcssPxToRem from 'postcss-pxtorem';
import postcssSystemUiFont from 'postcss-font-family-system-ui';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import gulpIf from 'gulp-if';
import { path } from '../config';

// |=============== COMBINING TWO MODULES ===============>
const sass = gulpSass(baseSass);

// |=============== SETTING UP THE TASK OF OPTIMIZING STYLE FILES ===============>
const changingStyles = () => {
  return src(path.source.styles)
    .pipe(gulpIf(path.isDev, sourcemaps.init({
      loadMaps: true,
    })))
    .pipe(sass.sync({
      outputStyle: 'expanded',
    }).on('error', sass.logError))
    .pipe(gulpIf(path.isProd, postcss([
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
        propList: [
          '*',
          '!border*',
          '!outline*',
          '!box-shadow',
          '!backdrop-filter',
          '!filter',
          '!text-shadow',
        ],
        selectorBlackList: ['page'],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0,
      }),
      postcssSystemUiFont({
        family: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", Ubuntu, Cantarell, sans-serif',
      }),
    ])))
    .pipe(gulpIf(path.isProd, autoprefixer({
      overrideBrowserslist: ['last 5 versions'],
    })))
    .pipe(rename({
      dirname: '',
    }))
    .pipe(gulpIf(path.isDev, sourcemaps.write()))
    .pipe(dest(path.build.styles))
    .pipe(gulpIf(path.isProd, cleanCSS({
      level: 2,
    })))
    .pipe(rename({
      extname: '.min.css',
      dirname: '',
    }))
    .pipe(dest(path.build.styles))
    .pipe(browserSync.stream());
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default changingStyles;
