# React Stencil
This is a template, boilerplate, or as I like to call it, a stencil for creating ReactJS components.  This is a code stencil, because you can pick it up and use it as a guide to start tracing your next project.  You should use this stencil for components that you would like to pull out of your projects and publish individually on npm.

It comes setup so that you can easily publish your new components to npm, while using a common set of core technologies: Babel, React, and Webpack.  In addition, support for GitHub pages is embedded, so you can automatically demo and show off your component.

Credit goes to Brad Stiff's [very excellent guide](https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220) on publishing React components, which was used to get started on this project.

# Installation
Simple stencil makes for the best tracing err.. coding!
1. Create a new directory
2. Navigate into your directory
3. Run the following command:
```console
npm install react-component-stencil
```

# Usage
Publishing new versions to NPM is as easy as running:
```console
npm publish
```
(Don't forget to increment the version in your package.json)

Build your component in the examples/dist directory:
```console
npm run build
```

Deploy a demo of your component to the gh-pages branch:
```console
npm run deploy
```

Build a new version and publish it to GitHub pages in one command:
```console
npm run publish-demo
```