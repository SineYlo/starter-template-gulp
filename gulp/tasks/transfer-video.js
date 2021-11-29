/* eslint-disable arrow-body-style */
// |=============== WE CONNECT | GULP MODULE ===============>
import { src, dest } from 'gulp';

// |=============== WE CONNECT | PATHS TO THE MAIN FOLDERS ===============>
import { path } from '../paths';

// |=============== SETTING UP A TASK TO TRANSFER ALL VIDEO FILES ===============>
const fileTransferVideo = () => {
  return src(path.source.video)
    .pipe(dest(path.build.video));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferVideo;
