// eslint-disable arrow-body-style
// => IMPORTING EXTERNAL MODULES AND THE BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
import { src, dest } from 'gulp';
import rename from 'gulp-rename';
import { config } from '../config';

// => SETTING UP THE TASK OF TRANSFERRING | AUDIO FILES
// ===================================================================================================>
const fileTransferAudio = () => {
  return src(config.source.audio)
    .pipe(dest(config.build.audio));
};

// => SETTING UP THE TASK OF TRANSFERRING | VIDEO FILES
// ===================================================================================================>
const fileTransferVideo = () => {
  return src(config.source.video)
    .pipe(dest(config.build.video));
};

// => SETTING UP THE TASK OF TRANSFERRING | DOCUMENTS
// ===================================================================================================>
const fileTransferDocs = () => {
  return src(config.source.documents)
    .pipe(dest(config.build.documents));
};

// => SETTING UP THE TASK OF TRANSFERRING | DOCUMENTS
// ===================================================================================================>
const fileTransferFonts = () => {
  return src(config.source.fonts)
    .pipe(rename({
      dirname: './',
    }))
    .pipe(dest(config.build.fonts));
};

// => SETTING UP THE TASK OF TRANSFERRING | PHP FILES
// ===================================================================================================>
const fileTransferPhp = () => {
  return src(config.source.php)
    .pipe(dest(config.build.root));
};

// => SETTING UP THE TASK OF TRANSFERRING | OTHER FILES
// ===================================================================================================>
const fileTransferOther = () => {
  return src(config.source.root)
    .pipe(dest(config.build.root));
};

// => EXPORTING ALL TASKS
// ===================================================================================================>
export {
  fileTransferAudio,
  fileTransferVideo,
  fileTransferDocs,
  fileTransferFonts,
  fileTransferPhp,
  fileTransferOther,
};
