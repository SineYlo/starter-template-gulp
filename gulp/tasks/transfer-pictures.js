/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import { path } from '../config';

// |=============== SETTING UP A TASK TO TRANSFER ALL IMAGE FILES ===============>
const fileTransferPictures = () => {
  return src(path.source.pictures)
    .pipe(dest(path.build.pictures));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferPictures;
