const request = require('request');
const fs = require('fs');
const { url } = require('inspector');
const { format } = require('path');
const args = process.argv.slice(2);

let source = args[0];
let destination = args[1];

request(source, (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log(body);
  fs.writeFile(destination, body, err => {
    const stats = fs.statSync(destination);
    if (err) {
      console.error(err)
      return
    }
    else {
      console.log(`Downloaded and saved ${stats.size} bytes to ${destination}`)
    }
  });
});
request(source);


