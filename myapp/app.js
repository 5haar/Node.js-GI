var fs = require("fs");

var planets = 'planets.txt';

fs.readFile(planets, 'utf8', (err, data) => {
  if(err) {
    console.log(err.message);
} else {
    console.log(data);
}
});

