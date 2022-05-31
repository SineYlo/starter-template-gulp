/* eslint-disable arrow-body-style */
import { watch } from 'gulp';
import browserSync from 'browser-sync';
import changingMarkupHome from './_markup-home';
import changingMarkupPages from './_markup-pages';
import changingStyles from './_changing-styles';
import changingScripts from './_changing-scripts';
import {
  fileTransferAudio,
  fileTransferVideo,
  fileTransferDocs,
  fileTransferFonts,
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

watch(config.watch.htmlHome, changingMarkupHome);
watch(config.watch.htmlPages, changingMarkupPages);
watch(config.watch.styles, changingStyles);
watch(config.watch.scripts, changingScripts);
watch(config.watch.picturesJpg, graphicsOptimizationJpg);
watch(config.watch.picturesPng, graphicsOptimizationPng);
watch(config.watch.favicons, graphicsOptimizationFav);
watch(config.watch.vector, graphicsOptimizationSvg);
watch(config.watch.sprites, creatingSprite);
watch(config.watch.audio, fileTransferAudio);
watch(config.watch.video, fileTransferVideo);
watch(config.watch.docs, fileTransferDocs);
watch(config.watch.fonts, fileTransferFonts);

export default watchFiles;
