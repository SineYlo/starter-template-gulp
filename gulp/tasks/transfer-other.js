/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import { path } from '../config';

// |=============== SETTING UP A TASK TO TRANSFER ALL OTHER FILES ===============>
const fileTransferOther = () => {
  return src(path.source.root)
    .pipe(dest(path.build.root));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferOther;
