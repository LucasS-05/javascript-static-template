# javascript-base-template

This is a template that uses webpack + eta (templating engine) + express.js to offer the highest level of modularity 
for building a website without using any third-party javascript frameworks such as React, Vue, Angular etc.


## Features
- uses the lightweight and blazing fast embedded JS templating engine - [eta](https://github.com/joemccann/dillinger)
- uses webpack to minimize the app size and to improve app performance / load times  - [webpack](https://github.com/joemccann/dillinger)
- uses the new html-bundler-webpack-plugin to simplify the plugin structure (as it covers multiple essential plugins in one)
and to enable the possibility to work with templating engines. 


## Why [eta](https://github.com/joemccann/dillinger)?

Well, apart from the simplicity of the engine, i used it for the following reasons:
- 0 dependencies 
- Only ~3.5 KB minzipped
- Configurable
  - Plugins, custom delimiters, caching
- Precompilation, partials, async
- Layout support!!!!!
- Very minimal

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
build the server
```
npm run build
```



