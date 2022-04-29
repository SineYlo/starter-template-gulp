/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { watch } from 'gulp';
import browserSync from 'browser-sync';
import changingMarkupHome from './_markup-home';
import changingMarkupPages from './_markup-pages';
import changingStyles from './_changing-styles';
import changingScripts from './_changing-scripts';
import fileTransferVector from './_transfer-vector';
import svgOptimization from './_svg-optimization';
import { imageOptimizationJpg, imageOptimizationPng } from './_image-optimization';
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
watch(config.watch.vector, fileTransferVector);
watch(config.watch.sprites, svgOptimization);
watch(config.watch.picturesJpg, imageOptimizationJpg);
watch(config.watch.picturesPng, imageOptimizationPng);

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default watchFiles;
