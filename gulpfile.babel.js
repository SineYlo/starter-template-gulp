// eslint-disable max-len
// eslint-disable import/no-import-module-exports
// eslint-disable arrow-body-style
// => IMPORT ALL TASKS
// ===================================================================================================>
import { series, parallel } from 'gulp';
import cleanRoot from './gulp/tasks/_clean-root';
import changingMarkup from './gulp/tasks/_changing-markup';
import changingMarkupPreCode from './gulp/tasks/_changing-markup-precode';
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
  fileTransferPhp,
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

// => CALLING THE PARAMETER THAT IS RESPONSIBLE FOR SPLITTING THE ASSEMBLY
// ===================================================================================================>
config.setEnv();

// => CREATING TASKS THAT WILL BE NEEDED TO COMBINE INTO A GROUP
// ===================================================================================================>
exports.cleanRoot = cleanRoot;
exports.graphicsOptimizationJpg = graphicsOptimizationJpg;
exports.graphicsOptimizationPng = graphicsOptimizationPng;
exports.graphicsOptimizationFav = graphicsOptimizationFav;
exports.graphicsOptimizationSvg = graphicsOptimizationSvg;
exports.creatingSprite = creatingSprite;
exports.archivingFiles = archivingFiles;

// => COMBINING TASKS INTO A GROUP | TRANSFERRING ALL MEDIA FILES INCLUDING PHP
// ===================================================================================================>
const fileTransferAll = series(
  fileTransferAudio,
  fileTransferVideo,
  fileTransferDocs,
  fileTransferFonts,
  fileTransferPhp,
  fileTransferOther,
);

// => COMBINING TASKS INTO A GROUP | OPTIMIZATION OF ALL GRAPHICS AND CREATING A SPRITE
// ===================================================================================================>
const graphicsOptimizationAll = series(
  graphicsOptimizationJpg,
  graphicsOptimizationPng,
  graphicsOptimizationFav,
  graphicsOptimizationSvg,
  creatingSprite,
);

// => COMBINING TASKS INTO A GROUP | BUILD FOR DEVELOPMENT WITHOUT A SERVER
// ===================================================================================================>
const build = parallel(
  changingMarkup,
  changingStyles,
  changingScripts,
);

// => COMBINING TASKS INTO A GROUP | BUILD FOR DEVELOPMENT WITHOUT HTML MINIFICATION
// ===================================================================================================>
const buildPreCode = parallel(
  changingMarkupPreCode,
  changingStyles,
  changingScripts,
);

// => COMBINING TASKS INTO A GROUP | ASSEMBLY FOR FURTHER TRANSFER TO THE BACKEND DEVELOPER
// ===================================================================================================>
const buildBackend = series(
  cleanRoot,
  parallel(
    changingMarkup,
    changingStylesBackend,
    changingScriptsBackend,
  ),
  fileTransferAll,
  graphicsOptimizationAll,
);

// => COMBINING TASKS INTO A GROUP | CACHING OF ALL MAIN FILES
// ===================================================================================================>
const buildCache = series(
  cacheFiles,
  rewriteFiles,
);

// => COMBINING TASKS INTO A GROUP | FULL BUILD LAUNCH FOR DEVELOPMENT WITHOUT A SERVER
// ===================================================================================================>
const buildFullStart = series(
  cleanRoot,
  build,
  fileTransferAll,
  graphicsOptimizationAll,
);

// => COMBINING TASKS INTO A GROUP | FULL BUILD LAUNCH FOR DEVELOPMENT WITH THE SERVER
// ===================================================================================================>
const buildFullStartServer = series(
  cleanRoot,
  build,
  fileTransferAll,
  graphicsOptimizationAll,
  watchFiles,
);

// => COMBINING TASKS INTO A GROUP | BUILD FOR DEVELOPMENT WITHOUT THE SERVER
// ===================================================================================================>
const watch = series(
  build,
  watchFiles,
);

// => CREATING TASKS FROM THE COLLECTED GROUPS
// ===================================================================================================>
exports.build = build;
exports.buildPreCode = buildPreCode;
exports.buildBackend = buildBackend;
exports.buildCache = buildCache;
exports.buildFullStart = buildFullStart;
exports.buildFullStartServer = buildFullStartServer;
exports.graphicsOptimizationAll = graphicsOptimizationAll;
exports.fileTransferAll = fileTransferAll;
exports.watch = watch;
