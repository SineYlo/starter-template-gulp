// eslint-disable arrow-body-style
// eslint-disable max-len
// => IMPORTING EXTERNAL MODULES AND THE BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
import { src, dest } from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
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
import notify from 'gulp-notify';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import gulpIf from 'gulp-if';
import { config } from '../config';

// => COMBINING TWO MODULES
// ===================================================================================================>
const sass = gulpSass(dartSass);

// => SETTING UP A TASK FOR WORKING WITH STYLE FILES
// ===================================================================================================>
const changingStyles = () => {
  return src(config.source.styles)
    .pipe(gulpIf(config.isDev, sourcemaps.init({
      loadMaps: true,
    })))
    .pipe(sass.sync({
      outputStyle: 'expanded',
    }).on('error', notify.onError({
      title: 'Error in the code, need to be fixed',
      message: 'Error: <%= error.message %>',
      sound: true,
    })))
    .pipe(gulpIf(config.isProd, postcss([
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
          '!*gap',
          '!*br',
        ],
        selectorBlackList: ['site-page'],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0,
      }),
      postcssSystemUiFont({
        family: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", Ubuntu, Cantarell, sans-serif',
      }),
    ])))
    .pipe(gulpIf(config.isProd, autoprefixer({
      overrideBrowserslist: ['last 5 versions'],
    })))
    .pipe(rename({
      dirname: '',
    }))
    .pipe(gulpIf(config.isDev, sourcemaps.write()))
    .pipe(dest(config.build.styles))
    .pipe(gulpIf(config.isProd, cleanCSS({
      level: 1,
    })).on('error', notify.onError({
      title: 'Minification error',
      message: 'Error: <%= error.message %>',
      sound: true,
    })))
    .pipe(rename({
      extname: '.min.css',
      dirname: '',
    }))
    .pipe(dest(config.build.styles))
    .pipe(browserSync.stream());
};

// => EXPORTING A TASK
// ===================================================================================================>
export default changingStyles;
