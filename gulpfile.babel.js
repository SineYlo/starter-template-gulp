/* eslint-disable import/no-import-module-exports */
/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { series, parallel } from 'gulp';
import cleanRoot from './gulp/tasks/clean-root';
import fileTransferAudio from './gulp/tasks/transfer-audio';
import fileTransferVideo from './gulp/tasks/transfer-video';
import fileTransferFonts from './gulp/tasks/transfer-fonts';
import fileTransferPictures from './gulp/tasks/transfer-pictures';
import fileTransferOther from './gulp/tasks/transfer-other';
import changingMarkupHome from './gulp/tasks/markup-home';
import changingMarkupPages from './gulp/tasks/markup-pages';
import changingStyles from './gulp/tasks/changing-styles';
import changingScripts from './gulp/tasks/changing-scripts';
import svgOptimization from './gulp/tasks/svg-optimization';
import watchFiles from './gulp/tasks/watch-files';
import { imageOptimizationJpg, imageOptimizationPng } from './gulp/tasks/image-optimization';
import { path } from './gulp/config';

// |=============== INITIALIZE THE SETUP THAT SEPARATES THE ASSEMBLY ===============>
path.setEnv();

// |=============== CONFIGURING THE LAUNCH OF A TASK THAT DELETES THE MAIN FOLDER ===============>
exports.cleanRoot = cleanRoot;

// |=============== SETTING UP THE LAUNCH OF TASKS THAT OPTIMIZE IMAGES ===============>
exports.svgOptimization = svgOptimization;
exports.imageOptimizationJpg = imageOptimizationJpg;
exports.imageOptimizationPng = imageOptimizationPng;

// |=============== SETTING UP THE LAUNCH OF THE PROJECT COLLECTOR WITHOUT A SERVER ===============>
const build = series(
  fileTransferAudio,
  fileTransferVideo,
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

// |=============== SETTING UP THE LAUNCH OF THE PROJECT COLLECTOR ===============>
exports.build = build;
exports.watch = watch;
