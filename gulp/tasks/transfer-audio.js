/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import { config } from '../config';

// |=============== SETTING UP A TASK TO TRANSFER ALL AUDIO FILES ===============>
const fileTransferAudio = () => {
  return src(config.source.audio)
    .pipe(dest(config.build.audio));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferAudio;
