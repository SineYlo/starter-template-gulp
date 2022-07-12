// eslint-disable max-len
// => DECLARING A VARIABLE WITH A SOURCE AND DESTINATION FOLDER
// ===================================================================================================>
const projectFolder = 'dist';
const sourceFolder = 'src';

// => BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
const config = {
  source: {
    audio: `${sourceFolder}/assets/audio/**/*.{mp3,ogg,wav,flac}`,
    video: `${sourceFolder}/assets/video/**/*.{mp4,avi,webm}`,
    documents: `${sourceFolder}/assets/documents/**/*.{pdf,docx,doc,txt,rtf,odt,xls,xlsx}`,
    fonts: `${sourceFolder}/assets/fonts/**/*.{woff,woff2}`,
    faviconsImages: `${sourceFolder}/assets/images/global/favicons/**/*.png`,
    spritesImages: `${sourceFolder}/assets/images/global/sprites/**/*.svg`,
    svgImages: `${sourceFolder}/assets/images/global/svg/**/*.svg`,
    jpgImages: `${sourceFolder}/assets/images/common/**/*.{jpg,jpeg}`,
    pngImages: `${sourceFolder}/assets/images/common/**/*.png`,
    root: [
      `${sourceFolder}/site.webmanifest`,
      `${sourceFolder}/*.svg`,
    ],
    html: `${sourceFolder}/*.html`,
    styles: [
      `${sourceFolder}/scss/home-styles.scss`,
      `${sourceFolder}/scss/pages/**/*.scss`,
      `${sourceFolder}/scss/modules/**/*.scss`,
    ],
    homeScripts: `${sourceFolder}/js/home-scripts.js`,
    notDeferScripts: `${sourceFolder}/js/scripts/**/*.js`,
    pagesScripts: `${sourceFolder}/js/pages/**/*.js`,
    php: `${sourceFolder}/php/**/*.php`,
    cache: `${projectFolder}/**/*.{css,js,woff,woff2,png,jpg,jpeg,webp,avif,gif,svg,mp3,ogg,wav,flac,mp4,avi,webm,pdf,docx,doc,txt,rtf,odt,xls,xlsx}`,
    cacheHtml: `${projectFolder}/*.html`,
    cacheStyles: `${projectFolder}/css/**/*.css`,
    cacheScripts: `${projectFolder}/js/**/*.js`,
    cachePhp: `${projectFolder}/*.php`,
    cacheManifest: `${projectFolder}/site.webmanifest`,
  },
  build: {
    audio: `${projectFolder}/assets/audio/`,
    video: `${projectFolder}/assets/video/`,
    documents: `${projectFolder}/assets/documents/`,
    fonts: `${projectFolder}/assets/fonts/`,
    images: `${projectFolder}/assets/images/`,
    root: `${projectFolder}/`,
    rootZip: `${projectFolder}/**/*.*`,
    styles: `${projectFolder}/css/`,
    scripts: `${projectFolder}/js/`,
  },
  watch: {
    audio: `${sourceFolder}/assets/audio/**/*.{mp3,ogg,wav,flac}`,
    video: `${sourceFolder}/assets/video/**/*.{mp4,avi,webm}`,
    documents: `${sourceFolder}/assets/documents/**/*.{pdf,docx,doc,txt,rtf,odt,xls,xlsx}`,
    fonts: `${sourceFolder}/assets/fonts/**/*.{woff,woff2}`,
    faviconsImages: `${sourceFolder}/assets/images/global/favicons/**/*.png`,
    spritesImages: `${sourceFolder}/assets/images/global/sprites/**/*.svg`,
    svgImages: `${sourceFolder}/assets/images/global/svg/**/*.svg`,
    jpgImages: `${sourceFolder}/assets/images/common/**/*.{jpg,jpeg}`,
    pngImages: `${sourceFolder}/assets/images/common/**/*.png`,
    html: `${sourceFolder}/**/*.html`,
    styles: `${sourceFolder}/scss/**/*.scss`,
    scripts: `${sourceFolder}/js/**/*.js`,
    php: `${sourceFolder}/php/**/*.php`,
  },
  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

// => EXPORTING THE MAIN VARIABLES
// ===================================================================================================>
export {
  projectFolder,
  sourceFolder,
  config,
};
