/* eslint-disable arrow-body-style */
// |=============== WE CONNECT | GULP MODULE ===============>
import { src, dest } from 'gulp';

// |=============== WE CONNECT | PATHS TO THE MAIN FOLDERS ===============>
import { path } from '../paths';

// |=============== SETTING UP A TASK TO TRANSFER ALL OTHER FILES ===============>
const fileTransferOther = () => {
  return src(path.source.root)
    .pipe(dest(path.build.root));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferOther;
