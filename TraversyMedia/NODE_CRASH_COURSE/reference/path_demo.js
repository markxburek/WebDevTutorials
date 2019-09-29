// learn more at https://nodejs.org/api/path.html
const path = require('path');  // core module

// Full path to filename
console.log(__filename);

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Get base from object
console.log(path.parse(__filename).base);

// Concatenate paths (great when you have different delimiter issues)
//e.g. create ..test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));