/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import { config } from '../config';

// |=============== SETTING UP A TASK TO TRANSFER ALL DOC FILES ===============>
const fileTransferDocs = () => {
  return src(config.source.docs)
    .pipe(dest(config.build.docs));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferDocs;
