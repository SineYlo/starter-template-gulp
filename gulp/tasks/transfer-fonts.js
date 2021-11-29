/* eslint-disable arrow-body-style */
// |=============== WE CONNECT | GULP MODULE ===============>
import { src, dest } from 'gulp';

// |=============== WE CONNECT | PATHS TO THE MAIN FOLDERS ===============>
import { path } from '../paths';

// |=============== SETTING UP A TASK TO TRANSFER ALL FONT FILES ===============>
const fileTransferFonts = () => {
  return src(path.source.fonts)
    .pipe(dest(path.build.fonts));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferFonts;
