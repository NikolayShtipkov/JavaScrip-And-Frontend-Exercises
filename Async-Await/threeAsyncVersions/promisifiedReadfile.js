const fs = require('fs');
// Using a function for reading files that returns a promise. Converting the fs.readfile() function which uses callbacks.
const promisifiedReadfile = (file, encoding) => 
  new Promise((resolve, reject) => {
    fs.readFile(file, encoding, (err, text) => {
			if (err) {
				return reject(err.message);
      }
        resolve(text);
      });
});

module.exports = promisifiedReadfile