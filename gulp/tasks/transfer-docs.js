/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import { path } from '../config';

// |=============== SETTING UP A TASK TO TRANSFER ALL DOC FILES ===============>
const fileTransferDocs = () => {
  return src(path.source.docs)
    .pipe(dest(path.build.docs));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferDocs;
