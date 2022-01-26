# Starter Template ⚔️

## 📖 A little about the template:
At first, I thought for a long time about posting this template or not, but I decided anyway. I don't know why, but still. Maybe someone will like this template and will use it. This template is quite non-standard and I don't think that something like this is walking around somewhere on the network. I like to create something of my own and the template is no exception. Maybe you already know or not, but I still have a formula for creating a responsive website. So this is my second creation that has seen the light.

## 🔗 Navigating through this manual
- [How to start using the assembly](#how)
- [How to start a build](#howstart)
- [Folder structure](#folder)
- [Using favicons](#fav)
- [Typograf](#typograf)
- [Archiving the project](#archive)
- [Snippets](#snippets)
- [Preparation before starting to write code](#before)
- [Answers on questions](#faq)
- [With the support of](#partners)
- [Contact information](#contact)

## <a name="how"></a> 💡 How to start using the assembly
To start using this build, you must clone this repository using one of the options below.  

```
git clone https://github.com/SineYlo/starter-template.git
```
```
git clone git@github.com:SineYlo/starter-template.git
```
```
gh repo clone SineYlo/starter-template
```
## <a name="howstart"></a> ⚙️ How to start a build
The most important section is because if you do something wrong as it is written, you just might not earn something or, in principle, the assembly will not start.  

### The order of running commands after cloning the repository:
1. First delete the old folder `.git` if it is there and initialize GIT again - `git init`.
2. Then create a remote repository for your project.
3. Optionally, change the name of the branch to main using the command - `git branch -m master main`.
4. Then write the command - `git add.`.
5. Then - `git commit -m "commit name"`.
6. Then link the local repository to the remote one using the command - `git remote add origin link to the repository`.
7. Now send the changes to the remote repository - `git push -u origin branch`.
8. When Git is installed and all past actions have been performed, you can run this command - `npm i`.
9. After the packages have been installed and the husky package has been initialized, you need to write this. command - `npx husky add .husky/pre-commit "npm run pre-commit"`.
10. Then run the command - `npm run clean`.
11. All packages are installed, git is initialized, and the basic commands are written. Now select a team from the list below and start developing!

### Basic commands for starting the project builder:

1. `npm run html-check` - starts checking all html files in the specified directory for errors using w3c-validator.
2. `npm run clean` - runs a command that clears the dist directory.
3. `npm run image-svg` - runs a command that optimizes svg images and also creates a sprite.
4. `npm run image-jpg` - runs a command that optimizes jpg images and converts them to webp and avif formats.
5. `npm run image-png` - runs a command that optimizes png images and converts them to webp and avif formats.
6. `npm run dev` - runs a command that optimizes script and style files, and also starts the server.
7. `npm run build:dev` - runs a command that optimizes script and style files, but does not start the server.
8. `npm run build:prod` - runs a command that optimizes script and style files, as well as prepares these files for production.
9. `npm run lint:editorconfig` - runs a command that checks all files for errors by .editorconfig.
10. `npm run archive` - this command creates an archive with the project, which you can then safely upload or send somewhere, for example.

### Important points:
- If you do not have these files in the root directory src - `favicon.ico`, `favicon.svg`, `mask-desktop.svg` and you want this assembly to run, go to the file along the path - `gulp/config.js` and delete the lines numbered 17, 18, 19.
- To run the command `npm run html-check`, you may need to install Java on your computer.
- Quite an important point if you initialize `git` after installing packages, then most of the functionality of this assembly will not work.

## <a name="folder"></a> 📁 Folder structure
```
├── gulp                                                   # this folder stores the configuration file, as well as all tasks
|     ├── tasks                                            # all tasks for gulp are stored in this folder   
|     |     ├── changing-scripts.js                        # the task in which scripts are optimized
|     |     ├── changing-styles.js                         # the task in which styles are optimized
|     |     ├── clean-root.js                              # the task of cleaning the main dist folder
|     |     ├── image-optimization.js                      # jpg and png images are optimized in this task
|     |     ├── markup-home.js                             # the task in which the main one is optimized index
|     |     ├── markup-pages.js                            # the task of optimizing html pages other than index
|     |     ├── svg-optimization.js                        # the task in which the sprite is created from svg
|     |     ├── transfer-audio.js                          # a task in which all audio files are transferred
|     |     ├── transfer-fonts.js                          # the task in which all font files are transferred
|     |     ├── transfer-other.js                          # the task in which all other files are transferred
|     |     ├── transfer-pictures.js                       # the task in which all gif files are transferred
|     |     ├── transfer-video.js                          # a task in which all video files except gif are transferred
|     |     └── watch-files.js                             # the task in which the server is configured
|     └── config.js                                        # main configuration file with paths
├── src                                                    # main working folder
|     ├── assets                                           # the folder where different audio and video files are stored    
|     |     ├── audio                                      # we put all audio files here         
|     |     └── video                                      # we put all video files here
|     ├── fonts                                            # the main folder with fonts
|     |     ├── font-name-1                                # rename this folder to the font name and put the files there
|     |     ├── font-name-2                                # rename this folder to the font name and put the files there
|     |     └── font-name-3                                # rename this folder to the font name and put the files there
|     ├── img                                              # the main folder for all images
|     |     ├── global                                     # main folder for global image files
|     |     |     ├── favicons                             # in this folder we put all the favicons except .ico and .svg               
|     |     |     └── sprites                              # in this folder we put all svg images except .svg favicon
|     |     ├── home                                       # in this folder, store images only for the main page
|     |     └── pages                                      # create a subfolder with the page name in this folder and put the images for this page there
|     ├── js                                               # the main folder for storing scripts
|     |     ├── components                                 # the folder where different pieces of code are stored
|     |     |     ├── home                                 # put fragments in this folder only for the main page
|     |     |     └── pages                                # create a subfolder with the page name in this folder and put the code snippets for this page there
|     |     ├── global                                     # in this folder put the script files that are used on all pages
|     |     ├── pages                                      # in this folder, create a subfolder with the name of the page and put the main script files for this page there
|     |     └── main.js                                    # the main script file for the main page
|     ├── kit                                              # main folder for html files
|     |     ├── components                                 # in this folder we put the individual parts of the pages
|     |     |     ├── home                                 # in this folder we put the parts only for the main page
|     |     |     └── pages                                # in this folder, create a subfolder with the name of the page and put the parts for this page there
|     |     ├── pages                                      # in this folder, you can also create a subfolder with the name of the page and put the main file for this page there
|     |     └── templates                                  # this folder stores files with a common header and a basement of the site for all pages
|     |           ├── _footer.html                         # here we write the html code for the footer of the site
|     |           └── _header.html                         # here we write the html code for the site header
|     ├── scss                                             # the main folder for working with scss files
|     |     ├── base                                       # only zeroing style files are stored in this folder
|     |     |     └── _destyle.scss                        # the updated zeroing style file can be viewed in more detail in my other repository
|     |     ├── components                                 # this folder stores the code for parts of the pages
|     |     |     ├── global                               # just like c html, there are 2 files stored here with a header and footer for all pages
|     |     |     |     ├── _footer.scss                   # here we write the code for the footer of the site
|     |     |     |     └── _header.scss                   # here we write the code for the site header
|     |     |     ├── home                                 # here are the parts exclusively for the main page
|     |     |     └── pages                                # by analogy, you also create a subfolder here with the name of the page and put parts for these pages there
|     |     ├── config                                     # folders with different settings are stored in this folder
|     |     |     ├── fonts                                # in this folder we connect fonts
|     |     |     |     ├── global                         # in this folder there will be only 1 global file in it we connect fonts for all pages
|     |     |     |     |     └── _fonts.scss              # the file itself is global with the connection of fonts
|     |     |     |     ├── home                           # this folder may not be needed, but sometimes it happens that only on the main page there is a certain font here you can create a file _fonts-home.scss
|     |     |     |     └── pages                          # this folder may also not be needed, like the last one, but still, if necessary, create a subfolder with the name of the page and put the _fonts file there-the name.scss
|     |     |     ├── settings                             # files with settings from plug-ins are stored in this folder
|     |     |     |     ├── global                         # this folder contains a file with global module settings for all pages
|     |     |     |     |     └── _settings.scss           # the file itself
|     |     |     |     ├── home                           # this folder can store a file with module settings only for the main page conditionally _settings-home.scss
|     |     |     |     └── pages                          # you can also create a subfolder in this folder and create a file with settings for this page already in it
|     |     |     └── variables                            # the main folder where files with variables are stored
|     |     |           ├── global                         # this folder stores global variables that apply to all pages
|     |     |           |     └── _variables.scss          # the file itself
|     |     |           ├── home                           # this folder can store a file with variables only for the main page
|     |     |           └── pages                          # you can also create a subfolder in this folder and place a file with variables for this page already in it
|     |     ├── layout                                     # this folder contains files with mixins and code for uikit
|     |     |     ├── mixins                               # this folder contains files with mixins
|     |     |     |     ├── global                         # this folder contains a global file with mixins into which you connect the parts
|     |     |     |     |     └── _mixins.scss             # the file itself
|     |     |     |     └── parts                          # parts with ready-made mixes are stored in this folder, but you can also create your own, and don't forget to connect it to the main file later
|     |     |     |           ├── _block-position.scss     # this file stores mixins for positioning the block
|     |     |     |           ├── _container.scss          # this file stores mixins with settings for the container
|     |     |     |           ├── _font-face.scss          # this file stores a mixin for connecting fonts
|     |     |     |           ├── _general.scss            # this file stores different mixins that do not belong to any group
|     |     |     |           └── _responsive.scss         # this file stores a mixin with settings for a responsive site
|     |     |     └── uikit                                # this folder contains files with the code for uikit
|     |     |           ├── global                         # a global file with settings for all pages is stored in this folder
|     |     |           |     └── _ui.scss                 # the file itself
|     |     |           ├── home                           # this folder may contain a file with the code for uikit exclusive to the main page
|     |     |           └── pages                          # in this folder, you can also create a subfolder for a specific page and create a file with the code for uikit for this page already in it
|     |     ├── media                                      # all files with different media queries are stored in this folder
|     |     |     ├── global                               # this folder contains a file that disables all animations on the website for people with disabilities
|     |     |     |     └── _query-reduced.scss            # the file itself
|     |     |     ├── home                                 # this folder stores files with media queries for a responsive website exclusively for the main page
|     |     |     |     ├── _query-320.scss                # 320px media quries
|     |     |     |     ├── _query-572.scss                # 572px media quries
|     |     |     |     ├── _query-720.scss                # 720px media quries
|     |     |     |     ├── _query-920.scss                # 920px media quries
|     |     |     |     ├── _query-1120.scss               # 1120px media quries
|     |     |     |     ├── _query-1320.scss               # 1320px media quries
|     |     |     |     ├── _query-1520.scss               # 1520px media quries
|     |     |     |     ├── _query-1720.scss               # 1720px media quries
|     |     |     |     └── _query-1920.scss               # 1920px media quries
|     |     |     └── pages                                # in this folder you can also create a subfolder in which media queries for the corresponding pages will be stored
|     |     ├── modules                                    # this folder contains files in which we connect various external modules
|     |     |     ├── home                                 # this folder stores plug-ins for the main page only
|     |     |     |     └── modules-home.scss              # the file itself
|     |     |     └── pages                                # in this folder, you can also create a subfolder in which files with plug-ins for this page will be stored
|     |     ├── pages                                      # in this folder, you can create a subfolder for additional pages of the site and the file itself is already in it
|     |     ├── theme                                      # the main folder where files with different themes are stored
|     |     |     ├── home                                 # only files with themes exclusively for the main page are stored in this folder
|     |     |     |     └── dark-home.scss                 # the file itself
|     |     |     └── pages                                # in this folder you can also create a subfolder in which the files with the theme for this page will be stored
|     |     └── styles.scss                                # the main style file for the main page into which other files can be imported
|     ├── browserconfig.xml                                # file with settings of favicon tiles for Windows
|     ├── index.html                                       # the main html file of the main page
|     └── main.webmanifest                                 # the manifest containing the project settings, as well as the connection of all other favicons
├── .babelrc                                               # the file in which the preset for babel is installed
├── .ecrc                                                  # the file containing the exception to check for editorconfig
├── .editorconfig                                          # file with settings for the editor
├── .eslintrc                                              # settings for the javascript linter
├── .gitignore                                             # fully customized .gitignore
├── .stylelintrc                                           # customized linter for css/sass/scss files
├── gulpfile.babel.js                                      # the main gulp file
├── LICENSE                                                # file with the license indication
├── package.json                                           # a file with commands and installed packages
└── README.md                                              # file with assembly instructions
```

## <a name="fav"></a> ☄️ Using favicons

In my template, the connection of absolutely all possible favicons is configured, and even for the future this is done so that the template is relevant for a long time.

> I want to say right away if you don't need favicons at all then delete the lines from index.htm from 24 to 37. Also remove lines 7 to 28 from main.webmanifest.

### Now what sizes of favicons will we need:
```
 16x16  |  32x32  |  36x36  |  48x48  |  57x57  |  60x60  |  64x64  |  72x72  |  76x76  |  96x96  |
114x114 | 120x120 | 144x144 | 152x152 | 167x167 | 180x180 | 192x192 | 256x256 | 512x512 |
```
### Now in order where what sizes to connect:
- `16x16 32x32 48x48 64x64` - we will need to connect them to index.html, and also in main.webmanifest.  
- `any` - or in another way svg favicon we will need only one.
- `mask-desktop.svg` - the new favicon, which was invented by Apple, all its vectors should be black.
- all other sizes are needed for Android and Apple devices, we connect them in the main.webmanifest file.

### Important points:

1. The files favicon.ico, favicon.svg and mask-desktop.svg must be put in the root of the project where the file is index.html (for files .png favicons folder created).
2. If you don't use some sizes, just don't connect them and delete them from the corresponding files.

## <a name="typograf"></a> 🔮 Typograf

It was decided to add a package with a typographer who will check spelling and automatically insert different characters and non-breaking spaces. So the text will be displayed correctly, beautifully and correctly everywhere!

## <a name="archive"></a> 💾 Archiving the project

You can archive your project if you suddenly need to send it somewhere or upload it to hosting, for example. To do this, you first need to register the command - `npm run build:prod` or `npm run build:dev`, and then `npm run archive`.

## <a name="snippets"></a> 🌠 Snippets

So far, snippets have been written only for HTML. All snippets are on the path - `.vscode/snippets/html.json`. All you need to do is open the HTML file and use one of the commands that is specified in the - `prefix` line.

## <a name="before"></a> 🔥 Preparation before starting to write code

Before you start writing code, I advise you to run through the structure of the project and if you don't need some folders, just delete them so that they don't hurt your eyes (of course, the collector won't transfer them to the main dist folder if there are no files there, but still). Also, in addition to folders, it is desirable in principle to familiarize yourself with the template because it is quite difficult to understand. If something is done wrong, then errors may occur.

## <a name="faq"></a> ⚡️ Answers on questions

```
Question: Will there be a migration to Webpack?
Answer: Yes, it will, but I can't say exactly when it will happen.
---
Question: Why such a large folder structure?
Answer: This is the uniqueness of this template, and this structure helps to conveniently distribute files.
---
Question: Is it necessary to use all this?
Answer: No, not necessarily, the template is fully configurable for your tasks.
---
Question: Is it possible to change the assembly?
Answer: Yes, you can.
---
Question: Is it possible to participate in the development of the template?
Answer: Yes, you can either send a PR for this, or send the information to the mail or to issues.
---
Question: Are there plans to adapt the template to the Backend?
Answer: Yes, I'm already thinking about it.
```
## <a name="partners"></a> 💎 With the support of

![Browserstack](https://i.ibb.co/qBgp1dc/Browserstack-logo.png)

## <a name="contact"></a> 🏰 Contact information
If you have any questions or suggestions, you can write to the `issues` section or email me - `contact@sineylo-dev.ru`    
> Semantic versioning is used on this repository - [semver.org](https://semver.org)  
<a name="contact"></a>
