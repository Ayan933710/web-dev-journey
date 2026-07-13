/*
let n = 5;

for (let i = 0; i < n; i++) {
  console.log("Hello , ", i);
}

let args = process.argv;

for (let i = 2; i < args.length; i++) {
  console.log("Hello ", args[i]);
}

// getting data from another file in the same folder to this file

const math = require("./math");

console.log(math.sum(2, 2));
console.log(math.mul(5, 3));

// getting data from another files in another folder under same root folder to this file

const info = require("./Fruits");

console.log(info);
console.log(info[1]);
*/

// getting data from another file to this file using import and export

// need to add "type": "module" in package.json file to use import and export in node js

// NOTE : never use both module.exports & require and export & import in the same file.

import { sum, mul } from "./math.js";

console.log(sum(2, 2));
console.log(mul(5, 6));

// learning npm to install required dependencies to use (lending others code for myself)

// remember that we do not need to git push or send node_modules to anyone. it should be deleted before sharing and only package.json file is send or shared from which anyone can install the required dependencies on their own by just writing command (npm install) in the same directory as package.json
