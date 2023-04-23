
# Project Architecture using GruntJS
## Introduction

This project utilizes GruntJS to streamline the development process and improve project architecture. With GruntJS, the following features have been implemented:

## Developed by, 

- [M S Praveen Kumar](https://www.praveenms.site)

## Architecture Use
- JS obfuscation for improved security
- JS debugging for better error tracking and resolution
- Production-level project architecture for optimized performance
- CSS and JavaScript minification for faster loading times
- Grunt watch for automatic build and deployment
- Grunt concat for CSS and JS files
By implementing GruntJS, this project has achieved an efficient and reliable development process.

## Getting Started
To get started with this project, you will need to have Node.js and Grunt installed on your system. Once installed, run npm install to install the project dependencies.

## Usage
To build and deploy the project, run the following command in your terminal:

```
grunt
```
This will initiate the build process and deploy the project to the appropriate location. Then by just entering the single command ```grunt``` all the process will start to exucute such as ```grunt watch, grunt css:concat, grunt js:concat``` all together.

To watch for changes in your project and automatically build and deploy, run the following command:

```
grunt watch
```
This will keep a watch on your project files and automatically rebuild and deploy when changes are detected.


```
grunt concat:css
```
This will keep a track of a css file in you working directory(Project not in htdocs after updating the css just enter the above command in terminal to merge and update the css)

```
grunt concat:css
```
This will keep a track of a js file in you working directory(Project not in htdocs after updating the js just enter the above command in terminal to merge and update the js)
