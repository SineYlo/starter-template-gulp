// |=============== DECLARING VARIABLES FOR THE MAIN PROJECT FOLDERS ===============>
const projectFolder = 'dist';
const sourceFolder = 'src';

// |=============== SETTING UP THE MAIN PATHS TO ALL FOLDERS ===============>
const config = {
  source: {
    audio: `${sourceFolder}/assets/audio/**/*.{mp3,ogg,wav,flac}`,
    video: `${sourceFolder}/assets/video/**/*.{mp4,avi,webm}`,
    docs: `${sourceFolder}/assets/docs/**/*.{pdf,docx,doc,txt,rtf,odt,xls,xlsx}`,
    fonts: `${sourceFolder}/fonts/**/*.{woff,woff2}`,
    vector: `${sourceFolder}/img/global/svg/**/*.svg`,
    convertjpg: `${sourceFolder}/img/**/*.{jpg,jpeg}`,
    convertfav: `${sourceFolder}/img/global/favicons/**/*.png`,
    convertpng: [
      `${sourceFolder}/img/home/**/*.png`,
      `${sourceFolder}/img/pages/**/*.png`,
    ],
    root: [
      `${sourceFolder}/main.webmanifest`,
      `${sourceFolder}/favicon.svg`,
      `${sourceFolder}/mask-desktop.svg`,
    ],
    htmlHome: `${sourceFolder}/index.html`,
    htmlPages: `${sourceFolder}/html/pages/**/*.html`,
    styles: [
      `${sourceFolder}/scss/styles.scss`,
      `${sourceFolder}/scss/pages/**/*.scss`,
      `${sourceFolder}/scss/modules/**/*.scss`,
    ],
    scriptsHome: `${sourceFolder}/js/main.js`,
    scriptsModules: `${sourceFolder}/js/modules/**/*.js`,
    scriptsPages: `${sourceFolder}/js/pages/**/*.js`,
    sprites: `${sourceFolder}/img/global/sprites/**/*.svg`,
    cache: `${projectFolder}/**/*.{css,js,woff,woff2,png,jpg,jpeg,webp,avif,gif,svg}`,
    cacheHtml: `${projectFolder}/index.html`,
    cachePages: `${projectFolder}/pages/**/*.html`,
    cacheStyles: `${projectFolder}/css/**/*.css`,
    cacheManifest: `${projectFolder}/main.webmanifest`,
  },
  build: {
    audio: `${projectFolder}/assets/audio/`,
    video: `${projectFolder}/assets/video/`,
    docs: `${projectFolder}/assets/docs/`,
    fonts: `${projectFolder}/fonts/`,
    pictures: `${projectFolder}/img/`,
    root: `${projectFolder}/`,
    rootZip: `${projectFolder}/**/*.*`,
    html: `${projectFolder}/pages/`,
    styles: `${projectFolder}/css/`,
    scripts: `${projectFolder}/js/`,
  },
  watch: {
    htmlHome: [
      `${sourceFolder}/index.html`,
      `${sourceFolder}/html/components/home/**/*.html`,
      `${sourceFolder}/html/components/global/**/*.html`,
    ],
    htmlPages: [
      `${sourceFolder}/html/pages/**/*.html`,
      `${sourceFolder}/html/components/pages/**/*.html`,
      `${sourceFolder}/html/components/global/**/*.html`,
    ],
    styles: `${sourceFolder}/scss/**/*.scss`,
    scripts: `${sourceFolder}/js/**/*.js`,
    vector: `${sourceFolder}/img/global/svg/**/*.svg`,
    sprites: `${sourceFolder}/img/global/sprites/**/*.svg`,
    picturesJpg: [
      `${sourceFolder}/img/home/**/*.{jpg,jpeg}`,
      `${sourceFolder}/img/pages/**/*.{jpg,jpeg}`,
    ],
    picturesPng: [
      `${sourceFolder}/img/home/**/*.png`,
      `${sourceFolder}/img/pages/**/*.png`,
    ],
  },
  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

// |=============== EXPORTING THE MAIN VARIABLES FOR USE ===============>
export { projectFolder, sourceFolder, config };
