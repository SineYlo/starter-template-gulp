/* eslint-disable arrow-body-style */
// => IMPORTING EXTERNAL MODULES AND THE BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
import { watch } from 'gulp';
import browserSync from 'browser-sync';
import changingMarkup from './_changing-markup';
import changingStyles from './_changing-styles';
import changingScripts from './_changing-scripts';
import {
  fileTransferAudio,
  fileTransferVideo,
  fileTransferDocs,
  fileTransferFonts,
  fileTransferPhp,
} from './_file-transfer';
import {
  graphicsOptimizationJpg,
  graphicsOptimizationPng,
  graphicsOptimizationFav,
  graphicsOptimizationSvg,
  creatingSprite,
} from './_graphics-optimization';
import { config, projectFolder } from '../config';

// => SETTING UP A SERVER CREATION TASK
// ===================================================================================================>
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

// => TRACKING CHANGES IN FILES AND FOLDERS
// ===================================================================================================>
watch(config.watch.html, changingMarkup);
watch(config.watch.styles, changingStyles);
watch(config.watch.scripts, changingScripts);
watch(config.watch.jpgImages, graphicsOptimizationJpg);
watch(config.watch.pngImages, graphicsOptimizationPng);
watch(config.watch.faviconsImages, graphicsOptimizationFav);
watch(config.watch.svgImages, graphicsOptimizationSvg);
watch(config.watch.spritesImages, creatingSprite);
watch(config.watch.audio, fileTransferAudio);
watch(config.watch.video, fileTransferVideo);
watch(config.watch.documents, fileTransferDocs);
watch(config.watch.fonts, fileTransferFonts);
watch(config.watch.php, fileTransferPhp);

// => EXPORTING A TASK
// ===================================================================================================>
export default watchFiles;
