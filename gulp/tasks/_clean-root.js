/* eslint-disable arrow-body-style */
import del from 'del';
import { projectFolder } from '../config';

const cleanRoot = () => {
  return del(projectFolder);
};

export default cleanRoot;
