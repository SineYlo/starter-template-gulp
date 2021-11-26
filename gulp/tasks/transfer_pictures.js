/* eslint-disable arrow-body-style */
// |=============== WE CONNECT | GULP MODULE ===============>
import { src, dest } from 'gulp';

// |=============== WE CONNECT | PATHS TO THE MAIN FOLDERS ===============>
import { path } from '../paths';

// |=============== SETTING UP A TASK TO TRANSFER ALL IMAGE FILES ===============>
const fileTransferPictures = () => {
  return src(path.source.pictures)
    .pipe(dest(path.build.pictures));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferPictures;
