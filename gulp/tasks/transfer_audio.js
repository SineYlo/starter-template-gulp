/* eslint-disable arrow-body-style */
// |=============== WE CONNECT | GULP MODULE ===============>
import { src, dest } from 'gulp';

// |=============== WE CONNECT | PATHS TO THE MAIN FOLDERS ===============>
import { path } from '../paths';

// |=============== SETTING UP A TASK TO TRANSFER ALL AUDIO FILES ===============>
const fileTransferAudio = () => {
  return src(path.source.audio)
    .pipe(dest(path.build.audio));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferAudio;
