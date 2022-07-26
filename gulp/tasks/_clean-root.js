/* eslint-disable arrow-body-style */
// => IMPORTING EXTERNAL MODULES AND THE BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
import del from 'del';
import { projectFolder } from '../config';

// => SETTING UP AN OUTPUT FOLDER CLEANUP TASK
// ===================================================================================================>
const cleanRoot = () => {
  return del(projectFolder);
};

// => EXPORTING A TASK
// ===================================================================================================>
export default cleanRoot;
