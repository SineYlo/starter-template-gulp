/* eslint-disable arrow-body-style */
// |===============> DECLARING VARIABLES FOR PLUGINS ===============>
const {
  src, dest, series, watch, parallel,
} = require('gulp');
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const postcssRebeccapurple = require('postcss-color-rebeccapurple');
const postcssLabFunction = require('postcss-lab-function');
const postcssWillChange = require('postcss-will-change');
const postcssClipPath = require('postcss-clip-path-polyfill');
const postcssAspectRatio = require('postcss-aspect-ratio-property');
const postcssImageWebp = require('webp-in-css/plugin');
const postcssPxToRem = require('postcss-pxtorem');
const postcssSystemUiFont = require('postcss-font-family-system-ui');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const browserify = require('browserify');
// const babelify = require('babelify');
const vinylStream = require('vinyl-source-stream');
const vinylBuffer = require('vinyl-buffer');
const uglify = require('gulp-uglify-es').default;
// const babel = require('gulp-babel');
const notify = require('gulp-notify');
const svgSprite = require('gulp-svg-sprite');
const browserSync = require('browser-sync').create();

// |=============== WE DECLARE THE MAIN PATH TO FILES ===============>
const projectFolder = 'dist';
const sourceFolder = 'src';

const path = {
  source: {
    audio: `${sourceFolder}/assets/audio/**/*.{mp3,ogg,wav,flac}`,
    video: `${sourceFolder}/assets/video/**/*.{mp4,avi,webm}`,
    fonts: `${sourceFolder}/fonts/**/*.{woff,woff2}`,
    pictures: `${sourceFolder}/img/**/*.{jpg,jpeg,png,webp,avif,gif}`,
    root: [
      `${sourceFolder}/browserconfig.xml`,
      `${sourceFolder}/main.webmanifest`,
      `${sourceFolder}/favicon.ico`,
    ],
    htmlHome: `${sourceFolder}/index.html`,
    htmlPages: `${sourceFolder}/kit/pages/**/*.html`,
    styles: [
      `${sourceFolder}/scss/styles.scss`,
      `${sourceFolder}/scss/pages/**/*.scss`,
      `${sourceFolder}/scss/theme/**/*.scss`,
      `${sourceFolder}/scss/modules/modules.scss`,
    ],
    scripts: [
      `${sourceFolder}/js/main.js`,
      `${sourceFolder}/js/pages/**/*.js`,
    ],
    sprites: `${sourceFolder}/img/global/sprites/*.svg`,
  },
  build: {
    audio: `${projectFolder}/assets/audio/`,
    video: `${projectFolder}/assets/video/`,
    fonts: `${projectFolder}/fonts/`,
    pictures: `${projectFolder}/img/`,
    root: `${projectFolder}/`,
    html: `${projectFolder}/pages/`,
    styles: `${projectFolder}/css/`,
    scripts: `${projectFolder}/js/`,
  },
  watch: {
    htmlHome: [
      `${sourceFolder}/index.html`,
      `${sourceFolder}/kit/components/home/**/*.html`,
      `${sourceFolder}/kit/templates/**/*.html`,
    ],
    htmlPages: [
      `${sourceFolder}/kit/pages/**/*.html`,
      `${sourceFolder}/kit/components/pages/**/*.html`,
      `${sourceFolder}/kit/templates/**/*.html`,
    ],
    styles: `${sourceFolder}/scss/**/*.scss`,
    scripts: [
      `${sourceFolder}/js/components/**/*.js`,
      `${sourceFolder}/js/global/**/*.js`,
      `${sourceFolder}/js/home/**/*.js`,
      `${sourceFolder}/js/pages/**/*.js`,
      `${sourceFolder}/js/main.js`,
    ],
    pictures: `${sourceFolder}/img/**/*.{jpg,jpeg,png,webp,avif,gif}`,
    sprites: `${sourceFolder}/img/global/sprites/*.svg`,
  },
};

// |=============== TRANSFERING ALL AUDIO FILES ===============>
const fileTransferAudio = () => {
  return src(path.source.audio)
    .pipe(dest(path.build.audio));
};

// |=============== TRANSFERING ALL VIDEO FILES ===============>
const fileTransferVideo = () => {
  return src(path.source.video)
    .pipe(dest(path.build.video));
};

// |=============== TRANSFERING ALL FONT FILES ===============>
const fileTransferFonts = () => {
  return src(path.source.fonts)
    .pipe(dest(path.build.fonts));
};

// |=============== TRANSFER ALL PICTURES ===============>
const fileTransferPictures = () => {
  return src(path.source.pictures)
    .pipe(dest(path.build.pictures));
};

// |=============== TRANSFERING FILES WITH PROJECT SETTINGS ===============>
const fileTransferOther = () => {
  return src(path.source.root)
    .pipe(dest(path.build.root));
};

// |=============== WE CREATE A TASK THAT OPTIMIZES THE MAIN HTML FILE ===============>
const changingMarkupHome = () => {
  return src(path.source.htmlHome)
    .pipe(fileinclude())
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
    }))
    .pipe(dest(path.build.root))
    .pipe(browserSync.stream());
};

// |=============== WE CREATE A TASK THAT OPTIMIZES INTERNAL HTML PAGES ===============>
const changingMarkupPages = () => {
  return src(path.source.htmlPages)
    .pipe(fileinclude())
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
    }))
    .pipe(dest(path.build.html))
    .pipe(browserSync.stream());
};

// |=============== WE CREATE A TASK THAT WILL OPTIMIZE STYLE FILES ===============>
const changingStyles = () => {
  return src(path.source.styles)
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
      postcssAspectRatio({
        mainSelector: '.aspect-pic',
      }),
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
      postcssImageWebp(),
    ]))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 5 versions'],
    }))
    .pipe(dest(path.build.styles))
    .pipe(cleanCSS({
      level: 2,
    }))
    .pipe(rename({
      extname: '.min.css',
    }))
    .pipe(dest(path.build.styles))
    .pipe(browserSync.stream());
};

// |=============== WE CREATE A TASK THAT OPTIMIZED SCRIPT FILES ===============>
const changingScripts = () => {
  return browserify(`${sourceFolder}/js/main.js`)
    .transform('babelify', {
      presets: ['@babel/preset-env'],
    })
    .bundle()
    .pipe(vinylStream('main.js'))
    .pipe(vinylBuffer())
    .pipe(dest(path.build.scripts))
    .pipe(uglify({
      toplevel: true,
    }).on('error', notify.onError()))
    .pipe(rename({
      extname: '.min.js',
    }))
    .pipe(dest(path.build.scripts))
    .pipe(browserSync.stream());
};

// |=============== WE CREATE SPRITE FROM SVG ICONS ===============>
const svgOptimization = () => {
  return src(path.source.sprites)
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: 'sprites.svg',
        },
      },
    }))
    .pipe(dest(path.build.pictures));
};

// |=============== CONFIGURING BROWSERSYNC ===============>
const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: projectFolder,
    },
    port: 3000,
    notify: false,
    open: false,
  });
};

// |=============== WE TRACK THE FILES AND CALL THE TASK EVERY TIME THEY CHANGE ===============>
watch(path.watch.htmlHome, changingMarkupHome);
watch(path.watch.htmlPages, changingMarkupPages);
watch(path.watch.styles, changingStyles);
watch(path.watch.scripts, changingScripts);
watch(path.watch.pictures, fileTransferPictures);
watch(path.watch.sprites, svgOptimization);

// |=============== WE DESCRIBE THE COMMAND TO CALL A PARTICULAR TASK ===============>
exports.svgOptimization = svgOptimization;
exports.default = series(
  fileTransferAudio,
  fileTransferVideo,
  fileTransferFonts,
  fileTransferPictures,
  fileTransferOther,
  parallel(
    changingMarkupHome,
    changingMarkupPages,
    changingStyles,
    changingScripts,
  ),
  svgOptimization,
  watchFiles,
);
