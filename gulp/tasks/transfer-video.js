/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import { path } from '../config';

// |=============== SETTING UP A TASK TO TRANSFER ALL VIDEO FILES ===============>
const fileTransferVideo = () => {
  return src(path.source.video)
    .pipe(dest(path.build.video));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferVideo;
