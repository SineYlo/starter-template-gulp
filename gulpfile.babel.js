/* eslint-disable max-len */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable arrow-body-style */
import { series, parallel } from 'gulp';
import cleanRoot from './gulp/tasks/_clean-root';
import changingMarkupHome from './gulp/tasks/_markup-home';
import changingMarkupPages from './gulp/tasks/_markup-pages';
import changingMarkupPreCodeHome from './gulp/tasks/_markup-precode-home';
import changingMarkupPreCodePages from './gulp/tasks/_markup-precode-pages';
import changingStylesBackend from './gulp/tasks/_changing-styles-backend';
import changingStyles from './gulp/tasks/_changing-styles';
import changingScriptsBackend from './gulp/tasks/_changing-scripts-backend';
import changingScripts from './gulp/tasks/_changing-scripts';
import archivingFiles from './gulp/tasks/_archiving-files';
import cacheFiles from './gulp/tasks/_cache-files';
import rewriteFiles from './gulp/tasks/_rewrite-files';
import watchFiles from './gulp/tasks/_watch-files';
import {
  fileTransferAudio,
  fileTransferVideo,
  fileTransferDocs,
  fileTransferFonts,
  fileTransferOther,
} from './gulp/tasks/_file-transfer';
import {
  graphicsOptimizationJpg,
  graphicsOptimizationPng,
  graphicsOptimizationFav,
  graphicsOptimizationSvg,
  creatingSprite,
} from './gulp/tasks/_graphics-optimization';
import { config } from './gulp/config';

config.setEnv();

exports.cleanRoot = cleanRoot;
exports.graphicsOptimizationJpg = graphicsOptimizationJpg;
exports.graphicsOptimizationPng = graphicsOptimizationPng;
exports.graphicsOptimizationFav = graphicsOptimizationFav;
exports.graphicsOptimizationSvg = graphicsOptimizationSvg;
exports.creatingSprite = creatingSprite;
exports.archivingFiles = archivingFiles;

const fileTransferAll = series(
  fileTransferAudio,
  fileTransferVideo,
  fileTransferDocs,
  fileTransferFonts,
  fileTransferOther,
);

const graphicsOptimizationAll = series(
  graphicsOptimizationJpg,
  graphicsOptimizationPng,
  graphicsOptimizationFav,
  graphicsOptimizationSvg,
  creatingSprite,
);

const build = parallel(
  changingMarkupHome,
  changingMarkupPages,
  changingStyles,
  changingScripts,
);

const buildPreCode = parallel(
  changingMarkupPreCodeHome,
  changingMarkupPreCodePages,
  changingStyles,
  changingScripts,
);

const buildBackend = series(
  cleanRoot,
  parallel(
    changingMarkupHome,
    changingMarkupPages,
    changingStylesBackend,
    changingScriptsBackend,
  ),
  fileTransferAll,
  graphicsOptimizationAll,
);

const buildCache = series(
  cacheFiles,
  rewriteFiles,
);

const buildFullStart = series(
  cleanRoot,
  build,
  fileTransferAll,
  graphicsOptimizationAll,
);

const buildFullStartServer = series(
  cleanRoot,
  build,
  fileTransferAll,
  graphicsOptimizationAll,
  watchFiles,
);

const watch = series(
  build,
  watchFiles,
);

exports.build = build;
exports.buildPreCode = buildPreCode;
exports.buildBackend = buildBackend;
exports.buildCache = buildCache;
exports.buildFullStart = buildFullStart;
exports.buildFullStartServer = buildFullStartServer;
exports.graphicsOptimizationAll = graphicsOptimizationAll;
exports.fileTransferAll = fileTransferAll;
exports.watch = watch;
