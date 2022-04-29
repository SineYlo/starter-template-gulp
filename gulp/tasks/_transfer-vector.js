/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import { src, dest } from 'gulp';
import rename from 'gulp-rename';
import svgmin from 'gulp-svgmin';
import { config } from '../config';

// |=============== SETTING UP A TASK TO TRANSFER ALL IMAGE FILES ===============>
const fileTransferVector = () => {
  return src(config.source.vector)
    .pipe(svgmin())
    .pipe(rename({
      dirname: 'svg/',
    }))
    .pipe(dest(config.build.pictures));
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default fileTransferVector;
