// npm  - global command, comes with node
// npm --version

// Package - Module - Dependency ---> all same things 

// Package/Module/Dependency can be installed as :

// 1. Local Dependency : use it only in this particular project 
//    npm install <packageName> or npm i <packageName>

// 2. Global Dependency : use it in any project
//    npm install -g <packageName>
//    sudo npm install -g <packageName> 

// package.json : manifest file (stores important info about project/package)
// To create package.json :
// 1. manual appraoch :- create package.json in the root, create properties etc.
// 2. npm init :- step by step, asking for values.
// 3. npm init -y :- everything default
// RESOURCE : https://nodesource.com/blog/the-basics-of-package-json/

// dev dependencies:
// npm i <packageName> -D or npm i <packageName> --save-dev
// e.g. npm i nodemon -D

// uninstall package:
// npm uninstall <packageName>

// npx : It is called Package Runner Tool
// run a CLI tool (like create-react-app) without installign gloablly
// e.g. 
// npx create-react-app my-app
// cd my-app
// npm start


console.log("Hello");