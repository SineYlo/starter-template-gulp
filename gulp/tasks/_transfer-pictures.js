/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import { config } from '../config';

// |=============== SETTING UP A TASK TO TRANSFER ALL IMAGE FILES ===============>
const fileTransferPictures = () => {
  return src(config.source.pictures)
    .pipe(dest(config.build.pictures));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferPictures;
