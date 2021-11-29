/* eslint-disable arrow-body-style */
// |=============== WE CONNECT | DEL MODULE ===============>
import del from 'del';

// |=============== WE CONNECT | PATHS TO THE MAIN FOLDERS ===============>
import { projectFolder } from '../paths';

// |=============== DELETING THE MAIN FOLDER OF THE PROJECT - DIST ===============>
const cleanRoot = () => {
  return del(projectFolder);
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default cleanRoot;
