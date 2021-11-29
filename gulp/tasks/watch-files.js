/* eslint-disable arrow-body-style */
// |=============== WE CONNECT | GULP MODULE ===============>
import { watch } from 'gulp';

// |=============== WE CONNECT | BROWSER-SYNC MODULE ===============>
import browserSync from 'browser-sync';

// |=============== WE CONNECT | TASK (CHANGING-MARKUP-HOME) ===============>
import changingMarkupHome from './markup-home';

// |=============== WE CONNECT | TASK (CHANGING-MARKUP-PAGES) ===============>
import changingMarkupPages from './markup-pages';

// |=============== WE CONNECT | TASK (CHANGING-STYLES) ===============>
import changingStyles from './changing-styles';

// |=============== WE CONNECT | TASK (CHANGING-SCRIPTS) ===============>
import changingScripts from './changing-scripts';

// |=============== WE CONNECT | TASK (FILE-TRANSFER-PICTURES) ===============>
import fileTransferPictures from './transfer-pictures';

// |=============== WE CONNECT | TASK (SVG-OPTIMIZATION) ===============>
import svgOptimization from './svg-optimization';

// |=============== WE CONNECT | PATHS TO THE MAIN FOLDERS ===============>
import { path, projectFolder } from '../paths';

// |=============== CREATING A TASK AND ALSO SETTING UP A LOCAL SERVER ===============>
const watchFiles = (callback) => {
  browserSync.init({
    server: {
      baseDir: projectFolder,
    },
    port: 3000,
    notify: false,
    open: false,
  });
  callback();
};

// |=============== WE RUN THE TASK WITH EACH CHANGE IN ONE OF THE FILES ===============>
watch(path.watch.htmlHome, changingMarkupHome);
watch(path.watch.htmlPages, changingMarkupPages);
watch(path.watch.styles, changingStyles);
watch(path.watch.scripts, changingScripts);
watch(path.watch.pictures, fileTransferPictures);
watch(path.watch.sprites, svgOptimization);

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default watchFiles;
