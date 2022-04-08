/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import { config } from '../config';

// |=============== SETTING UP A TASK TO TRANSFER ALL FONT FILES ===============>
const fileTransferFonts = () => {
  return src(config.source.fonts)
    .pipe(dest(config.build.fonts));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferFonts;
