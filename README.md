<h1 align="center">⚔️ Starter Template ⚔️</h1>

<p align="center">
  <b>Based on the Gulp collector using a modular system</b>
</p>

<p align="center">
  <a href="https://github.com/SineYlo/starter-template-gulp/blob/main/README-RU.md">README in Russian</a>
</p>

## 📖 Template Information
We all know how many assemblies are walking around the network and they are all +- somewhat similar to each other. In general, it is quite difficult to find something original. And realizing this moment, I decided to take up the creation of such an assembly. Some of the originality of my build lies in the structure of files and folders, which you will get acquainted with later. It is made in such a way that it can be used to make up both ordinary landing pages and large online stores. In addition to all this, it still works on the Gulp, a modular system is configured in it, which simplifies development at times.

## 🔗 Navigation
- [How to start using the build](#how)
- [Stages of starting the build](#stages)
- [Commands to run](#commands)
- [Important points](#important-points)
- [File and folder structure](#structure)
- [Favicons](#favicons)
- - [Removing favicons](#favicons-del)
- - [The sizes of favicons that we will need](#favicons-sizes)
- - [Where to get all these sizes](#favicons-where)
- - [Where to put all files](#favicons-folders)
- [Archiving the project](#archiving)
- [Snippets](#snippets)
- [Answers to frequently asked questions](#faq)
- [Created with the support of](#partners)
- [What is used in this repository](#used)

## <a name="how"></a> 💡 How to start using the build
To start using this build, you must clone this repository using one of the options below.

```
git clone https://github.com/SineYlo/starter-template-gulp.git
```
```
git clone git@github.com:SineYlo/starter-template-gulp.git
```
```
gh repo clone SineYlo/starter-template-gulp
```
## <a name="stages"></a> ⚙️ Stages of starting the build
Quite an important section, because if you do something wrong, as it is written, you just might not earn something or, in principle, the assembly will not start. I'll tell you right away if you don't need to check html files during commit, and in general you don't need git, then skip stage 1 to 7, as well as stage 9. The only thing desirable to do is to delete the hidden folder `.git`.

1. After you have cloned the repository, delete the hidden folder `.git` and initialize git yourself using the `git init` command.
2. Then create a remote repository for your project, for example, on GitHub.
3. If necessary, change the name of the branch to `main` using the command - `git branch -m main`.
4. Then write the command - `git add.`, which will add all files to the staged area.
5. Now we need to commit our files - `git commit -m "commit text"`.
6. Next, we will link the local and remote repository using the command - `git remote add origin link to the remote repository`. The link must end with `.git`.
7. Well, finally we will send the changes to the remote repository - `git push -u origin branch name`.
8. When git is initialized and all the previous actions are completed, you can run this command - `npm i`, which will install all the packages in the `package.json`.
9. Packages downloaded, git initialized, now you can write the command - `npx husky add .husky/pre-commit "npm run pre-commit"`.
10. It remains to register the command - `npm run root:clean` and you can generally start working with the assembly.

## <a name="commands"></a> 📋 Commands to run

1. `npm run root:clean` - deletes the final folder (in my case, this is the `dist` folder).
2. `npm run image:svg` - optimizes svg graphics and creates a sprite.
3. `npm run image:jpg` - optimizes jpg and jpeg images + converts them to webp and avif.
4. `npm run image:png` - optimizes png images + converts them to webp and avif.
5. `npm run image:fav` - optimizes favicons and transfers them to the final folder.
6. `npm run image:all` - performs full optimization of all images (in fact, this is the same as writing 4 previous commands in a row).
7. `npm run build:dev` - starts the dev build, but without starting the server.
8. `npm run build:prod` - starts the prod build, which already has minification and optimization of files, but also does not start the server.
9. `npm run build:code` - in general, this is the same dev build just without minification of html files (you need to use it if you use tags such as `pre` and `code` in your work).
10. `npm run build:watch` - starts the dev build as well as the server.
11. `npm run build:full-start` - performs a full launch of the dev build, which also includes tasks for optimizing graphics, but does not start the server.
12. `npm run build:full-server` - performs a full launch of the dev build, which also includes tasks for optimizing graphics + starts the server.
13. `npm run build:archive` - creates an archive from the final folder, so it is important to first register the command `npm run build:dev` or `npm run build:prod`, and then this one.
14. `npm run build:backend` - we prepare your work for further transmission, for example, to a backend programmer (in fact, this is +- the same prod, but without minification).
15. `npm run build:cache` - caches files that can later be uploaded, for example, to the server (it is important to run this command after `npm run build:prod`).
16. `npm run lint:html` - starts checking all html files for validity (sometimes it may not work).
17. `npm run lint:editorconfig` - starts checking all files for compliance with tab rules.

## <a name="important-points"></a> 📌 Important points

- If you do not have these files in the root of the src folder - `favicon.svg` and `mask-desktop.svg`, then you need to go to `gulp/config.js` and delete lines numbered 21 and 22. If suddenly for some reason the numbers are not highlighted, then you need to delete this - `${sourceFolder}/favicon.svg` and this - `${sourceFolder}/mask-desktop.svg`. If you do not delete these lines, then you will get an error when starting the build.
- Before running the command `npm run lint:html` you need to install Java on your computer.
- If you do not initialize git in the project folder, then html file validation will not work.

## <a name="structure"></a> 📁 File and folder structure

This structure was written in haste because of the large volume. If something is unclear to you or you want to somehow supplement what you have written, you can create a question in `Issues` or immediately make `Pull requests`.

```
├── .vscode                                                 # snippets and recommended extensions are stored in this folder
|    ├── snippets                                           # snippets are stored in this folder
|    |    └── html.json                                     # the file where snippets are stored
|    └── extensions.json                                    # the file where extension IDs are stored
├── gulp                                                    # tasks are stored in this folder, as well as a config file with paths
|    ├── tasks                                              # tasks are stored in this folder
|    |    ├── _archiving-files.js                           # task - archiving of the final folder
|    |    ├── _cache-files.js                               # task - file caching
|    |    ├── _changing-scripts-backend.js                  # task - optimization of scripts for further transmission to the backend programmer
|    |    ├── _changing-scripts.js                          # task - optimization of scripts
|    |    ├── _changing-styles-backend.js                   # task - optimization of styles for further transmission to the backend programmer
|    |    ├── _changing-styles.js                           # task - optimization of styles
|    |    ├── _clean-root.js                                # task - deleting the final folder
|    |    ├── _image-optimization.js                        # task - optimization of bitmap images
|    |    ├── _markup-home.js                               # task - optimization of markup for index.html
|    |    ├── _markup-pages.js                              # task - optimization of markup for additional html pages
|    |    ├── _markup-precode-home.js                       # task - optimization of markup without minification for index.html
|    |    ├── _markup-precode-pages.js                      # task - optimization of markup without minification for additional html pages
|    |    ├── _rewrite-files.js                             # task - overwriting files after caching
|    |    ├── _svg-optimization.js                          # task - creating a sprite
|    |    ├── _transfer-audio.js                            # task - moving audio
|    |    ├── _transfer-docs.js                             # task - moving documents
|    |    ├── _transfer-fonts.js                            # task - moving fonts
|    |    ├── _transfer-other.js                            # task - moving other files
|    |    ├── _transfer-vector.js                           # task - optimization of vector graphics and moving
|    |    ├── _transfer-video.js                            # task - moving video
|    |    └── _watch-files.js                               # task - server settings, as well as tracking changes in files
|    └── config.js                                          # a file with paths, as well as different settings
├── src                                                     # the folder where all the sources are located
|    ├── assets                                             # folder with media files and documents
|    |    ├── audio                                         # we put audio files in this folder
|    |    ├── doc                                           # we put the documents in this folder
|    |    └── video                                         # we put video files in this folder
|    ├── fonts                                              # the folder where fonts are stored
|    |    └── font-name-$                                   # this folder will need to be renamed under the name of the font and already put the font files in it
|    ├── html                                               # this folder contains components for pages, as well as additional html page files
|    |    ├── components                                    # the folder where the components for all html pages are stored
|    |    |    ├── global                                   # this folder stores global html components that are used on many pages.
|    |    |    |    ├── _footer.html                        # a pre-created file for the site footer
|    |    |    |    └── _header.html                        # a pre-created file for the site header
|    |    |    ├── home                                     # in this folder we create components for the main page index.html
|    |    |    └── pages                                    # in this folder we create components for additional pages
|    |    └── pages                                         # in this folder we create additional pages ourselves
|    ├── img                                                # all graphics are stored in this folder
|    |    ├── global                                        # vector graphics + favicons are stored in this folder
|    |    |    ├── favicons                                 # in this folder we put the favicons in png format
|    |    |    ├── sprites                                  # in this folder we add svgs, which are later converted into a sprite
|    |    |    └── svg                                      # we also add svgs to this folder, but they will simply be optimized and moved to the final folder
|    |    ├── home                                          # in this folder we put the raster graphics for the main page
|    |    └── pages                                         # in this folder we add raster graphics for additional pages
|    ├── js                                                 # all js files are stored in this folder
|    |    ├── components                                    # components are stored in this folder
|    |    |    ├── global                                   # in this folder we put global components that are used on many pages
|    |    |    ├── home                                     # in this folder we put the components only for the main page
|    |    |    └── pages                                    # in this folder we put the components for additional pages
|    |    ├── modules                                       # this folder stores js files that will run before loading the DOM tree
|    |    |    ├── home                                     # there is already a file for the main page in this folder
|    |    |    |    └── modules-home.js                     # the file itself, which is also already connected to index.html
|    |    |    └── pages                                    # in this folder we put such files for other pages
|    |    ├── pages                                         # in this folder we put the js files of other pages into which we will connect the components
|    |    └── main.js                                       # the main file for the main page
|    ├── scss                                               # all scss files are stored in this folder
|    |    ├── base                                          # style normalizers are stored in this folder
|    |    |    ├── _destyle-classes.scss                    # a ready-made file with normalizing styles (you can find out more about it in my destyle repository)
|    |    |    ├── _destyle-mixins.scss                     # a ready-made file with normalizing styles (you can find out more about it in my destyle repository)
|    |    |    └── _destyle.scss                            # a ready-made file with normalizing styles (you can find out more about it in my destyle repository)
|    |    ├── components                                    # components are stored in this folder
|    |    |    ├── global                                   # in this folder we put global components that are used on many pages
|    |    |    |    ├── _footer.scss                        # the finished file for the footer of the site
|    |    |    |    └── _header.scss                        # ready-made file for the site header
|    |    |    ├── home                                     # in this folder we put the components that are used on the main page
|    |    |    └── pages                                    # in this folder we put the components that are used on additional pages
|    |    ├── config                                        # different settings (font connection and variables) are stored in this folder
|    |    |    ├── fonts                                    # files with font connections are stored in this folder
|    |    |    |    ├── global                              # in this folder there is already a ready-made file with the connection of fonts that are used on many pages
|    |    |    |    |    └── _fonts.scss                    # the file itself with the connection of fonts
|    |    |    |    ├── home                                # in this folder it will be possible to create a file with the connection of fonts only for the main page
|    |    |    |    └── pages                               # in this folder it will be possible to create files with the connection of fonts for additional pages
|    |    |    └── variables                                # files with variables are stored in this folder
|    |    |         ├── global                              # in this folder there is already a ready-made file with variables that are used on many pages
|    |    |         |    └── _variables.scss                # the file itself with variables
|    |    |         ├── home                                # in this folder, you can create a file with variables that will be used only on the main page
|    |    |         └── pages                               # in this folder, you can create files with variables that will be used on additional pages
|    |    ├── layout                                        # this folder stores mixins and style files in which we prescribe styles for example from the UI Kit
|    |    |    ├── mixins                                   # all mixins are stored in this folder
|    |    |    |    ├── global                              # in this folder is stored a file in which all mixins are connected
|    |    |    |    |    └── _mixins.scss                   # the main file itself with the connection of all mixins
|    |    |    |    └── parts                               # in this folder you can create mixins for different tasks
|    |    |    |         ├── _background.scss               # this file stores mixins for the background property
|    |    |    |         ├── _block-position.scss           # this file stores mixins related to positioning
|    |    |    |         ├── _breakpoints.scss              # this file stores mixins with breakpoints
|    |    |    |         ├── _container.scss                # this file stores the mixins for the container
|    |    |    |         ├── _conversion.scss               # this file stores the conversion functions
|    |    |    |         ├── _font-face.scss                # this file stores a mixin with the connection of fonts
|    |    |    |         ├── _general.scss                  # this file stores common mixins that are difficult to put into any group
|    |    |    |         ├── _media.scss                    # this file stores mixins with different media requests
|    |    |    |         └── _responsive.scss               # this file stores mixins for a responsive site (for more information, see my responsive repository)
|    |    |    └── ui                                       # this folder stores the basic style files in which we usually enter styles for the container or from the UI Kit
|    |    |         ├── global                              # there is already a global file in this folder, which is used on many pages
|    |    |         |    └── _ui.scss                       # the file itself with basic styles
|    |    |         ├── home                                # we put similar files in this folder, but for the main page
|    |    |         └── pages                               # we put similar files in this folder, but for additional pages
|    |    ├── media                                         # all media requests are stored in this folder
|    |    |    ├── global                                   # this folder contains a file with a media request that disables animations
|    |    |    |    └── _query-reduced.scss                 # the file itself in which the media request is registered
|    |    |    ├── home                                     # in this folder we put the files with breakpoints (if you don't use my grid, then delete the files that are already there)
|    |    |    |    ├── _query-320.scss                     # ready breakpoint for 320
|    |    |    |    ├── _query-572.scss                     # ready breakpoint for 572
|    |    |    |    ├── _query-720.scss                     # ready breakpoint for 720
|    |    |    |    ├── _query-920.scss                     # ready breakpoint for 920
|    |    |    |    ├── _query-1120.scss                    # ready breakpoint for 1120
|    |    |    |    ├── _query-1320.scss                    # ready breakpoint for 1320
|    |    |    |    ├── _query-1520.scss                    # ready breakpoint for 1520
|    |    |    |    ├── _query-1720.scss                    # ready breakpoint for 1720
|    |    |    |    └── _query-1920.scss                    # ready breakpoint for 1920
|    |    |    └── pages                                    # in this folder we put files with breakpoints for additional pages
|    |    ├── modules                                       # in this folder there are files in which we connect libraries
|    |    |    ├── home                                     # in this folder there is a file in which we connect the library for the main page
|    |    |    |    └── modules-home.scss                   # the file itself in which we connect the libraries
|    |    |    └── pages                                    # in this folder we put the files in which we will connect libraries for additional pages
|    |    └── pages                                         # this folder contains the main pages themselves by the styles type
|    ├── index.html                                         # the main html file of the main page
|    └── main.webmanifest                                   # a manifest in which you can record different settings for your site (for example, a description or favicons)
├── temp                                                    # you can put all sorts of additional and temporary files in this folder
|    └── logo-browserstack.svg                              # the partner's logo that is used in the readme
├── .babelrc                                                # babel config with preset
├── .ecrc                                                   # this file contains files and folders that will not be checked using editorconfig-checker
├── .editorconfig                                           # file with tab settings
├── .eslintrc                                               # config file for the eslint linter
├── .gitignore                                              # a ready-made file with exceptions for git, but you can also register your own
├── .htmlhintrc                                             # config file for htmlhint linter
├── .stylelintrc                                            # config file for the stylelint linter
├── gulpfile.babel.js                                       # the main gulp file into which all tasks are imported
├── LICENSE                                                 # license of this template (MIT)
├── package.json                                            # the file with the project settings, as well as all the packages that are used are listed here
├── README-RU.md                                            # documentation for the template in russian
└── README.md                                               # template documentation in english
```

## <a name="favicons"></a> 🌠 Favicons

In my template, the connection of almost all possible favicons is configured, and even for the future, this is done so that the template will be relevant for a long time.

### <a name="favicons-del"></a> Removing favicons
I must say right away that if you don't want to use favicons at all, then you will need to go to `src/index.html` and delete this:
```
<link href="favicon.svg" rel="icon" sizes="any" type="image/svg+xml">
<link href="img/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png">
<link href="img/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png">
<link href="img/favicons/favicon-48x48.png" rel="icon" sizes="48x48" type="image/png">
<link href="img/favicons/favicon-64x64.png" rel="icon" sizes="64x64" type="image/png">
```
```
<link href="img/favicons/favicon-180x180.png" rel="apple-touch-icon">
<link href="mask-desktop.svg" rel="mask-icon" color="#00а0ff">
<meta name="apple-mobile-web-app-title" content="site-name">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```
Then from `src/main.webmanifest`:
```
"icons": [
  { "src": "img/favicons/favicon-16x16.png", "type": "image/png", "sizes": "16x16" },
  { "src": "img/favicons/favicon-32x32.png", "type": "image/png", "sizes": "32x32" },
  { "src": "img/favicons/favicon-36x36.png", "type": "image/png", "sizes": "36x36" },
  { "src": "img/favicons/favicon-48x48.png", "type": "image/png", "sizes": "48x48" },
  { "src": "img/favicons/favicon-57x57.png", "type": "image/png", "sizes": "57x57" },
  { "src": "img/favicons/favicon-60x60.png", "type": "image/png", "sizes": "60x60" },
  { "src": "img/favicons/favicon-64x64.png", "type": "image/png", "sizes": "64x64" },
  { "src": "img/favicons/favicon-72x72.png", "type": "image/png", "sizes": "72x72" },
  { "src": "img/favicons/favicon-76x76.png", "type": "image/png", "sizes": "76x76" },
  { "src": "img/favicons/favicon-96x96.png", "type": "image/png", "sizes": "96x96" },
  { "src": "img/favicons/favicon-114x114.png", "type": "image/png", "sizes": "114x114" },
  { "src": "img/favicons/favicon-120x120.png", "type": "image/png", "sizes": "120x120" },
  { "src": "img/favicons/favicon-144x144.png", "type": "image/png", "sizes": "144x144" },
  { "src": "img/favicons/favicon-152x152.png", "type": "image/png", "sizes": "152x152" },
  { "src": "img/favicons/favicon-167x167.png", "type": "image/png", "sizes": "167x167" },
  { "src": "img/favicons/favicon-180x180.png", "type": "image/png", "sizes": "180x180" },
  { "src": "img/favicons/favicon-192x192.png", "type": "image/png", "sizes": "192x192" },
  { "src": "img/favicons/favicon-256x256.png", "type": "image/png", "sizes": "256x256" },
  { "src": "img/favicons/favicon-512x512.png", "type": "image/png", "sizes": "512x512" },
  { "src": "favicon.svg", "type": "image/svg+xml", "sizes": "any" }
],
```
And don't forget to delete it from this file - `src/gulp/config.js`
```
`${sourceFolder}/favicon.svg`,
`${sourceFolder}/mask-desktop.svg`,
```
### <a name="favicons-sizes"></a> The sizes of favicons that we will need
```
 16x16  |  32x32  |  36x36  |  48x48  |  57x57  |  60x60  |  64x64  |  72x72  |  76x76  |  96x96  |
114x114 | 120x120 | 144x144 | 152x152 | 167x167 | 180x180 | 192x192 | 256x256 | 512x512 |
```
### <a name="favicons-where"></a> Where to get all these sizes

In normal realities, a designer should do this, and you just have to connect all this. But I think everyone understands perfectly well that, as a rule, the designer does not do much and at best you only get a desktop layout. Of course, if the designer has not thought through any favicons at all, it would probably be wise to generally refuse to connect. If there is at least one icon, for example, in the format `.svg`, then it is already possible to do something at least 90%.

I think it's no secret that vector graphics scale without loss of quality. Actually, that's why we will need to take a favicon in the `.svg` format and set its dimensions in Figma based on the data above. Each size in the `.png` format will naturally need to be exported.

With this I think everything is clear. But we also have some strange icon called `mask-desktop.svg`. You are unlikely to be able to create this icon with a 99.9% probability from a regular colored `.svg` favicon. The `mask-icon` should have all vectors black. This is a new format that Apple came up with. This icon is rarely found on websites, but it is necessary to know about it and it is desirable to tell designers, if of course there is such an opportunity, to create it as well. I.e. it turns out in the end that everything is fine, you should have a regular color `.svg` favicon and `mask-icon`, which will be black color.

### <a name="favicons-folders"></a> Where to put all files

`favicon.svg` и `mask-desktop.svg` - you need to put it in the root of the src folder.

We add all the other `.png` files along the path - `src/img/global/favicons`.

## <a name="archiving"></a> 💾 Archiving the project

You can archive your project if you suddenly need to send it somewhere or upload it, for example, to hosting. To do this, you first need to write a command - `npm run build:prod` or `npm run build:dev`, and then `npm run build:archive`.

## <a name="snippets"></a> 🔮 Snippets

At the moment, snippets are written only for HTML. They are on the way - `.vscode/snippets/html.json`. All you have to do is open the HTML file and use one of the commands specified in the - `prefix` line.

## <a name="faq"></a> 🗡 Answers to frequently asked questions

```
Question: Are you planning to switch to Webpack?
-----
Answer: I think so, but I can't say for sure when it will be.
```
```
Question: Why such a large folder structure?
-----
Answer: This is the uniqueness of this template and this structure helps to conveniently distribute files.
```
```
Question: Is it necessary to use all this?
-----
Answer: No, not necessarily, but keep in mind that the collector is configured specifically for my folder and file structure.
```
```
Question: Is it possible to change the template?
-----
Answer: Yes, you can completely change it to suit your needs and tasks.
```
```
Question: What should I do if I find an error or want to add a template?
-----
Answer: You can ask a question in Issues or make Pull requests right away.
```
```
Question: How do I view old versions of the template?
-----
Answer: This can be done in the Releases section.
```

## <a name="partners"></a> ⚜️ Created with the support of

<a href="https://www.browserstack.com">
  <img src="temp/logo-browserstack.svg?sanitize=false" width="250" alt="browserstack">
</a>

## <a name="used"></a> 📜 What is used in this repository

- Semantic versioning - [semver.org](https://semver.org)
- Conventional commits - [conventionalcommits.org](https://www.conventionalcommits.org/ru/v1.0.0/)
