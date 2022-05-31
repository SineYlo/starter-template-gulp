/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
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
  return src(config.source.docs)
    .pipe(dest(config.build.docs));
};

const fileTransferFonts = () => {
  return src(config.source.fonts)
    .pipe(dest(config.build.fonts));
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
  fileTransferOther,
};
