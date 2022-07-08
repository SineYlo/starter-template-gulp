/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import rename from 'gulp-rename';
import { config } from '../config';

const fileTransferAudio = () => {
  return src(config.source.audio)
    .pipe(dest(config.build.audio));
};

const fileTransferVideo = () => {
  return src(config.source.video)
    .pipe(dest(config.build.video));
};

const fileTransferDocs = () => {
  return src(config.source.documents)
    .pipe(dest(config.build.documents));
};

const fileTransferFonts = () => {
  return src(config.source.fonts)
    .pipe(rename({
      dirname: './',
    }))
    .pipe(dest(config.build.fonts));
};

const fileTransferPhp = () => {
  return src(config.source.php)
    .pipe(dest(config.build.root));
};

const fileTransferOther = () => {
  return src(config.source.root)
    .pipe(dest(config.build.root));
};

export {
  fileTransferAudio,
  fileTransferVideo,
  fileTransferDocs,
  fileTransferFonts,
  fileTransferPhp,
  fileTransferOther,
};
