/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import { config } from '../config';

// |=============== SETTING UP A TASK TO TRANSFER ALL OTHER FILES ===============>
const fileTransferOther = () => {
  return src(config.source.root)
    .pipe(dest(config.build.root));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferOther;
