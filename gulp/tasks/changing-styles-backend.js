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
import shorthand from 'gulp-shorthand';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';
import { config } from '../config';

// |=============== COMBINING TWO MODULES ===============>
const sass = gulpSass(baseSass);

// |=============== SETTING UP THE TASK OF OPTIMIZING STYLE FILES ===============>
const changingStylesBackend = () => {
  return src(config.source.styles)
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
        // eslint-disable-next-line max-len
        family: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", Ubuntu, Cantarell, sans-serif',
      }),
    ]))
    .pipe(autoprefixer({
      grid: 'autoplace',
      overrideBrowserslist: ['last 5 versions'],
    }))
    .pipe(shorthand())
    .pipe(rename({
      dirname: '',
    }))
    .pipe(dest(config.build.styles))
    .pipe(rename({
      extname: '.min.css',
      dirname: '',
    }))
    .pipe(dest(config.build.styles))
    .pipe(browserSync.stream());
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default changingStylesBackend;
