/* eslint-disable arrow-body-style */
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

export default watchFiles;
