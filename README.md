# javascript-static-template

This is a template that uses webpack + eta (templating engine) to offer the highest level of modularity 
for building a **static website** without using any third-party javascript frameworks such as React, Vue, Angular etc..

The only reason I developed this template is because I wanted to have a blueprint which I can use to develop websites that are built on my way of thinking and not have to rely on frameworks that use different ways of approaching the development process. 

You can use this template to code a web app which you can understand, without getting tangled in the hassles of each framework.
> :warning:  **Highly recommended to have some advanced knowledge in building web apps** - otherwise, you could use simple html/css/javascript folder structures or just use a framework.

## Features
- no frameworks!! you can build your website from scratch.
- lightweight and blazing fast embedded JS templating engine - [eta]( https://github.com/joemccann/dillinger) // however customizable ( [ejs](https://github.com/mde/ejs), [handlebars](https://github.com/handlebars-lang/handlebars.js/), [nunchucks](https://github.com/mozilla/nunjucks) || [see more](https://github.com/webdiscus/html-bundler-webpack-plugin#recipe-template-engine) )
- uses [webpack](https://github.com/joemccann/dillinger) to minimize the app size and to improve app performance / load times
- uses the new [html-bundler-webpack-plugin](https://github.com/webdiscus/html-bundler-webpack-plugin) to simplify the plugin structure
(as it covers multiple essential plugins in one) and to offer a high level of bundler customizability

### Advantages 
- **Simplicity and speed**
- Cost-effective
- Enhanced security
- Reliable performance
- Easy hosting options
- Version control with Git
- SEO-friendly structure
- Improved performance on low-end devices
- High availability through caching
- No database management required

### Limitations 
- Limited interactivity
- Dependency on web development skills
- Inefficient content management
- Reduced functionality

## Use cases
**Due to the limitations of static websites, this template shines the best when the content doesn't change often and it doesn't rely on external data.**

### This template is best suited for: 
- **Brochure Websites**: Static websites work well for businesses or individuals looking to showcase basic information, such as company profiles, contact details, and product/service descriptions.

- **Personal Portfolios**: Artists, photographers, writers, or freelancers can create visually appealing static websites to display their work, portfolios, and achievements without the need for complex functionalities.

- **Blogs and Documentation**: Static websites can efficiently serve as blogs or documentation platforms, where content is primarily text-based and doesn't require frequent updates or user interactions.

- **Landing Pages**: Static websites are often used for landing pages or promotional campaigns, where the focus is on a specific call to action, capturing leads, or providing concise information.

### This template is not suited for : 
- E-commerce
- Social Networking
- News and Media
- User-generated Content such as forums, discussion boards, wikis, or review sites
- Personalized Experiences
- Real-time Data


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

- **dist folder** - the folder where webpack will bundle all the code 
- **src** - this folder is split into
  - **assets** : this is where your fonts, images, javascript code and scss code will live
  - **views** : this is where you will write your html / templating engine code (the configured code is recognised by webpack as *eta*, although it has the .html extension (configurable in webpack.config.js))
     - split into **pages and partials** : partials are pieces of reusable code, similar to components in React (navbar, footer, etc..) 

## Setup

clone the repo
- Go to the base of the repo and click "Use this template"
- Click on "Create a new repository"
- Create the repository and then clone it to your local machine using git clone

install the dependencies
```
npm install
```
build and run the server
```
npm run build
npm start
```


