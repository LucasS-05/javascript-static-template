# javascript-base-template

**This is a template that uses webpack + eta (templating engine) + express.js to offer the highest level of modularity 
for building a website without using any third-party javascript frameworks such as React, Vue, Angular etc..**

The only reason I developed this template is because I wanted to have a blueprint which I can use to develop websites that are built on my way of thinking and not have to rely on frameworks that use different ways of approaching the development process. 

You can use this template to code a web app which you can understand, without getting tangled in the hassles of each framework.
> :warning:  **Highly recommended to have some advanced knowledge in building web apps** - otherwise, you could use simple html/css/javascript folder structures or just use a framework.

## Features
- no frameworks!! you can build your website from scratch.
- lightweight and blazing fast embedded JS templating engine - [eta]( https://github.com/joemccann/dillinger) // however customizable ( [ejs](https://github.com/mde/ejs), [handlebars](https://github.com/handlebars-lang/handlebars.js/), [nunchucks](https://github.com/mozilla/nunjucks) || [see more](https://github.com/webdiscus/html-bundler-webpack-plugin#recipe-template-engine) )
- uses [webpack](https://github.com/joemccann/dillinger) to minimize the app size and to improve app performance / load times
- uses the new [html-bundler-webpack-plugin](https://github.com/webdiscus/html-bundler-webpack-plugin) to simplify the plugin structure
(as it covers multiple essential plugins in one) and to offer a high level of bundler customizability


## Why [eta](https://github.com/joemccann/dillinger)?

Apart from the simplicity of the engine, I used it for the following reasons:
- 0 dependencies 
- Only ~3.5 KB minzipped
- Configurable
  - Plugins, custom delimiters, caching
- Precompilation, partials, async
- Layout support!!!!!
- Very minimal

cool huh?

## Folder structure

```bash
.
├── app.js
├── dist
│   ├── assets
│   └── index.html 
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   │   ├── js
│   │   └── styles
│   │       └── main.scss
│   └── views
│       ├── page
│       │   └── index.html
│       └── partials
│           └── navbar.html
│           └── footer.html
└── webpack.config.js
```

## Setup

clone the repo
```
git clone https://github.com/LucasS-05/javascript-template/
cd javascript-template
```
install the dependencies
```
npm install
```
build and run the server
```
npm run build
npm start
```




