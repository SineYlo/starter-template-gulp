/* eslint-disable import/no-import-module-exports */
/* eslint-disable arrow-body-style */
// |=============== WE CONNECT | GULP MODULE ===============>
import { series, parallel } from 'gulp';

// |=============== WE CONNECT | DELETING THE MAIN FOLDER ===============>
import cleanRoot from './gulp/tasks/clean_root';

// |=============== WE CONNECT | TRANSFERRING ALL AUDIO FILES ===============>
import fileTransferAudio from './gulp/tasks/transfer_audio';

// |=============== WE CONNECT | TRANSFERRING ALL VIDEO FILES ===============>
import fileTransferVideo from './gulp/tasks/transfer_video';

// |=============== WE CONNECT | TRANSFERRING ALL FONT FILES ===============>
import fileTransferFonts from './gulp/tasks/transfer_fonts';

// |=============== WE CONNECT | TRANSFERRING ALL IMAGE FILES ===============>
import fileTransferPictures from './gulp/tasks/transfer_pictures';

// |=============== WE CONNECT | TRANSFERRING ALL OTHER FILES  ===============>
import fileTransferOther from './gulp/tasks/transfer_other';

// |=============== WE CONNECT | A TASK THAT OPTIMIZES THE MAIN HTML FILE ===============>
import changingMarkupHome from './gulp/tasks/markup_home';

// |=============== WE CONNECT | A TASK THAT OPTIMIZES THE HTML FILES OF PAGES ===============>
import changingMarkupPages from './gulp/tasks/markup_pages';

// |=============== WE CONNECT | A TASK THAT OPTIMIZES STYLE FILES ===============>
import changingStyles from './gulp/tasks/changing_styles';

// |=============== WE CONNECT | A TASK THAT OPTIMIZES SCRIPT FILES ===============>
import changingScripts from './gulp/tasks/changing_scripts';

// |=============== WE CONNECT | A TASK THAT CREATES A SPRITE FROM SVG IMAGES ===============>
import svgOptimization from './gulp/tasks/svg_optimization';

// |=============== WE CONNECT | A TASK THAT CONFIGURES A LOCAL SERVER ===============>
import watchFiles from './gulp/tasks/watch_files';

// |=============== WE CONNECT | A TASK THAT OPTIMIZING IMAGES ===============>
import { imageOptimizationJpg, imageOptimizationPng } from './gulp/tasks/image_optimization';

// |=============== CONFIGURING THE LAUNCH OF A TASK THAT DELETES THE MAIN FOLDER ===============>
exports.cleanRoot = cleanRoot;

// |=============== SETTING UP THE LAUNCH OF TASKS THAT OPTIMIZE IMAGES ===============>
exports.imageOptimizationJpg = imageOptimizationJpg;
exports.imageOptimizationPng = imageOptimizationPng;

// |=============== SETTING UP THE ORDER OF TASKS TO RUN THE PROJECT BUILDER ===============>
exports.default = series(
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
  svgOptimization,
  watchFiles,
);
