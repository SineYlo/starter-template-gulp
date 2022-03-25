/* eslint-disable max-len */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { series, parallel } from 'gulp';
import cleanRoot from './gulp/tasks/clean-root';
import fileTransferAudio from './gulp/tasks/transfer-audio';
import fileTransferVideo from './gulp/tasks/transfer-video';
import fileTransferDocs from './gulp/tasks/transfer-docs';
import fileTransferFonts from './gulp/tasks/transfer-fonts';
import fileTransferPictures from './gulp/tasks/transfer-pictures';
import fileTransferOther from './gulp/tasks/transfer-other';
import changingMarkupHome from './gulp/tasks/markup-home';
import changingMarkupPages from './gulp/tasks/markup-pages';
import changingStylesBackend from './gulp/tasks/changing-styles-backend';
import changingStyles from './gulp/tasks/changing-styles';
import changingScriptsBackend from './gulp/tasks/changing-scripts-backend';
import changingScripts from './gulp/tasks/changing-scripts';
import svgOptimization from './gulp/tasks/svg-optimization';
import archivingFiles from './gulp/tasks/archiving-files';
import cacheFiles from './gulp/tasks/cache-files';
import rewriteFiles from './gulp/tasks/rewrite-files';
import watchFiles from './gulp/tasks/watch-files';
import { imageOptimizationJpg, imageOptimizationPng, imageOptimizationFav } from './gulp/tasks/image-optimization';
import { config } from './gulp/config';

// |=============== INITIALIZE THE SETUP THAT SEPARATES THE ASSEMBLY ===============>
config.setEnv();

// |=============== CONFIGURING THE LAUNCH OF A TASK THAT DELETES THE MAIN FOLDER ===============>
exports.cleanRoot = cleanRoot;

// |=============== SETTING UP THE LAUNCH OF TASKS THAT OPTIMIZE IMAGES ===============>
exports.svgOptimization = svgOptimization;
exports.imageOptimizationJpg = imageOptimizationJpg;
exports.imageOptimizationPng = imageOptimizationPng;
exports.imageOptimizationFav = imageOptimizationFav;

// |=============== SETTING UP THE START OF ARCHIVING PROJECT FILES ===============>
exports.archivingFiles = archivingFiles;

// |=============== SETTING UP THE LAUNCH OF THE PROJECT COLLECTOR WITHOUT A SERVER ===============>
const build = series(
  fileTransferAudio,
  fileTransferVideo,
  fileTransferDocs,
  fileTransferFonts,
  fileTransferPictures,
  fileTransferOther,
  parallel(
    changingMarkupHome,
    changingMarkupPages,
    changingStyles,
    changingScripts,
  ),
);

// |=============== SETTING UP THE LAUNCH OF THE PROJECT COLLECTOR WITH THE SERVER ===============>
const watch = series(
  build,
  watchFiles,
);

// |=============== COMPLETE PROJECT BUILD CYCLE WITHOUT STARTING THE SERVER ===============>
const fullStart = series(
  cleanRoot,
  build,
  svgOptimization,
  imageOptimizationJpg,
  imageOptimizationPng,
  imageOptimizationFav,
);

// |=============== FULL PROJECT BUILD CYCLE WITH SERVER STARTUP ===============>
const fullStartServer = series(
  cleanRoot,
  build,
  svgOptimization,
  imageOptimizationJpg,
  imageOptimizationPng,
  imageOptimizationFav,
  watchFiles,
);

// |=============== SETTING UP THE LAUNCH OF THE PROJECT COLLECTOR WITHOUT A SERVER ===============>
const buildBackend = series(
  cleanRoot,
  fileTransferAudio,
  fileTransferVideo,
  fileTransferDocs,
  fileTransferFonts,
  fileTransferPictures,
  fileTransferOther,
  parallel(
    changingMarkupHome,
    changingMarkupPages,
    changingStylesBackend,
    changingScriptsBackend,
  ),
  svgOptimization,
  imageOptimizationJpg,
  imageOptimizationPng,
  imageOptimizationFav,
);

// |=============== CONFIGURING THE LAUNCH OF THE PROJECT COLLECTOR WITH FILE CACHING ===============>
const buildCache = series(
  cacheFiles,
  rewriteFiles,
);

// |=============== SETTING UP THE LAUNCH OF THE PROJECT COLLECTOR ===============>
exports.buildCache = buildCache;
exports.fullStart = fullStart;
exports.fullStartServer = fullStartServer;
exports.buildBackend = buildBackend;
exports.build = build;
exports.watch = watch;
