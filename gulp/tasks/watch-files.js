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
import { path, projectFolder } from '../config';

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
watch(path.watch.htmlHome, changingMarkupHome);
watch(path.watch.htmlPages, changingMarkupPages);
watch(path.watch.styles, changingStyles);
watch(path.watch.scripts, changingScripts);
watch(path.watch.pictures, fileTransferPictures);
watch(path.watch.sprites, svgOptimization);

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default watchFiles;
