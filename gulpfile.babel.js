/* eslint-disable max-len */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { series, parallel } from 'gulp';
import cleanRoot from './gulp/tasks/_clean-root';
import fileTransferAudio from './gulp/tasks/_transfer-audio';
import fileTransferVideo from './gulp/tasks/_transfer-video';
import fileTransferDocs from './gulp/tasks/_transfer-docs';
import fileTransferFonts from './gulp/tasks/_transfer-fonts';
import fileTransferVector from './gulp/tasks/_transfer-vector';
import fileTransferOther from './gulp/tasks/_transfer-other';
import changingMarkupHome from './gulp/tasks/_markup-home';
import changingMarkupPages from './gulp/tasks/_markup-pages';
import changingMarkupPreCodeHome from './gulp/tasks/_markup-precode-home';
import changingMarkupPreCodePages from './gulp/tasks/_markup-precode-pages';
import changingStylesBackend from './gulp/tasks/_changing-styles-backend';
import changingStyles from './gulp/tasks/_changing-styles';
import changingScriptsBackend from './gulp/tasks/_changing-scripts-backend';
import changingScripts from './gulp/tasks/_changing-scripts';
import svgOptimization from './gulp/tasks/_svg-optimization';
import archivingFiles from './gulp/tasks/_archiving-files';
import cacheFiles from './gulp/tasks/_cache-files';
import rewriteFiles from './gulp/tasks/_rewrite-files';
import watchFiles from './gulp/tasks/_watch-files';
import { imageOptimizationJpg, imageOptimizationPng, imageOptimizationFav } from './gulp/tasks/_image-optimization';
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
  fileTransferVector,
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

// |=============== STARTS OPTIMIZATION OF ALL IMAGES COMPLETELY ===============>
const imageOptimizationAll = series(
  svgOptimization,
  fileTransferVector,
  imageOptimizationJpg,
  imageOptimizationPng,
  imageOptimizationFav,
);

// |=============== SETTING UP THE LAUNCH OF THE PROJECT COLLECTOR WITHOUT A SERVER ===============>
const buildBackend = series(
  cleanRoot,
  fileTransferAudio,
  fileTransferVideo,
  fileTransferDocs,
  fileTransferFonts,
  fileTransferVector,
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

// |=============== CONFIGURING THE LAUNCH OF THE PROJECT BUILDER WITHOUT HTML MINIFICATION ===============>
const buildPreCode = series(
  fileTransferAudio,
  fileTransferVideo,
  fileTransferDocs,
  fileTransferFonts,
  fileTransferVector,
  fileTransferOther,
  parallel(
    changingMarkupPreCodeHome,
    changingMarkupPreCodePages,
    changingStyles,
    changingScripts,
  ),
);

// |=============== CONFIGURING THE LAUNCH OF THE PROJECT COLLECTOR WITH FILE CACHING ===============>
const buildCache = series(
  cacheFiles,
  rewriteFiles,
);

// |=============== SETTING UP THE LAUNCH OF THE PROJECT COLLECTOR ===============>
exports.buildPreCode = buildPreCode;
exports.buildCache = buildCache;
exports.fullStart = fullStart;
exports.fullStartServer = fullStartServer;
exports.buildBackend = buildBackend;
exports.imageOptimizationAll = imageOptimizationAll;
exports.build = build;
exports.watch = watch;
