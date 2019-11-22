#!/usr/bin/env/ node
const cp = require('child_process');

const CURR_DIR = process.cwd();

console.log(CURR_DIR);
console.log(process.argv.slice(2));
cp.exec("npm i");
