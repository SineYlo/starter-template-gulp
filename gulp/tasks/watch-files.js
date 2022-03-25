/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { watch } from 'gulp';
import browserSync from 'browser-sync';
import changingMarkupHome from './markup-home';
import changingMarkupPages from './markup-pages';
import changingStyles from './changing-styles';
import changingScripts from './changing-scripts';
import fileTransferPictures from './transfer-pictures';
import svgOptimization from './svg-optimization';
import { config, projectFolder } from '../config';

// |=============== CREATING A TASK AND ALSO SETTING UP A LOCAL SERVER ===============>
const watchFiles = (callback) => {
  browserSync.init({
    server: {
      baseDir: projectFolder,
    },
    port: 3000,
    notify: false,
    open: false,
  });
  callback();
};

// |=============== WE RUN THE TASK WITH EACH CHANGE IN ONE OF THE FILES ===============>
watch(config.watch.htmlHome, changingMarkupHome);
watch(config.watch.htmlPages, changingMarkupPages);
watch(config.watch.styles, changingStyles);
watch(config.watch.scripts, changingScripts);
watch(config.watch.pictures, fileTransferPictures);
watch(config.watch.sprites, svgOptimization);

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default watchFiles;
