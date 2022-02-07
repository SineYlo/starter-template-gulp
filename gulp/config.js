// |=============== DECLARING VARIABLES FOR THE MAIN PROJECT FOLDERS ===============>
const projectFolder = 'dist';
const sourceFolder = 'src';

// |=============== SETTING UP THE MAIN PATHS TO ALL FOLDERS ===============>
const path = {
  source: {
    audio: `${sourceFolder}/assets/audio/**/*.{mp3,ogg,wav,flac}`,
    video: `${sourceFolder}/assets/video/**/*.{mp4,avi,webm}`,
    docs: `${sourceFolder}/assets/docs/**/*.{pdf,docx,doc,txt,rtf,odt,xls,xlsx}`,
    fonts: `${sourceFolder}/fonts/**/*.{woff,woff2}`,
    pictures: `${sourceFolder}/img/**/*.gif`,
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
    htmlPages: `${sourceFolder}/kit/pages/**/*.html`,
    styles: [
      `${sourceFolder}/scss/styles.scss`,
      `${sourceFolder}/scss/pages/**/*.scss`,
      `${sourceFolder}/scss/theme/**/*.scss`,
      `${sourceFolder}/scss/modules/**/*.scss`,
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
  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

// |=============== EXPORTING THE MAIN VARIABLES FOR USE ===============>
export { projectFolder, sourceFolder, path };
