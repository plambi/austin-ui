# React Components

This repo contains a collection of React components I have found myself repeatedly copy and pasting across projects. It also contains a premade page that showcases all of the components.

## Dependencies

Components in this repo use Tailwind for styling, and use the css color variables found in template.css. Ensure that your globals.css file defines these colors and then change them however you see fit.

# Installation

Add this repo as a submodule into your existing repo using

- git submodule add https://github.com/plambi/austin-ui.git components/austin-ui

Then pull changes using

- cd components/austin-ui
- git pull origin main

## Standards

- All components use the same color and size types found in types.ts as configuration props. Some componenets do not have multiple colors, they pretty much all have sizes though.
- The vast majority of components have a class name of the form aui-select-field which can be then be overwritten in a css file within your project. Ensure to use !important so that overrides function correctly.
