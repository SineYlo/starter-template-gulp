/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import { config } from '../config';

// |=============== SETTING UP A TASK TO TRANSFER ALL VIDEO FILES ===============>
const fileTransferVideo = () => {
  return src(config.source.video)
    .pipe(dest(config.build.video));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferVideo;
