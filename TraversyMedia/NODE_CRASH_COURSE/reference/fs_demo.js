const fs = require('fs');
const path = require('path');

// Create folder named 'test'
// fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
//     if(err) throw err;
//     console.log('folder created...')
// });

// Create and overwrite what is in the file

// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'),
//     'Hello World', 
//     err =>{
//         if(err) throw err;
//         console.log('file written to...');
//         // Append to existing file asynchronously

//         fs.appendFile(
//             path.join(__dirname, '/test', 'hello.txt'), 
//             'I love Node.js', 
//             err =>{
//                 if(err) throw err;
//                 console.log('file appended to...')
//             }
//         );
//     }
// );

// Read file

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log('here is data: ' + data);
});

// Rename File
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, '/test', 
'hellorenamed.txt'), (err) => {
    if (err) throw err;
    console.log('File renamed');
});


 