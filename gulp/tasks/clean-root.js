/* eslint-disable arrow-body-style */
// |=============== CONNECTING ALL MODULES ===============>
import del from 'del';
import { projectFolder } from '../config';

// |=============== DELETING THE MAIN FOLDER OF THE PROJECT - DIST ===============>
const cleanRoot = () => {
  return del(projectFolder);
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default cleanRoot;
