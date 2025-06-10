const path = require('path');

console.log('--- PATH MODULE ---');


console.log('path separator: ' + path.sep);

const filePath = path.join('/content', 'subfolder', 'file.txt');
console.log('file path: ' + filePath);

const base = path.basename(filePath);
console.log('base: ' + base);

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'file.txt');
console.log('absolute path is: ' + absolutePath);
