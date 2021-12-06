# Starter Template ⚔️

## 📖 A little about the template:
At first, I thought for a long time about posting this template or not, but I decided anyway. I don't know why, but still. Maybe someone will like this template and will use it. This template is quite non-standard and I don't think that something like this is walking around somewhere on the network. I like to create something of my own and the template is no exception. Maybe you already know or not, but I still have a formula for creating a responsive website. So this is my second creation that has seen the light.

## 🔗 Navigating through this manual
- [How to start using the assembly](#how)
- [How to start a build](#howstart)
- [Folder structure](#folder)
- [Using favicons](#fav)
- [Preparation before starting to write code](#before)
- [Answers on questions](#faq)
- [Partners](#partners)
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
1. First delete the old folder `.git` if it is there and initialize GIT again - `git init`
2. Then create a remote repository for your project
3. Optionally, change the name of the branch to main using the command - `git branch -m master main`
4. Then write the command - `git add.`
5. Then - `git commit -m "commit name"`
6. Then link the local repository to the remote one using the command - `git remote add origin link to the repository`
7. Now send the changes to the remote repository - `git push -u origin branch`
8. When Git is installed and all past actions have been performed, you can run this command - `npm i`
9. After the packages have been installed and the husky package has been initialized, you need to write this command - `npx husky add .husky/pre-commit "npm run pre-commit"`
10. Then run the command - `npm run clean`
11. All packages are installed, git is initialized, and the basic commands are written. Now select a team from the list below and start developing!

### Basic commands for starting the project builder:

1. `npm run html-check` - starts checking all html files in the specified directory for errors using w3c-validator
2. `npm run clean` - runs a command that clears the dist directory
3. `npm run image-svg` - runs a command that optimizes svg images and also creates a sprite
4. `npm run image-jpg` - runs a command that optimizes jpg images and converts them to webp and avif formats
5. `npm run image-png` - runs a command that optimizes png images and converts them to webp and avif formats
6. `npm run dev` - runs a command that optimizes script and style files, and also starts the server
7. `npm run build:dev` - runs a command that optimizes script and style files, but does not start the server
8. `npm run build:prod` - runs a command that optimizes script and style files, as well as prepares these files for production
9. `npm run lint:editorconfig` - runs a command that checks all files for errors by .editorconfig

### Important points:
- If you do not have these files in the root directory src - `favicon.ico`, `favicon.svg`, `mask-desktop.svg` and you want this assembly to run, go to the file along the path - `gulp/config.js` and delete the lines numbered 17, 18, 19
- To run the command `npm run html-check`, you may need to install Java on your computer
- Quite an important point if you initialize `git` after installing packages, then most of the functionality of this assembly will not work

## <a name="folder"></a> 📁 Folder structure
```
├── gulp                                                      #
|     ├── tasks
|     |     ├── changing-scripts.js
|     |     ├── changing-styles.js
|     |     ├── clean-root.js
|     |     ├── image-optimization.js
|     |     ├── markup-home.js
|     |     ├── markup-pages.js
|     |     ├── svg-optimization.js
|     |     ├── transfer-audio.js
|     |     ├── transfer-fonts.js
|     |     ├── transfer-other.js
|     |     ├── transfer-pictures.js
|     |     ├── transfer-video.js
|     |     └── watch-files.js
|     └── config.js
├── src
|     ├── assets    
|     |     ├── audio            
|     |     └── video
|     ├── fonts
|     |     ├── font-name-1
|     |     ├── font-name-2
|     |     └── font-name-3
|     ├── img
|     |     ├── global
|     |     |     ├── favicons                 
|     |     |     └── sprites
|     |     ├── home
|     |     └── pages
|     ├── js
|     |     ├── components
|     |     |     ├── home
|     |     |     └── pages
|     |     ├── global
|     |     ├── pages
|     |     └── main.js
|     ├── kit
|     |     ├── components
|     |     |     ├── home
|     |     |     └── pages
|     |     ├── pages
|     |     └── templates    
|     |           ├── _footer.html
|     |           └── _header.html
|     ├── scss 
|     |     ├── base
|     |     |     └── _destyle.scss
|     |     ├── components
|     |     |     ├── global
|     |     |     |     ├── _footer.scss
|     |     |     |     └── _header.scss
|     |     |     ├── home
|     |     |     └── pages
|     |     ├── config
|     |     |     ├── fonts 
|     |     |     |     ├── global
|     |     |     |     |     └── _fonts.scss
|     |     |     |     ├── home
|     |     |     |     └── pages
|     |     |     ├── settings
|     |     |     |     ├── global
|     |     |     |     |     └── _settings.scss
|     |     |     |     ├── home
|     |     |     |     └── pages
|     |     |     └── variables
|     |     |           ├── global
|     |     |           |     └── _variables.scss
|     |     |           ├── home
|     |     |           └── pages
|     |     ├── layout
|     |     |     ├── mixins    
|     |     |     |     ├── global
|     |     |     |     |     └── _mixins.scss
|     |     |     |     └── parts 
|     |     |     |           ├── _block-position.scss  
|     |     |     |           ├── _container.scss
|     |     |     |           ├── _font-face.scss
|     |     |     |           ├── _general.scss
|     |     |     |           └── _responsive.scss
|     |     |     └── uikit
|     |     |           ├── global
|     |     |           |     └── _ui.scss
|     |     |           ├── home
|     |     |           └── pages
|     |     ├── media
|     |     |     ├── global 
|     |     |     |     └── _query-reduced.scss
|     |     |     ├── home
|     |     |     |     ├── _query-320.scss
|     |     |     |     ├── _query-572.scss
|     |     |     |     ├── _query-720.scss
|     |     |     |     ├── _query-920.scss
|     |     |     |     ├── _query-1120.scss
|     |     |     |     ├── _query-1320.scss
|     |     |     |     ├── _query-1520.scss
|     |     |     |     ├── _query-1720.scss
|     |     |     |     └── _query-1920.scss
|     |     |     └── pages
|     |     ├── modules
|     |     |     ├── home
|     |     |     |     └── modules-home.scss
|     |     |     └── pages
|     |     ├── pages
|     |     ├── theme
|     |     |     ├── home
|     |     |     |     └── dark-home.scss
|     |     |     └── pages
|     |     └── styles.scss
|     ├── browserconfig.xml
|     ├── index.html
|     └── main.webmanifest
├── .babelrc
├── .ecrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .stylelintrc
├── gulpfile.babel.js
├── LICENSE
├── package.json
└── README.md
```
***
If you have any questions or suggestions, you can write to the `issues` section or email me - `contact@sineylo-dev.ru`    
> Semantic versioning is used on this repository - [semver.org](https://semver.org)
