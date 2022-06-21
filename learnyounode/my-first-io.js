const fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);
let answer = contents.toString().split("\n").length - 1;
console.log(answer);