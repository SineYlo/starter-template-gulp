/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import { path } from '../config';

// |=============== SETTING UP A TASK TO TRANSFER ALL FONT FILES ===============>
const fileTransferFonts = () => {
  return src(path.source.fonts)
    .pipe(dest(path.build.fonts));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferFonts;
