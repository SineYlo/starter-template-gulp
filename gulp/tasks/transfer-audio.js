/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import { path } from '../config';

// |=============== SETTING UP A TASK TO TRANSFER ALL AUDIO FILES ===============>
const fileTransferAudio = () => {
  return src(path.source.audio)
    .pipe(dest(path.build.audio));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferAudio;
